import TransitionEvents from '../../utils/TransitionEvents'

let styleForPesudo = null

// 重置效果
function resetEffect(node) {
  if (!node || !(node instanceof Element)) {
    return
  }
  node.parentNode && node.parentNode.removeChild(node)
  TransitionEvents.removeEndEventListener(node, onTransitionEnd)
}

function onTransitionEnd(e) {
  if (!e || e.animationName !== 'fadeEffect') {
    return
  }
  resetEffect(e.target)
}

const ClickAnimation = {
  beforeMount(el, binding) {
    el.addEventListener('click', e => {
      const node = el
      const waveColor =
        getComputedStyle(node).getPropertyValue('border-top-color') || // Firefox Compatible
        getComputedStyle(node).getPropertyValue('border-color') ||
        getComputedStyle(node).getPropertyValue('background-color')
      if (node) {
        node.style.position = 'relative'
        let ripple = node.querySelector('.fei-click-animating-node')
        resetEffect(ripple)
        ripple = document.createElement('span')
        ripple.className = 'fei-click-animating-node'
        node.appendChild(ripple)
        // 设置颜色
        styleForPesudo = styleForPesudo || document.createElement('style')
        if (waveColor && waveColor !== '#ffffff' &&
          waveColor !== 'rgb(255, 255, 255)' && waveColor !== 'transparent') {
          styleForPesudo.innerHTML = `
            .fei-click-animating-node {
              --fei-wave-shadow-color: ${waveColor};
            }`
          if (!document.body.contains(styleForPesudo)) {
            document.body.appendChild(styleForPesudo)
          }
        }
        TransitionEvents.addEndEventListener(ripple, onTransitionEnd)
        return false
      }
    }, false)
  },
}

export default ClickAnimation
