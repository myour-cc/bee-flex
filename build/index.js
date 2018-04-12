var _beeflex;
(function (_beeflex) {
    var BeeFlex = /** @class */ (function () {
        function BeeFlex(desgin, callback) {
            if (desgin === void 0) { desgin = 750; }
            if (callback === void 0) { callback = function (ctx) {
                if (ctx === void 0) { ctx = {}; }
                return ctx;
            }; }
            this.options = {};
            this.options.design = desgin;
            this.callback = callback;
        }
        BeeFlex.prototype.init = function () {
            this.setSize();
            this.setRem();
            this.callback(this.options);
            this.resize();
        };
        BeeFlex.prototype.setSize = function () {
            this.options.width = document.documentElement.clientWidth;
            this.options.height = document.documentElement.clientHeight;
        };
        BeeFlex.prototype.setRem = function () {
            this.options.rem = this.options.width / (this.options.design / 100);
            document.documentElement.style.fontSize = this.options.rem + "px";
        };
        BeeFlex.prototype.resize = function () {
            var _this = this;
            var timer;
            window.onresize = function () {
                clearTimeout(timer);
                timer = setTimeout(function () {
                    _this.setSize();
                    _this.setRem();
                    _this.callback(_this.options);
                }, 100);
            };
        };
        return BeeFlex;
    }());
    _beeflex.BeeFlex = BeeFlex;
})(_beeflex || (_beeflex = {}));
function beeflex(desgin, callback) {
    var bf = new _beeflex.BeeFlex(desgin, callback);
    bf.init();
    return bf.options;
}
