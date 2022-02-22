class Calculator{

    add(a,b) {
         let ans = a + b;
         return ans;
    }

    substract(a,b) {
        let ans = a - b;
        return ans;
    }

    divide(a,b) {
        let ans = (a / b).toFixed(2);
        return ans;
    }

    multiply(a,b) {
        let ans = a * b;
        return ans;
    }
}


// const myCalculator = new Calculator();

// myCalculator.add(7,3);
// myCalculator.substract(7,3);
// myCalculator.divide(7,3);
// myCalculator.multiply(7,3);

// myCalculator.divide(6,2);
// myCalculator.divide(10,2);
// myCalculator.divide(8,3);

module.exports = Calculator;