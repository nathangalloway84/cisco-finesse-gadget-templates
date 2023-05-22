var clientLogs, containerServices, id, prefs, utils

gadgets.HubSettings.onConnect = () => {
    prefs = new gadgets.Prefs()
            
    id = prefs.getString("id")

    clientLogs = finesse.cslogger.ClientLogger

    clientLogs.init(gadgets.Hub, import.meta.env.VITE_GADGET_LOGGER_NAME)

    utils = finesse.utilities.Utilities

    finesse.clientservices.ClientServices.init(finesse.gadget.Config) 

    containerServices = finesse.containerservices.ContainerServices.init()

    containerServices.addHandler(finesse.containerservices.ContainerServices.Topics.ACTIVE_TAB, () => {
        gadgets.window.adjustHeight()
    })

    containerServices.makeActiveTabReq()

    containerServices.setMyGadgetTitle(import.meta.env.VITE_GADGET_TITLE)

    const link = document.createElement('link')
    
    link.type = "text/css"

    link.rel = "stylesheet"

    link.href = `/3rdpartygadget/files/${import.meta.env.VITE_GADGET_FOLDER_NAME}/index.css`

    document.getElementsByTagName('head')[0].appendChild(link)

    const script = document.createElement('script')

    script.setAttribute('src', `/3rdpartygadget/files/${import.meta.env.VITE_GADGET_FOLDER_NAME}/index.js`)

    script.setAttribute('type', 'module')

    document.getElementsByTagName('head')[0].appendChild(script)
}