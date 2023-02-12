'use strict'

// import registry from './registry.json'
var registry = require("./registry.json")
var pages = [
  {
    component: 'CNavItem',
    name: 'Dashboard',
    to: '/dashboard',
    routeName: "Dashboard",
    icon: 'cil-speedometer',
  },
]

var processRegistry = (registry) => {
    registry.map((page) => {
         if (page.display == true){
             delete page["display"]
             pages.push(page)
         }
    })
   return pages;
}

module.exports = processRegistry(registry)
// export default processRegistry(registry)