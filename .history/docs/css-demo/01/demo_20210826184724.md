---
title: taiwindcss 学习
---
>效果如下
!['蜻蜓广播UI.jpg'](../../assets/images/qing-ting-ui.jpg)



<code src="./demo.tsx" iframe="400">

iconfont如何批量添加图标到购物车

```js
var icons = document.querySelectorAll('.icon-gouwuche1');
var auto_click = function(i) {
    if (i < icons.length) {
            icons.item(i).click();
            auto_click(i + 1);
    }
};
auto_click(0);
```
