function debounce(func, delay) {
  let timer;
  return () => {
    if (timer) {
      clearTimeout(timer);
    }
    timer = setTimeout(() => {
      func.apply(this, arguments);
      timer = null;
    }, delay);
  };
}

function demo() {
  console.log('debounce demo');
  console.log(this);
}

const debouncedDemo = debounce(demo, 1000);

debouncedDemo();
debouncedDemo();
debouncedDemo();
