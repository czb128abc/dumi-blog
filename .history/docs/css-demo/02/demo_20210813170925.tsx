import { useState } from 'react';
import { Button } from 'antd';
import DecimalView from './decimal-view';

export default () => {
  const [value, setValue] = useState(1000);
  return (
    <div>
      <DecimalView value={value} />
      <div>
        <Button onClick={() => setValue(value + 100)} />
        <Button onClick={() => setValue(value - 100)} />
      </div>
    </div>
  );
};