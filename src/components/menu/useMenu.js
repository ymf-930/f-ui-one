import { computed, inject } from 'vue'

export default function useMenu(instance, currentIndex) {
  const rootMenu = inject('rootMenu')

  const indexPath = computed(() => {
    let parent = instance.parent
    const path = [currentIndex]
    while (parent.type.name !== 'FMenu') {
      if (parent.props.index) {
        path.unshift(parent.props.index)
      }
      parent = parent.parent
    }
    return path
  })

  const parentMenu = computed(() => {
    let parent = instance.parent
    while (parent && ['FMenu', 'FSubmenu'].indexOf(parent.type.name) === -1) {
      parent = parent.parent
    }
    return parent
  })
  const paddingStyle = computed(() => {
    let parent = instance.parent
    if (rootMenu.props.mode !== 'vertical') return {}

    let padding = 20

    if (rootMenu.props.collapse) {
      padding = 20
    } else {
      while (parent && parent.type.name !== 'FMenu') {
        if (parent.type.name === 'FSubmenu') {
          padding += 20
        }
        parent = parent.parent
      }
    }
    return { paddingLeft: padding + 'px' }
  })
  return { parentMenu, paddingStyle, indexPath }
}
