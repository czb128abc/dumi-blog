import { useState } from 'react';
import { Button } from 'antd';
import DecimalView from './decimal-view';

export default () => {
  const [value, setValue] = useState(10000);
  return (
    <div>
      <DecimalView value={value} />
      <div>
        <Button type="default" onClick={() => setValue(value + 1100)} />
        <Button type="default" onClick={() => setValue(value - 1100)} />
      </div>
    </div>
  );
};