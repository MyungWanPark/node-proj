let count = 0;

function sayHello(result) {
    console.log('result = ', result)
    console.log(count++);
}

function calculate(x, y) {
    console.log('calculate 함수 실행');
    const result = x + y;
    sayHello(result);
    console.log('good bye!!!');
    return result;
}

calculate(2,5);