const findTheOldest = function (people) {
    const ageDescending = people.sort((a, b) => {
        let aYears;
        let bYears;

        if (!a.yearOfDeath) {
            aYears = new Date().getFullYear() - a.yearOfBirth;
        } else {
            aYears = a.yearOfDeath - a.yearOfBirth;
        }

        if (!b.yearOfDeath) {
            bYears = new Date().getFullYear() - b.yearOfBirth;
        } else {
            bYears = b.yearOfDeath - b.yearOfBirth;
        }

        return aYears > bYears ? -1 : 1;
    });
    const oldest = ageDescending[0];
    return oldest;
};

// Do not edit below this line
module.exports = findTheOldest;
