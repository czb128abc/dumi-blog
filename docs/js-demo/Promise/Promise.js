// interface MyPromiseData<T> {
//   status: 'pending' | 'resolved' | 'rejected';
//   data: T;
//   callbacks: []
// }

/**
 *
Promise具体特性是什么？

1.then 传入的值分别是 resolve的回调和 reject状态回调。

2.传递值，将上一个then的值一直往下传。

3.符合同层先来先到，异层必定上层先执行的策略。


 **/

/**
 * promise都有一个状态可能为pending或resolved，rejected。而且初始状态都为pending。因此需要添加个status来表示当前promise的状态.。并且每个promise有自己的data。
 */
function MyPromise(executor) {
  var self = this;
  self.status = 'pending';
  self.data = null;
  self.callbacks = [];
  function resolve(value) {
    self.status = 'resovled';
    self.data = value;
    if (self.callbacks.length > 0) {
      self.callbacks.forEach((cb) => {
        cb.onResolved(value);
      });
    }
  }
  function reject(value) {
    if (self.status !== 'pending') {
      return;
    }
    self.status = 'rejected';
    self.data = value;
    if (self.callbacks.length > 0) {
      setTimeout(() => {
        self.callbacks.forEach((cb) => {
          cb.onRejected(value);
        });
      }, 0);
    }
  }

  // 立即同步执行executor
  try {
    // 立即同步执行executor
    executor(resolve, reject);
  } catch (e) {
    // 如果执行器抛出异常，promise对象变为rejected状态
    reject(e);
  }
}

MyPromise.prototype.then = function (onResolved, onRejected) {
  var self = this;
  return new MyPromise((resolve, reject) => {
    if (self.status === 'pending') {
      self.callbacks.push({
        onRejected() {
          if (typeof onRejected === 'function') {
            onRejected(self.data);
          } else {
            console.log('onRejected not defined');
            reject(self.data);
          }
        },
        onResolved() {
          if (typeof onResolved === 'function') {
            onResolved(self.data);
          } else {
            console.log('onResolved not defined');
            resolve(self.data);
          }
        },
      });
    } else if (self.status === 'resolved') {
      setTimeout(() => {
        const result = onResolved(self.data);
        // 1. 如果回调函数返回的不是promise，return的promise的状态是resolved，value就是返回的值。
        if (!result instanceof MyPromise) {
          resolve(result);
        }
      });
    } else {
      setTimeout(() => {
        onResolved(self.data);
      });
    }
  });
};

MyPromise.prototype.catch = function (onRejected) {
  return this.then(undefined, onRejected);
};

MyPromise.prototype.reject = function (reasonData) {
  return new MyPromise((resolve, reject) => {
    reject(reasonData);
  });
};
MyPromise.prototype.reject = function (data) {
  return new MyPromise((resolve, reject) => {
    if (value instanceof MyPromise) {
      value.then(
        (value) => resolve(value),
        (reasonData) => reject(reasonData),
      );
    } else {
      resolve(data);
    }
  });
};

/**Promise.all可以将多个Promise实例包装成一个新的Promise实例。
同时，成功和失败的返回值是不同的，
成功的时候返回的是一个结果数组，
而失败的时候则返回最先被reject失败状态的值。
 */
/*
Promise函数对象的all方法
返回一个promise对象，只有当所有promise都成功时返回的promise状态才成功
*/
MyPromise.all = function (promises) {
  const values = new Array(promises.length);
  var resolvedCount = 0; //计状态为resolved的promise的数量
  return new MyPromise((resolve, reject) => {
    // 遍历promises，获取每个promise的结果
    promises.forEach((p, index) => {
      p.then(
        (value) => {
          // p状态为resolved，将值保存起来
          values[index] = value;
          resolvedCount++;
          // 如果全部p都为resolved状态，return的promise状态为resolved
          if (resolvedCount === promises.length) {
            resolve(values);
          }
        },
        (reason) => {
          //只要有一个失败，return的promise状态就为reject
          reject(reason);
        },
      );
    });
  });
};

/**
 * Promse.race就是赛跑的意思，意思就是说，Promise.race([p1, p2, p3])里面哪个结果获得的快，就返回那个结果，不管结果本身是成功状态还是失败状态。
 */
/*
    Promise函数对象的race方法
    返回一个promise对象，状态由第一个完成的promise决定
    */
MyPromise.race = function (promises) {
  return new MyPromise((resolve, reject) => {
    // 遍历promises，获取每个promise的结果
    promises.forEach((p, index) => {
      MyPromise.resolve(p).then(
        (value) => {
          // 只要有一个成功，返回的promise的状态九尾resolved
          resolve(value);
        },
        (reason) => {
          //只要有一个失败，return的promise状态就为reject
          reject(reason);
        },
      );
    });
  });
};

const TargetPromise = MyPromise;
// const TargetPromise = Promise;

let p1 = new TargetPromise((resolve, reject) => {
  setTimeout(() => {
    resolve('success');
    // reject(new Error('reject error'));
  }, 1000);
});
console.log('sss');
p1.then(
  (data) => console.log('then data', data),
  (reason) => console.log('resolve reason', reason),
).catch((e) => console.log('catch e', e));
