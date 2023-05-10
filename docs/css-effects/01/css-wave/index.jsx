import React from 'react';
import './index.less';

function CssWave() {
  return (
    <div className="flex" style={{ height: 400 }}>
      <div className="flex-1">
        <h2>CssWave</h2>
        <div className="wave-box">
          <div className="circle">
            <div className="circle-inner" />
          </div>
        </div>
        <div className="flex-1">
          <div className="g-contrast">
            <div className="g-circle" />
          </div>
        </div>
      </div>
      <div className="flex-1">
        <h2>球体效果</h2>
        <div className="sphere-container">
          <div className="sphere sphere--frosted-glass">
            <div className="inner inner-one"></div>
            <div className="inner inner-two"></div>
            <div className="inner-wrapper"></div>
          </div>
        </div>
        <div className="sphere-container bg-gray-800">
          <div className="sphere sphere--water-drop" />
        </div>
      </div>
      <div className="flex-1">
        <div className="water" />
      </div>
    </div>
  );
}

export default CssWave;
