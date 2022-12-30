import './index.less';

export default () => {
  const lines = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13];
  const path = `M130.368 1.80127C68.4226 88.15 -24.0808 181.526 8.81078 293.357C44.007 413.024 296.328 313.783 373.484 299.755C503.923 276.039 626.51 335.861 759.178 316.206C814.644 307.989 878.28 312.21 934.66 314.378C945.562 314.797 948.997 320.843 957.509 326.26C974.893 337.323 1005.12 323.855 1022.4 318.491C1075.92 301.881 1126.96 293 1173.21 260.454C1180.84 255.08 1183.26 254.129 1183.26 244.46C1183.26 216.225 1219.46 181.2 1235.36 160.375C1250.26 140.845 1276.34 120.953 1288.37 100.51C1299.45 81.6635 1323.1 48.2972 1323.1 26.4784`;
  return (
    <div className="container mx-auto h-48">
      <div className="flex flex-row	justify-center h-full w-full">
        <div className="svg-effects-root">
          <svg>
            <defs>
              <radialGradient
                id="grad1"
                cx="50%"
                cy="50%"
                r="50%"
                fx="50%"
                fy="50%"
              >
                <stop offset="0%" style={{ stopColor: 'rgba(2,246,255,.5)' }} />
                <stop
                  offset="100%"
                  style={{ stopColor: 'rgba(2,246,255,0)' }}
                />
              </radialGradient>
            </defs>
            <path
              d={path}
              stroke="rgba(29,159,167,0.4)"
              fill="transparent"
              strokeWidth={5}
            ></path>
            <g>
              <circle cx="10" cy="20" r="15" fill="url(#grad1)"></circle>
              <circle cx="10" cy="20" r="5" fill="rgba(2,246,255)"></circle>
            </g>
          </svg>
          {/* <!-- 这里要保证盒子跟SVG的盒子位置重合,宽高一致,这样路径点才能一致 --> */}
          <div className="animate">
            {/* <!-- 这里遍历N个div,让每一个div都按照offsetPath也就是svg内path的d的值进行流动 --> */}
            {/* <!-- animationDelay 负数表示渲染前就已经执行, 渲染时就可以铺满整个路径 --> */}
            {lines.map((item) => (
              <div
                key={item}
                className="point3"
                style={{
                  offsetPath: `path('${path}')`,
                  animationDelay: `-${item * 1}s`,
                  animationDuration: '5s',
                  animationPlayState: `${!stop ? 'paused' : 'running'}`,
                }}
              ></div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};
