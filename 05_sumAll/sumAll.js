const sumAll = function (int1, int2) {
    totalSum = 0;
    if (int1 < 0 || int2 < 0) {
        return "ERROR";
    } else if (!Number.isInteger(int1) || !Number.isInteger(int2)) {
        return "ERROR";
    } else if (typeof int1 !== "number" || typeof int2 !== "number") {
        return "ERROR";
    } else if (int2 > int1) {
        for (let i = int1; i < int2 + 1; i++) {
            totalSum += i;
        }
        return totalSum;
    } else {
        for (let i = int2; i < int1 + 1; i++) {
            totalSum += i;
        }
        return totalSum;
    }
};

// Do not edit below this line
module.exports = sumAll;
