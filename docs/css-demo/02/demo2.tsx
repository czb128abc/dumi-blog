import React, { useState, useEffect } from 'react';

type CountdownProps = {
  countdown: number;
};
type CountdownState = {
  counter: number;
};

function Countdown(props: CountdownProps) {
  const { countdown } = props;
  const [counter, setCounter] = useState(countdown);
  let timer;
  const setIntervalFunc = () => {
    console.log(
      '🚀 ~ file: demo2.tsx ~ line 23 ~ setIntervalFunc ~ setIntervalFunc',
      setIntervalFunc,
    );

    timer = setInterval(async () => {
      console.log('counter', counter);
      if (counter === 0) {
        clearInterval(timer);
      } else {
        setCounter(counter - 1);
        console.log('counter setCounter ', counter);
      }
    }, 1000);
  };
  useEffect(() => {
    setCounter(countdown);
    setIntervalFunc();
  }, [counter]);
  return <div>{counter === 0 ? '活动开始' : counter}</div>;
}

class Countdown2 extends React.Component<CountdownProps, CountdownState> {
  constructor(props: CountdownProps) {
    super(props);
    this.state = {
      counter: props.countdown,
    };
    this.timer;
  }

  componentDidMount() {
    this.setIntervalFunc();
  }

  setIntervalFunc = () => {
    this.timer = setInterval(async () => {
      const { counter } = this.state;
      if (counter === 0) {
        clearInterval(this.timer);
      } else {
        await this.setState({ counter: counter - 1 });
      }
    }, 1000);
  };

  render() {
    const { counter } = this.state;
    return <div>{counter === 0 ? '活动开始' : counter}</div>;
  }
}

const Demo = () => (
  <div>
    <Countdown2 countdown={10} />
  </div>
);

export default Demo;
