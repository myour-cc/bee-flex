interface Iconfig {
  design?: number;
  scale?: boolean;
  max?: number;
}
interface IOption {
  design: number;
  scale: boolean;
  width: number;
  height: number;
  dpr: number;
  rem: number;
  max: number;
}

const viewport = document.querySelector('meta[name="viewport"]') as Element;

class BeeFlex {
  public options: IOption = {
    design: 750,
    max: 750,
    scale: false,
  } as IOption;
  private callback: any;
  constructor(option: Iconfig, callback: any = (ctx = {}) => ctx) {
    Object.assign(this.options, option);
    this.callback = callback;
  }
  public init() {
    this.setData();
    this.resize();
  }
  private setSize() {
    this.options.width = document.documentElement.clientWidth;
    this.options.width = this.options.width > this.options.max ? this.options.max : this.options.width;
    this.options.height = document.documentElement.clientHeight;
  }
  private setRem() {
    this.options.rem = this.options.width / (this.options.design / 100);
    document.documentElement.style.fontSize = this.options.rem + "px";
  }
  // private setDpr() {
  //   this.options.dpr = devicePixelRatio;
  //   // document.documentElement.style.fontSize = this.options.rem + "px";
  // }
  private setViewPort() {
    const scale = this.options.scale ? 1 / this.options.dpr : 1;
    viewport.setAttribute("content", `width=device-width, initial-scale=${scale}, user-scalable=no`);
  }
  private resize() {
    let timer: any;
    window.onresize = () => {
      clearTimeout(timer);
      timer = setTimeout(() => {
        this.setData();
      }, 100);
    };
  }
  private setData() {
    this.setSize();
    this.setRem();
    // this.setDpr();
    this.setViewPort();
    this.callback(this.options);
  }
}

export default (option: Iconfig, callback: any) => {
  const bf = new BeeFlex(option, callback);
  bf.init();
  return bf.options;
};
