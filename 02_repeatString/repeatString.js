const repeatString = function (string, repetitions) {
    if (repetitions >= 0) {
        finalString = "";
        for (let i = 0; i < repetitions; i++) {
            finalString += string;
        }
        return finalString;
    } else {
        return "ERROR";
    }
};

// Do not edit below this line
module.exports = repeatString;
