import { useState } from 'react';
import { Button } from 'antd';
import DecimalView from './decimal-view';

export default () => {
  const [value, setValue] = useState(10000);
  return (
    <div>
      <DecimalView value={value} />
      <div>
        <Button onClick={() => setValue(value + 1100)} />
        <Button onClick={() => setValue(value - 1100)} />
      </div>
    </div>
  );
};
