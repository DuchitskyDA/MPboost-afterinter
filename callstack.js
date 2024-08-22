// первая синхронная
console.log('start');

new Promise(resolve => {
    // вторая синхронная
    console.log(1);
    setTimeout(resolve, 0);
    // 2 микро
}).then(() => console.log(2));


// макро
setTimeout(() => console.log(3), 0);

// микротаска
new Promise(resolve => resolve()).then(() => console.log(4));

// третья синхронная
console.log('end');

// start, 1, end, 4 , 2, 3