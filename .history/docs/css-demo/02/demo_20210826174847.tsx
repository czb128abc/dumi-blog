import { useState } from 'react';
import { Button, Space } from 'antd';
import DecimalView from './decimal-view';
import 'dumi-blog';

export default () => {
  const [value, setValue] = useState(10000);
  return (
    <div className="space-y-16">
      <div className="text-center block">
        <h1>
          <DecimalView value={value} />
        </h1>
        <Space direction="horizontal">
          <Button type="default" onClick={() => setValue(value + 1100)}>
            +
          </Button>
          <Button type="default" onClick={() => setValue(value - 1100)}>
            -
          </Button>
        </Space>
      </div>

      <div className="block">
        <div className="p-6 max-w-sm mx-auto bg-white rounded-xl shadow-md flex items-center space-x-12">
          <div className="flex-shrink-0">
            <span className="h-12 w-12">logo</span>
          </div>
          <div>
            <div className="text-xl font-medium text-black">ChitChat</div>
            <p className="text-gray-500">You have a new message!</p>
          </div>
        </div>
        <div className="block"></div>
        <div className="border border-light-blue-300 shadow rounded-md p-4 max-w-sm w-full mx-auto">
          <div className="animate-pulse flex space-x-4">
            <div className="rounded-full bg-light-blue-400 h-12 w-12"></div>
            <div className="flex-1 space-y-4 py-1">
              <div className="h-4 bg-light-blue-400 rounded w-3/4"></div>
              <div className="space-y-2">
                <div className="h-4 bg-light-blue-400 rounded"></div>
                <div className="h-4 bg-light-blue-400 rounded w-5/6"></div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};
