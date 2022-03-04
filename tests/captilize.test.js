import captilize from '../functions/captilize.js';

test('First letter is captilized', () => {
    expect(captilize('hello')).toMatch(/Hello/);
});

test('"" returns ""', () => {
    expect(captilize('')).toBe('');
});


