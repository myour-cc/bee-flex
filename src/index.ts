namespace _beeflex {
  interface IOption {
    design: number;
    width: number;
    height: number;
    dpr: number;
    rem: number;
  }
  const viewport = document.querySelector('meta[name="viewport"]') as Element;
  export class BeeFlex {
    public options: IOption = {} as IOption;
    private callback: any;
    constructor(desgin: number = 750, callback: any = (ctx = {}) => ctx) {
      this.options.design = desgin;
      this.callback = callback;
    }
    public init() {
      this.setSize();
      this.setRem();
      this.callback(this.options);
      this.resize();
    }
    private setSize() {
      this.options.width = document.documentElement.clientWidth;
      this.options.height = document.documentElement.clientHeight;
    }
    private setRem() {
      this.options.rem = this.options.width / (this.options.design / 100);
      document.documentElement.style.fontSize = this.options.rem + "px";
    }
    private setDpr() {
      this.options.dpr = devicePixelRatio;
    }
    private setViewPort() {
      const scale = 1 / this.options.dpr;
      viewport.setAttribute("content", `width=device-width, initial-scale=${scale}, user-scalable=no`);
    }
    private resize() {
      let timer: any;
      window.onresize = () => {
        clearTimeout(timer);
        timer = setTimeout(() => {
          this.setSize();
          this.setRem();
          this.callback(this.options);
        }, 100);
      };
    }
  }
}
function beeflex(desgin: number, callback: any) {
  const bf = new _beeflex.BeeFlex(desgin, callback);
  bf.init();
  return bf.options;
}
export default beeflex;
