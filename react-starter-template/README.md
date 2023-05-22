# react-starter-template

## ABOUT
![Screenshot](https://github.com/nathangalloway84/finesse-gadgets/blob/main/cisco-finesse-gadget-templates/react-starter-template/SCREENSHOT.png?raw=true "Screenshot")

This gadget is a starter template for using React to create powerful Finesse gadgets.

## HOW DOES IT WORK
If you've developed Finesse gadgets in the past, you'll notice a common pattern.  There is a gadget.xml, index.html (we're using this rather than embedding HTML directly in the XML as CDATA), and a JS file.  The JS file in this project is called gadget.js and it should look like most other Finesse examples you've seen.

In a nutshell, we load the Finesse container and then we inject in the React application.  Everything inside the React application (src folder) should be quite similar to creating any other React application.

Just a quick reminder, Finesse & JQuery are both in the global scope. They can be accessed from every part of your React application: console.log(finesse, gadgets, clientLogs, containerServices, id, prefs, utils, etc...)

## PACKAGES
### In this project
- React: JavaScript framework
- Vite: Compiler

### Others to consider
You'll probably be making HTTP requests:
- Axios: HTTP Client

And you'll probably want things to look good:
- Tailwind.css: CSS library, components & templates
- HeroIcons: Icons

## IMPORTANT FILES
- .env.example: You'll want a .env file, with the 3 variables already stored. Vite uses these 3 variables to build your config, so make sure you don't remove them without making other code changes. Additionally, you may add your own variables.
- public/gadget.xml: The XML file that gets called by your Finesse Layout.  Occassionally, you may want to toggle some features in here, so have a look at what it does.
- gadget.html: The HTML file loaded by gadget.xml. Have a look to familiarize, but you probably don't need to change anything.
- gadget.js: The JS file loaded by gadget.html. This looks like most other Finesse JS files. You may want to initialize other Finesse services, or maybe there's some things in here you don't need.  Customize as you need, but ensure you the initialization of Container Services, as well as the injection of the React JS & CSS.
- index.html: This HTML file is purely for Vite to build your React application. Have a look at the "build" command in package.json and you'll see we delete it from the build directory so it doesn't get deployed to production. Nothing would be harmed if it wasn't deleted, but just trying to avoid extra files and confusion. Unless you know what you're doing, probably best not to touch this file.
- vite.config.js: The configuration for how to build the application. Unless you know what you're doing, probably best not to touch this file.
- src (folder): Where your entire react application lives

## USING AS A STARTER KIT
We assume if you've come this far that your computer already has what it needs to develop a React application.

1. Download the project to your computer
2. Rename the vue-starter-template folder to what you want your project to be called.
3. Navigate to the base directory
```
cd C:\Code\[your-project-name]
```
4. Install the package dependencies. *Note: You may want to delete ./package-lock.json before running this, and likewise change the "name" property in the ./package.json file
```
npm i
```
5. Open the project with your favorite code editor. If using Visual Code...
```
code .
```
6. Copy the ./env.example file to ./env
7. Update the ./env to what you want the folder, gadget title & logger to be named (Finesse settings)
```
VITE_GADGET_FOLDER_NAME="vue-starter-template"
VITE_GADGET_LOGGER_NAME="VueStarterTemplate"
VITE_GADGET_TITLE="Vue Starter Template"
```
8. Review ./public/gadget.xml. Make any Finesse XML configuration changes you may need
9. Review ./gadget.js. Make any Finesse JS configuration changes you may need
10. Start modifying the ./src. Look at main.jsx and follow from there
11. When you're ready to build the project, start at step 5 in the INSTALLATION section

## INSTALLATION
1. Download the project to your computer
2. Navigate to the base directory
```
cd C:\Code\cisco-finesse-gadget-templates\vue-starter-template
```
3. Install the package dependencies
```
npm i
```
4. Copy the .env.example file to .env 
5. Build the project
```
npm run build
```
6. Copy your project folder in the ./dist directory to the /files/ directory on Finesse (just like uploading any other Finesse gadget)

The Finesse server directory structure should appear as:
```
files
  vue-starter-template
    gadget.html
    gadget.js
    gadget.xml
    index.css
    index.js
    react.svg
    vite.svg
```
7. Add the gadget to your desktop layout config
```
<gadget>/3rdpartygadget/files/vue-starter-template/gadget.xml</gadget>
```
