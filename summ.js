function summ(arg) {
  let prev = arg;

  // тут при первом вызове возвращается increase
  // со второго вызова уже начинает вызываться
  // тк по сути вызывается increase(3) и (5)
  const increase = (arg) => {
    prev += arg;
    return increase;
  };


  return increase;
}

summ(2)(3)(5); // 10
