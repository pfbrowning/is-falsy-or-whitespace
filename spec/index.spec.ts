import isFalsyOrWhitespace from '../src/index';

describe('isFalsyOrWhitespace', () => {
  const testCases = [
      { value: null, expected: true },
      { value: undefined, expected: true },
      { value: '', expected: true },
      { value: '                 ', expected: true },
      { value: '    ', expected: true },
      { value: 0, expected: true },
      { value: NaN, expected: true },
      { value: false, expected: true },
      { value: [], expected: false },
      { value: 'undefined', expected: false },
      { value: 'null', expected: false },
      { value: 'some non blank string', expected: false },
      { value: '          a                ', expected: false }
  ];
  testCases.forEach(input => {
    it(`should determine ${input.value} ${input.expected ? 'not' : ''} to be falsy or whitespace`, () => {
        expect(isFalsyOrWhitespace(input.value as any)).toBe(input.expected);
    });
  });
});
