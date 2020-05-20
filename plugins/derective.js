import Vue from 'vue'

Vue.directive('isolated-scroll', {
  bind (el, binding, vnode) {
    const defaultOptions = {
      whenOnlyHasScrollbar: false,
      isolateX: true,
      isolateY: true
    }

    const options = binding.value || defaultOptions
    Object.keys(defaultOptions).forEach(function (option) {
      if (!options.hasOwnProperty.call(option)) {
        options[option] = defaultOptions[option]
      }
    })
    el.addEventListener('wheel', function (event) {
      const scrollWidth = el.scrollWidth
      const scrollHeight = el.scrollHeight
      const clientWidth = el.clientWidth
      const clientHeight = el.clientHeight
      const hasScrollX = scrollWidth !== clientWidth
      const hasScrollY = scrollHeight !== clientHeight

      if (options.whenOnlyHasScrollbar && (!hasScrollX || !hasScrollY)) {
        return
      }

      const isHorizontalScroll = event.deltaX !== 0
      const isVerticalScroll = event.deltaY !== 0
      let isIsolatedScroll = false
      if (isHorizontalScroll && options.isolateX) {
        const scrollLeft = el.scrollLeft
        const meetLeft = scrollLeft === 0
        const meetRight = (scrollWidth - clientWidth) === scrollLeft
        const isLeft = event.deltaX < 0
        isIsolatedScroll = (meetLeft && isLeft) || (meetRight && !isLeft)
        console.log(isIsolatedScroll)
      }

      if (isVerticalScroll && options.isolateY) {
        const scrollTop = el.scrollTop
        const meetTop = scrollTop === 0
        const meetBottom = (scrollHeight - clientHeight) === scrollTop
        const isUpward = event.deltaY < 0
        isIsolatedScroll = (meetBottom && !isUpward) || (meetTop && isUpward)
      }

      if (isIsolatedScroll) {
        event.preventDefault()
        event.stopPropagation()
      }
    })
  },
  unbind (el, binding, vnode) {
    el.removeEventListener('wheel', function () {
      console.log('removed')
    })
  }
})
