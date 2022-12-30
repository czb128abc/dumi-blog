function test1() {
  setTimeout(() => {
    console.log(1);
  }, 20);
  console.log(2);
  setTimeout(() => {
    console.log(3);
  }, 10);
  console.log(4);
  console.time('AA');
  for (let i = 0; i < 90000000; i++) {}
  console.timeEnd('AA'); // => AA： 33ms
  console.log(5);

  setTimeout(() => {
    console.log(6);
  }, 20);
  console.log(7);

  setTimeout(() => {
    console.log(8);
  }, 10);
}

function test2(params) {
  async function async1(params) {
    console.log('A');
    await async2();
    console.log('B');
  }

  async function async2(params) {
    console.log('C');
  }
  console.log('D');
  setTimeout(() => {
    console.log('E');
  }, 0);
  async1();
  new Promise((resolve) => {
    console.log('F');
    resolve();
  }).then(() => {
    console.log('G');
  });
  console.log('H');
}

test2();
