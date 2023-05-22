export function setupCounter(element) {
  let counter = 0
  const setCounter = (count) => {
    counter = count
    element.innerHTML = `count is ${counter}`
    clientLogs.log('Adjusting Height')
    gadgets.window.adjustHeight()
  }
  element.addEventListener('click', () => setCounter(counter + 1))
  setCounter(0)
}
