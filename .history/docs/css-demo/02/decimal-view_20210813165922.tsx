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

function calcIcrNums(targeValue: number, nowValue: number, len = 4) {
  const difference = targeValue - nowValue;
  // 是否为负数
  const isNegative = difference < 0;
  const step = difference / len;
  // const list:number[]=[];
  let list: number[] = [];

  for (let i = 0; i < len; i++) {
    list.push(step);
  }
  return list
    .map((item, index) => {
      console.log(
        '🚀 ~ file: decimal-view.tsx ~ line 27 ~ returnlist.map ~ item',
        item,
      );
      return step * index + nowValue;
    })
    .concat([targeValue]);
}

const DecimalView = (props: DecimalViewProps) => {
  const { value } = props;
  const [showNum, setShowNum] = useState<number>(value);
  const makeNum = async (num: number) => {
    await delayTimeOperate(500);
    setShowNum(num);
    // setTimeout(() => {
    //   console.log('🚀 ~ file: decimal-view.tsx ~ line 40 ~ makeNum ~ num', num);
    //   setShowNum(num);
    // }, 1000);
  };
  const changeShowNum = async (targeValue: number, nowValue: number) => {
    console.log(targeValue, nowValue);
    const results = calcIcrNums(targeValue, nowValue);
    results.forEach(async (item) => {
      makeNum(item);
    });
  };
  useEffect(() => {
    changeShowNum(value, showNum);
  }, [value]);
  return <span>{showNum}</span>;
};

export default DecimalView;
