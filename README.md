bee-flex
===
弹性布局，通过设置`html`节点`font-size`并采用`rem`单位实现响应布局

可单独使用或配合`vue`等前后端分类框架使用

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
import 'bee-flex'
```

- cdn

```html
<script src="https://unpkg.com/bee-flex"></script>
```

### 使用
```javascript
// BeeFlex(design,callback)

BeeFlex(750,function(){
  console.log(this.options)
})
```


### 参数
| 属性       | 类型       | 解释                               |
| :------- | :------- | :------------------------------- |
| design   | number   | 设计稿宽度                            |
| callback | function | 回调函数，为保证正确获取参数，推荐标准匿名函数，不能为箭头函数。 |


### 更多
需要添加功能或者存在 `bug` 请提交 [`issues`](https://github.com/myour-cc/bee-flex/issues)，在空余时间会尽快处理。
