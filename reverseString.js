const reverseString = (str) => {
    let reversed = str.split("").reverse().join("");

    return reversed;
};

module.exports = reverseString ;