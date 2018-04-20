# 自适应分析

页面适应不同设备，根据宽度响应式的选择展示效果

## 需求来源

技术不断的更新，而旧的设备并不会立马淘汰，于是市场上不可避免的出现了多种设备同时存在的情况

## 关键词

- 媒体查询
- `viewport`
- `rem`, `dpr`

## 解决方案

- 媒体查询局部适应
- `viewport`视口根据`dpr`缩放
- 设置根结点`font-size`，页面布局适应`rem`

### rem

把设计稿宽度切分成`100`份（相应的实际设备宽度也被切分为100份，需要根据设计稿尺寸计算，以保证设计稿与设备尺寸的关联），根据
设备尺寸计算出`html`节点`font-szie`,页面不缩放，要适应的元素采用`rem`单位布局

- `design`
  - `design-width`:设计稿宽度（单位px）
  - `design-pr`:尺寸转换率（px转rem比率）
  - `width-rem`:设计稿宽度（单位rem）
- `device`
  - `device-width`:设备宽度（逻辑像素，单位px）
  - `device-pr`:尺寸转换率（px转rem比率）
  - `width-rem`:设备宽度（单位rem）

> 关系

`design-width` / `design-pr` = `device-width` / `device-pr`

> 实例说明（设计稿以iPhone6为标准）：

设计稿以设备物理像素为标准（有些设计师没有理解适应的本质，使用iPhone6的标准却在iPhone6p上预览），而网页使用的是设备逻辑像
素，设计稿的尺寸不能直接在开发时使用，为节省这方面的成本和实现页面自适应，使用`width-rem`关联设计与开发，让单位由`px`转换
为`rem`，为方便计算，`design-pr`一般采用`100`。然后计算出的`device-pr`赋值给`html`根节点的`font-size`

> 超出范围后的处理

...

### scale



## 方案总结

## 工具使用



## 资料

- [互联网有哪些行业分类？](https://www.zhihu.com/question/23869978)
- [你知道互联网企业有几大分类吗？](http://www.bbaqw.com/cs/7152.htm)
- [中国互联网发展简史（1994-2017进化史）](http://www.sohu.com/a/163544466_108048)
- [互联网发展史简介](http://mip.xuexila.com/diannao/wangluo/jichu/3122923.html)
- [中国互联网发展简史](http://www.gonet.com.cn/webduirshow-65.html)
