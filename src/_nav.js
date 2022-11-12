import registry from './registry.json'

var pages = [
  {
    component: 'CNavItem',
    name: 'Dashboard',
    to: '/dashboard',
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

export default processRegistry(registry)