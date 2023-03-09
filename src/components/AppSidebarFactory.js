import { defineComponent, createVNode, onMounted, ref, resolveComponent } from 'vue'
import { RouterLink, useRoute } from 'vue-router'

// import pages to include in nav side bar
import nav from '@/_nav.js'
import { VNavigationDrawer, VIcon, VList, VListItem, VListItemTitle, VListGroup, VListGroupPrepend } from 'vuetify/lib/components'

const normalizePath = (path) =>
  decodeURI(path)
    .replace(/#.*$/, '')
    .replace(/(index)?\.(html)$/, '')

const isActiveLink = (route, link) => {
  if (link === undefined) {
    return false
  }

  if (route.hash === link) {
    return true
  }

  const currentPath = normalizePath(route.path)
  const targetPath = normalizePath(link)

  return currentPath === targetPath
}

const isActiveItem = (route, item) => {
  if (isActiveLink(route, item.to)) {
    return true
  }

  if (item.items) {
    return item.items.some((child) => isActiveItem(route, child))
  }

  return false
}

// Now define the component
const AppSidebarFactory = defineComponent({
  name: 'AppSidebarFactory',
  // Components to use in the template
  components: {
    VIcon,
    VListGroup,
    VListItem,
    VListItemTitle,
    VList
  },
  // setup component
  setup(props){
    const route = useRoute()
    const firstRender = ref(true)

    onMounted(() => {
      firstRender.value = false
     })

    const renderItem = (item, props) => {
      // check if group and create v-list-group
      if ( item.component === "VListGroup" ){
        const activator = createVNode(
          // node type
          "div",
          // props
          { "v-slot:activator": "{props}" },
          // children
          [
            createVNode(
              'div',
              {
                class: 'v-list-item',
                'v-bind': "{props}",
                title: item.name,
                value: item.name,
                style: { display: 'block' }
              },
              // no children
              [
                createVNode(
                  'div',
                  {
                    class:'v-list-item__content',
                  },
                  [createVNode(
                    'div',
                    {
                      class: 'v-list-item-title',
                    },
                    item.name
                  )]
                )
              ]
            )
          ]
        )

        // now members of the group
        const items = createVNode(
          'div',
          {
            class: 'v-list-group__items'
          },
          [item.items.map((subitem) => renderItem(subitem, props) )]
        );



        // now create group to return
        return createVNode(
          'div',
          // properties of list
          {
            class: 'v-list-group  v-list-group--prepend',
            title: item.name,
            value: item.name,
            icon: item.icon,
          },
          // now the children
          [activator, items])
      }else{
        return createVNode(
          RouterLink,  // the object to return
          // props of the item
          {
              to: item.to,
              custom:true
          },
          // now the children to create
          {
              default: (props) =>
                createVNode(
                  resolveComponent(item.component),
                  {
                    prependIcon: item.icon,
                    title: item.name,
                    active: props.isActive,
                    href: props.href,
                    onClick: () => props.navigate()
                  },
                  {}
                )
            })
        }
    }
    // iterate over items in nav and apply renderItem
//    return() => createVNode(
//      VNavigationDrawer,
//      {
//
//      },
//      {
//        default: () => createVNode(
//          VList,
//          {},
//          {
//            default: () => (nav.map( (item) => renderItem(item, { isActive: isActiveItem(route, item) })))
//          }
//        )
//      }
//    )
      return() => createVNode(
        VList,
        {},
        {
          default: () => (nav.map( (item) => renderItem(item, { isActive: isActiveItem(route, item) })))
        }
      )
  }
})

export {AppSidebarFactory}
