const reverseString = require('./reverseString.js');

test("returns the given array reversed", () => {
    expect(reverseString('abcd')).toBe('dcba');
})