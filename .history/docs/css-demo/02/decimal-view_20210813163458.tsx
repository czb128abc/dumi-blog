import { useEffect, useState } from 'react';
type DecimalViewProps = {
  value: number;
};

export const delayTimeOperate = (timer: number) => {
  return new Promise<void>((resolve) => {
    setTimeout(() => {
      resolve();
    }, timer);
  });
};

function calcIcrNums(targeValue: number, nowValue: number, len = 3) {
  const difference = targeValue - nowValue;
  // 是否为负数
  const isNegative = difference < 0;
  const step = difference / len;
  // const list:number[]=[];
  const list: number[] = new Array();
  list.length = len + 1;
  console.log(
    '🚀 ~ file: decimal-view.tsx ~ line 21 ~ calcIcrNums ~ list',
    list,
  );
  return list.map((item) => {
    console.log(
      '🚀 ~ file: decimal-view.tsx ~ line 27 ~ returnlist.map ~ item',
      item,
    );
    return step + item;
  });
}

const DecimalView = (props: DecimalViewProps) => {
  const { value } = props;
  const [showNum, setShowNum] = useState<number>(value);
  const changeShowNum = async (targeValue: number, nowValue: number) => {
    console.log(targeValue, nowValue);
    const results = calcIcrNums(targeValue, nowValue);
    console.log(
      '🚀 ~ file: decimal-view.tsx ~ line 31 ~ changeShowNum ~ results',
      results,
    );
  };
  useEffect(() => {
    changeShowNum(value, showNum);
  }, [value]);
  return <span>{value}</span>;
};

export default DecimalView;
