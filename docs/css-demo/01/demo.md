---
title: taiwindcss 学习
---

> 效果如下
> !['蜻蜓广播UI.jpg'](../../assets/images/蜻蜓广播UI.jpg)
> !['蜻蜓广播UI.jpg'](../../assets/images/qing-ting-ui.jpg)

<code src="./demo.tsx" iframe="400">

iconfont 如何批量添加图标到购物车

```js
var icons = document.querySelectorAll('.icon-gouwuche1');
var auto_click = function (i) {
  if (i < icons.length) {
    icons.item(i).click();
    auto_click(i + 1);
  }
};
auto_click(0);
```

BFC 渲染规则

- 内部的盒子会在垂直方向，一个接一个地放置；
- 盒子垂直方向的距离由 margin 决定，属于同一个 BFC 的两个相邻盒子的 margin 会发生重叠；
- 每个元素的 margin 的左边，与包含块 border 的左边相接触(对于从左往右的格式化，否则相反)，即使存在浮动也是如此；
- BFC 的区域不会与 float 盒子重叠；
- BFC 就是页面上的一个隔离的独立容器，容器里面的子元素不会影响到外面的元素。反之也如此。
- 计算 BFC 的高度时，浮动元素也参与计算。

如何创建 BFC？

1.  根元素：html
2.  非溢出的可见元素：overflow 不为 visible
3.  设置浮动：float 属性不为 none
4.  设置定位：position 为 absolute 或 fixed
5.  定义成块级的非块级元素：display: inline-block/table-cell/table-caption/flex/inline-flex/grid/inline-grid

<code src="./css-bfc.tsx" iframe="400">
