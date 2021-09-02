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
        <div className="p-6 max-w-sm mx-auto bg-white rounded-xl shadow-md flex items-center space-x-4">
  <div className="flex-shrink-0">
    <img className="h-12 w-12" src="/img/logo.svg" alt="ChitChat Logo">
  </div>
  <div>
    <div className="text-xl font-medium text-black">ChitChat</div>
    <p className="text-gray-500">You have a new message!</p>
  </div>
</div>
      </div>
    </div>
  );
};
