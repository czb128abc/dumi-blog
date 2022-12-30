import './index.less';

const CircleEffects = ({ className }) => {
  return (
    <div className={`circle-effects-root ${className}`}>
      <div className="circle-effects circle-one"></div>
      <div className="circle-effects circle-two circle-opa circle-move"></div>
      <div className="circle-effects circle-three circle-opa circle-move-big"></div>
    </div>
  );
};

export default CircleEffects;
