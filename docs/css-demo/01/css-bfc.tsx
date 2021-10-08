import './css-bfc.less';
export default () => (
  <div className="css-bfc">
    <div className="layout bfc">
      <div className="aside">aside</div>
      <div className="main">main</div>
      <div className="main">main</div>
    </div>
    <h2>利用BFC解决包含父子塌陷</h2>
    <div>
      （当父子盒子在一起，如果子盒子给margin-top，可能将父盒子带下来）。本来应该是外部黄色盒子顶部与黑色盒子的顶部距离为20px，但是由于margin的塌陷问题，导致盒子内部的布局影响到了外部。这个时候，就可以触发BFC，将父盒子变成一个独立的区域，这样在BFC区域内部的任何操作，都不会影响到外部。
    </div>
    <div className="bfc parent">
      <div className="child"></div>
    </div>
  </div>
);
