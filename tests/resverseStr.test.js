import strReverse from '../functions/reverseStr';

test('returns reverse of string', () => {
    expect(strReverse('hello')).toBe('olleh');
});