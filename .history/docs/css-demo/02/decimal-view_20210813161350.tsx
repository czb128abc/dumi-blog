import { useEffect, useState } from 'react';
type DecimalViewProps = {
  value: number;
};
const DecimalView = (props: DecimalViewProps) => {
  const { value } = props;
  const [showNum, setShowNum] = useState(value);
  const changeShowNum = (targeValue, nowValue) => {
    console.log(
      '🚀 ~ file: decimal-view.tsx ~ line 9 ~ changeShowNum ~ targeValue, nowValue',
      targeValue,
      nowValue,
    );
  };
  useEffect(() => {
    changeShowNum(value, showNum);
  }, [value]);
  return <span>{value}</span>;
};

export default DecimalView;
