const removeFromArray = function (array, ...args) {
    let arrayCopy = [...array];
    for (const arg of args) {
        arrayCopy = arrayCopy.filter((element) => element !== arg);
    }
    return arrayCopy;
};

// Do not edit below this line
module.exports = removeFromArray;
