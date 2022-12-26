let count = 0;

function sayHello(result) {
    console.log('result = ', result)
    console.log(count++);
    console.log(count++);
    console.log(count++);
    console.log(count++);
}

function calculate(x, y) {
    console.log('calculate 함수 실행');
    const result = x + y;
    sayHello(result);
    console.log('good bye!!!');
    return result;
}

const stop = 4;
for (let i = 0; i < 10; i++) {
    if (i === stop) {
        break;
    }
    console.log('i = ', i);
}
calculate(2,5);