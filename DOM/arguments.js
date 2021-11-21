function add(num1, num2) {
    var sum = 0;
    for (let index = 0; index < arguments.length; index++) {
        const number = arguments[index];
        sum = sum + number;
    }
    return sum;
}
const result = add(2, 3, 4, 6);
console.log(result);