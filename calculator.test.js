const Calculator = require('./calculator');

describe('Calculate', () => {
    const myCalculator = new Calculator();

    test('add', () => {
        expect((myCalculator.add(1,2)) === 3);
        expect((myCalculator.add(5,4)) === 9);
        expect((myCalculator.add(2,4)) === 6);
    });

    test('substract', () => {
        expect(myCalculator.substract(3,2)  === 1);
        expect(myCalculator.substract(5,4)  ===  1);
        expect(myCalculator.substract(8,4)  === 4);
    });

    test('divide', () => {
        expect(myCalculator.divide(6,2)  ===  3.00);
        expect(myCalculator.divide(10,2)  === 5.00);
        expect(myCalculator.divide(8,3)  === 2.67);
    })

    test('multiply', () => {
        expect(myCalculator.multiply(6,2)  === 12);
        expect(myCalculator.multiply(10,2)  === 20);
        expect(myCalculator.multiply(8,3)  === 24);
    });
});