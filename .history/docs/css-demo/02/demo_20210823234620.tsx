import { useState } from 'react';
import { Button, Space } from 'antd';
import DecimalView from './decimal-view';
import 'dumi-blog';

export default () => {
  const [value, setValue] = useState(10000);
  return (
    <div>
      <DecimalView value={value} />
      <div>
        <Space direction="horizontal">
          <Button type="default" onClick={() => setValue(value + 1100)}>
            +
          </Button>
          <Button type="default" onClick={() => setValue(value - 1100)}>
            -
          </Button>
        </Space>
      </div>
    </div>
  );
};
