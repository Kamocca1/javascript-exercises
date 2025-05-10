const add = function (a, b) {
    return a + b;
};

const subtract = function (a, b) {
    return a - b;
};

const sum = function (array) {
    const sum = array.reduce((total, number) => {
        return total + number;
    }, 0);
    return sum;
};

const multiply = function (array) {
    const multiple = array.reduce((total, n) => {
        return total * n;
    }, 1);
    return multiple;
};

const power = function (a, b) {
    return a ** b;
};

const factorial = function (n) {
    if (n === 0) {
        return 1;
    } else {
        return n * factorial(n - 1);
    }
};

// Do not edit below this line
module.exports = {
    add,
    subtract,
    sum,
    multiply,
    power,
    factorial,
};
