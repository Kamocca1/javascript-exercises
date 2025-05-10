const palindromes = function (string) {
    let copyWithSpacesAndCapitalization = string.replace(/[^\w\s]|_/g, "");
    let copyWithSpaces = copyWithSpacesAndCapitalization.toLowerCase();
    let copy = copyWithSpaces.split(" ").join("");
    let reversed = copy.split("").reverse().join("");
    return copy === reversed;
};

// Do not edit below this line
module.exports = palindromes;
