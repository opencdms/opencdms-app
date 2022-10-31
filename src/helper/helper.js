import registry from "../registry"

// Generates the route from the registry
function buildRoutes(){
    var pages = []
    registry.forEach((entry)=>{
        if(entry.show){
            temp = {
                path: entry.path,
                name: entry.name,
                component: entry.component
           }
           pages.push(temp)
        }
        
    })
    return pages
}

export { buildRoutes }