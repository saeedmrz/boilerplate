# pwa-react-js Boilerplate Documentation

### app.webmanifest
`"name"`: Name of the app, it can be long.  

`"short_name"`: Name of the app. It should be 12 chars long.  

`"start_url"`: Receives URL, relative to manifest.  

`"orientation"`: Options: all, portrait, landscape. note: safari doesn't support orientation, so we can use media queries to say landscape is not supported (when devie goes landscape).  

`"theme_color"`: RGB colors, RGB function or named colors(blue).  
> We use `<meta name="theme-color" content="#ffc252" />` in our index.html file. Content can be changed via JavaScript. So we can have different theme colors based on where you are, which routing of web app you are, or the current state of the app. Useful to have different theme colors based on light or dark theme.

`"scope"`: Defines what is within the app and what is outside the app. If the user navigates outside the scope, it reverts to a normal web page inside a browser tab or window.  

`"display"`: Standalone means you actually want your web content to be rendered as a standalone application. Options: minimal-ui/browser/fullscreen.  

`"icons"`: Recommmendations: size: 512*512 for mobile app.  1024*1024 for desktop. type: png. It can be a CDN.  
> We use `<link rel="apple-touch-icon" href="./src/img/logo-512.png" />` in index.html to set icon for IOS.

### index.html
`<meta name="viewport" content="width=device-width, initial-scale=1.0, viewport-fit=cover" />`: viewport-fit=cover here. OS gives all available viewport.  

`<link rel="manifest" href="app.webmanifest" />`: Adding our manifest file in index.html.  

### _button.scss
`user-select: none;`: There are elements in our app that can be selected. For example the use can select the text inside a button. We use this code to prevent that.  

## _general.scss  
`display-mode: standalone`: means when we are in standalone mode in our app.  

`padding: env(safe-area-inset-top) env(safe-area-inset-right) env(safe-area-inset-bottom) env(safe-area-inset-left);`: We want to fix the toolbar problem of the app (it is under the unsafe area) we assume we have a toolbar in our app, we can select that and give padding to it if it is under unsafe area (bottom of IOS menu), it will not automatically add padding to IOS with menu button.  
