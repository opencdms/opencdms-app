# OpenCDMS app 

## Project setup
```
npm install
```

### Compiles and hot-reloads for development
```
npm run serve
```

### Compiles and minifies for production
```
npm run build
```

### Lints and fixes files
```
npm run lint
```


## App Configuration

This application can be configured to selectively display pages declared in the route list. By default, only the ,Dashboard link will appear on the sidebar navigation menu. To add more links in the sidebar menu:

1.  All the routes would be declared as the src/routes/routes.js as in a normal vuejs application.
2.  Go to  `src/registry.json` file. Each entry in the registry represents a navigation link. 
3.  Set the display property to the desired value (true or false). Only the links with display set to true would be visible in the navigation bar and the  final build routes.

This implies that the registry entries set to false would not be available in the application.

```
eg
// src/registry.json
[
    {
        "component": "CNavItem", // Name of the render component
        "name": "Hidden",  // The name of the element visible to the user on the side navigation bar
        "to": "/hidden", // Path must correspond to the route path declared in src/routes/route.js 
        "icon": "cil-drop", // Display icon
        "display": false // will not be displayed and user will not be able to see this page
      },
       {
        "component": "CNavItem", // Name of the render component
        "name": "Test Page",  // The name of the element visible to the user 
        "to": "/test-page", // Path must correspond to the route path declared in src/routes/route.js 
        "icon": "cil-drop", // Display icon
        "display": true // will be displayed
      }
]

```
4. For Nested navigation links, declare all the children links `items: [...]` in the registry.json file but only set the display property on the parent element.
```
e.g
// src/registry.json
[
    {   
        // this entry will not be displayed
        "component": "CNavItem", 
        "name": "Nest links",  
        "to": "/base", 
        "icon": "cil-drop", 
        "display": false // This will hide both the parent and child entries
        "items": [
             // these entries will not be displayed
            {
                "component": "CNavItem",
                "name": "Test Page",  
                "to": "/test-page", 
                "icon": "cil-drop"
            },
            {
                "component": "CNavItem",
                "name": "Test Page",  
                "to": "/test-page", 
                "icon": "cil-drop"
            }
        ]
      },
      {   
        // this entry will  be displayed
        "component": "CNavItem", 
        "name": "Nest links Visible",  
        "to": "/base-visible", 
        "icon": "cil-drop", 
        "display": true // This will display both the parent and child entries
        "items": [
             // these entries will displayed 
            {
                "component": "CNavItem",
                "name": "Test Page",  
                "to": "/test-page-shown", 
                "icon": "cil-drop"
            },
            {
                "component": "CNavItem",
                "name": "Test Page",  
                "to": "/test-page-show", 
                "icon": "cil-drop"
            }
        ]
      }
]
```

### Web Components

We can render webcomponets built using any javascript framework in this application shell.

To render a web component:

1. Create the web component and publish in npm or define it in the `src/web-components` folder.

2. Ensure that the tagname of the web component is prefixed with `opencdms-` eg `<opencdms-helloworld>....</opencdms-helloworld>`.

3. Create a  view page in `src/views` where the component would be rendered in. An example has been done in `src/views/CustomElementDemo.vue`.

4. Create a route entry in `src/routes` for the page created in step 3 above.

5. Create a registry entry in src/registry.json for the page created above. Set the display to true or false as you desire.

6. Launch the application.
