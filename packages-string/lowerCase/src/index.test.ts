import lowerCase from './index';

describe('lowerCase', () => {
  [
    {
      inputString: null,
      expectedResult: '',
    },
    {
      inputString: undefined,
      expectedResult: '',
    },
    {
      inputString: '',
      expectedResult: '',
    },
    {
      inputString: 'Lorem Ipsum',
      expectedResult: 'lorem ipsum',
    },
    {
      inputString: 'lorem ipsum',
      expectedResult: 'lorem ipsum',
    },
    {
      inputString: 'lorem',
      expectedResult: 'lorem',
    },
    {
      inputString: 'loremIpsum',
      expectedResult: 'lorem ipsum',
    },
    {
      inputString: '---loremIpsum',
      expectedResult: 'lorem ipsum',
    },
    {
      inputString: '---lorem-Ipsum---',
      expectedResult: 'lorem ipsum',
    },
    {
      inputString: '___lorem__Ipsum___',
      expectedResult: 'lorem ipsum',
    },
    {
      inputString: '---lorem_Ipsum---',
      expectedResult: 'lorem ipsum',
    },
  ].forEach(({ inputString, expectedResult }) => {
    test(`lowerCase(${inputString}) should be ${expectedResult}`, () => {
      expect(lowerCase(inputString)).toBe(expectedResult);
    });
  });
});
