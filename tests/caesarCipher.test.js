import cipher from '../functions/caesarCipher.js';

test('wraps', () => {
    expect(cipher('hello world')).toBe('ifmmp xpsme');
});

test('correct case', () => {
    expect(cipher('HelLo woRld')).toBe('IfmMp xpSme');
});