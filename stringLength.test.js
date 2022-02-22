const  stringLength = require('./stringLength.js');

test('Length of a string', () => {
    expect(stringLength('RICHARD')).toEqual(7);
});