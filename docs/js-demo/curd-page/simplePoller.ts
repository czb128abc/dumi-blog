function simplePoller(
  queryFn: () => boolean,
  callback: (timer: number) => void,
) {
  const rate = 1.5;
  let timer = 1000;
  const timerPoller = () => {
    setTimeout(() => {
      const result = queryFn();
      if (result) {
        callback(timer);
      } else {
        timer = Number(timer * rate);
        timerPoller();
      }
    }, timer);
  };
  timerPoller();
}

// test code

const callbackFunc = (timer: number) => {
  console.log('....callbackFunc timer', timer);
};

const genTestData = (count: number) => {
  return {
    count,
    step: 1,
  };
};

/**
 *  生成测试
 * @param count
 * @returns
 */
const queryTestFn = (data: { count: number; step: number }) => () => {
  const { count, step } = data;
  if (count === step) {
    return true;
  }
  data.step = data.step + 1;
  return false;
};

export function test() {
  console.log('exec simplePoller');
  simplePoller(queryTestFn(genTestData(1)), callbackFunc);
  simplePoller(queryTestFn(genTestData(2)), callbackFunc);
  simplePoller(queryTestFn(genTestData(3)), callbackFunc);
  simplePoller(queryTestFn(genTestData(4)), callbackFunc);
}
