const capitalize = require('./capitalize');

test("capitalize", () => {
    expect(capitalize('richard')).toBe('Richard');
});