bee-flex
===
弹性布局，通过设置`html`节点`font-size`并采用`rem`单位实现响应布局

可单独使用或配合`vue`等前后端分离框架使用，支持`typescript`

以REM布局优点是不用复杂计算字体大小和元素尺寸，设计尺寸以`750`为例，元素尺寸在设计稿的基础上除以`100`冠以`rem`尺寸即可，文本字号不建议自适应（具体原因可自行了解），字号工具设计稿dpr转换为css逻辑像素，使用方便

### 引入
- install

```bash
npm install bee-flex
# or
cnpm install bee-flex
# or
yarn add bee-flex
```

```javascript
import beeflex from 'bee-flex'
```

- cdn

```html
<script src="https://unpkg.com/bee-flex/build"></script>
```

### 使用
```javascript
// beeflex(design,callback)

beeflex(750,(options)=>{
  console.log(options)
})
```


### 参数
| 属性       | 类型       | 解释                               |
| :------- | :------- | :------------------------------- |
| design   | number   | 设计稿宽度                            |
| callback | function | 回调函数，options为浏览器窗口信息 |

#### options

| 属性       | 类型       | 解释                               |
| :------- | :------- | :------------------------------- |
| design   | number   | 设计稿宽度                            |
| width | number | 浏览器当前视口宽度 |
| height | number | 浏览器当前视口高度 |
| rem | number | 当前rem值 |




### 更多

需要添加功能或者存在 `bug` 请提交 [`issues`](https://github.com/myour-cc/bee-flex/issues)，在空余时间会尽快处理。
