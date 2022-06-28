import caesarCipher from "../modules/caeserCipher";

test('Caesar Cipher', () => {
    expect(caesarCipher('abcd', 6)).toBe('ghij');
  });

 