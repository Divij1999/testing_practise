import analyzeArray from '../functions/analyzeArray.js';

test('it works', () => {
    expect(analyzeArray([1,2,3,4,5])).toStrictEqual({
        average: 3,
        min: 1,
        max: 5,
        length: 5
    });
});