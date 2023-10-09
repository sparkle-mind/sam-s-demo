const scroller = new LocomotiveScroll({
    el: document.querySelector('[data-scroll-container]'),
    smooth: true
  })
  
  
  
  ScrollTrigger.addEventListener('refresh', () => scroller.update())
  
  
  ScrollTrigger.refresh()