class Flex {
  constructor(design = 750, callback = () => {}) {
    this.options = {
      design: design,
      size: {
        width: 0,
        height: 0
      },
      rem: 0,
      dpr: 0
    }
    this.timer = null
    this.callback = callback
  }
  setSize() {
    this.options.size = {
      width: document.documentElement.clientWidth,
      height: document.documentElement.clientHeight
    }
  }
  setRem() {
    this.options.rem = parseInt(this.options.size.width / (this.options.design / 100))
    document.documentElement.style.fontSize = this.options.rem + 'px'
  }
  setDpr() {
    this.options.dpr = devicePixelRatio
    // if (this.options.dpr >= 2)
    //   this.options.dpr = 2
    // else
    //   this.options.dpr = 1
    this.options.dpr = 1
  }
  setViewPort() {
    document.querySelector('meta[name="viewport"]').setAttribute('content', `initial-scale=${1 / this.options.dpr}, maximum-scale=${1 / this.options.dpr}, minimum-scale=${1 / this.options.dpr}, user-scalable=no`);
  }
  resize() {
    window.onresize = () => {
      clearTimeout(this.timer)
      this.timer = setTimeout(() => {
        this.setSize()
        this.setRem()
        this.setDpr()
        this.setViewPort()
        this.callback()
      }, 100)
    };
  }
  init() {
    this.setSize()
    this.setRem()
    this.setDpr()
    this.setViewPort()
    this.callback()
    this.resize()
  }
}
window.BeeFlex = (design, callback) => {
  let flex = new Flex(design, callback)
  flex.init()
  return flex
}
