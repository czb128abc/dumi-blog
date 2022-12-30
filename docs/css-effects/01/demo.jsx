import CircleEffects from '../components/CircleEffects';
import { ReactComponent as RotateSourceSvg } from './svg-effects/rotate-source.svg';
import './deme.less';

export default () => (
  <div className="container mx-auto p-24 h-48">
    <div className="flex flex-row	justify-center h-full w-full">
      <div style={{ width: 32, height: 32 }}>
        <CircleEffects className="color-one" />
        <RotateSourceSvg className="rotate-source-svg" />
        <div className="cycle"></div>
      </div>
    </div>
  </div>
);
