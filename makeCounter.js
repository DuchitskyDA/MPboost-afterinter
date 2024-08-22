function makeCounter(startValue) {
  let newValue = startValue;
  // можно сделать еще через this, тогда можно сразу возвращать
  // объект без константы
  const ans = {
    get value() {
      return newValue;
    },
    increase(num) {
      newValue += num;
      return ans;
    },
    decrease(num) {
      newValue -= num;
      return ans;
    },
  };

  return ans;
}

const counter = makeCounter(50);
counter.value; // 50
counter.increase(5); // 55
counter.decrease(7); // 48
counter.decrease(10).decrease(10).increase(2).value; // 30
