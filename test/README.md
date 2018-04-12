# test

## HTML

```html
<script src="../src/index.js"></script>
<script>
  beeflex(750, option => {
    console.log(option)
  })
</script>
```

## module

use parcel test require
```
parcel test/test2.html
```

```js
import beeflex from '../../src/index'

beeflex(750, option => {
  console.log(option)
})
```
