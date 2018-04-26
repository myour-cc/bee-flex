var viewport = document.querySelector('meta[name="viewport"]');
var BeeFlex = /** @class */ (function () {
    function BeeFlex(option, callback) {
        if (callback === void 0) { callback = function (ctx) {
            if (ctx === void 0) { ctx = {}; }
            return ctx;
        }; }
        this.options = {
            design: 750,
            max: 750,
            scale: false,
        };
        Object.assign(this.options, option);
        this.callback = callback;
    }
    BeeFlex.prototype.init = function () {
        this.setData();
        this.resize();
    };
    BeeFlex.prototype.setSize = function () {
        this.options.width = document.documentElement.clientWidth;
        this.options.width = this.options.width > this.options.max ? this.options.max : this.options.width;
        this.options.height = document.documentElement.clientHeight;
    };
    BeeFlex.prototype.setRem = function () {
        this.options.rem = this.options.width / (this.options.design / 100);
        document.documentElement.style.fontSize = this.options.rem + "px";
    };
    // private setDpr() {
    //   this.options.dpr = devicePixelRatio;
    //   // document.documentElement.style.fontSize = this.options.rem + "px";
    // }
    BeeFlex.prototype.setViewPort = function () {
        var scale = this.options.scale ? 1 / this.options.dpr : 1;
        viewport.setAttribute("content", "width=device-width, initial-scale=" + scale + ", user-scalable=no");
    };
    BeeFlex.prototype.resize = function () {
        var _this = this;
        var timer;
        window.onresize = function () {
            clearTimeout(timer);
            timer = setTimeout(function () {
                _this.setData();
            }, 100);
        };
    };
    BeeFlex.prototype.setData = function () {
        this.setSize();
        this.setRem();
        // this.setDpr();
        this.setViewPort();
        this.callback(this.options);
    };
    return BeeFlex;
}());
export default (function (option, callback) {
    var bf = new BeeFlex(option, callback);
    bf.init();
    return bf.options;
});
