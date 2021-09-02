import { useEffect, useState } from 'react';
type DecimalViewProps = {
  value: number;
  riseTimer?: number;
  stepLen?: number;
};

export const delayTimeOperate = (timer: number) => {
  return new Promise<void>((resolve) => {
    setTimeout(() => {
      resolve();
    }, timer);
  });
};

function calcRises(targeValue: number, nowValue: number, len: number) {
  const difference = targeValue - nowValue;
  // 是否为负数
  const isNegative = difference < 0;
  const step = parseInt(`${difference / len}`);
  // const list:number[]=[];
  let list: number[] = [];

  for (let i = 1; i < len; i++) {
    list.push(step);
  }
  return list
    .map((item, index) => {
      return step * index + nowValue;
    })
    .concat([targeValue]);
}

const DecimalView = (props: DecimalViewProps) => {
  const { value, riseTimer = 100, stepLen = 5 } = props;
  const [showNum, setShowNum] = useState<number>(value);
  const makeNum = (num: number) => {
    setShowNum(num);
  };
  const changeShowNum = async (targeValue: number, nowValue: number) => {
    console.log(targeValue, nowValue);
    const results = calcRises(targeValue, nowValue, stepLen);
    console.log(
      '🚀 ~ file: decimal-view.tsx ~ line 41 ~ changeShowNum ~ results',
      results,
    );
    for (let i = 0; i < results.length; i++) {
      await delayTimeOperate(riseTimer).then(() => {
        makeNum(results[i]);
      });
    }
  };
  useEffect(() => {
    changeShowNum(value, showNum);
  }, [value]);
  return <span>{showNum}</span>;
};

export default DecimalView;
