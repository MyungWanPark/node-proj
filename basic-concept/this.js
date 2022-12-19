
function k() {
    console.log(this);
    console.log(this === global);

}
k();

class A {
    constructor(num) {
        this.num = num;
    }
    memberFunction() {
        console.log('-----Class A-----');
        console.log(this);
    }
}

const a = new A(3);
a.memberFunction();

console.log(this);
console.log(this === module.exports);
