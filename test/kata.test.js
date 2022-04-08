const { Kata } = require('../src/kata');

describe('Scroring test', () => {
  describe('Test correct answers', () => {
    test('GIVEN [0, 1, 2, 0, 0], 1, 0, 0 WHEN logic THEN returns 3', () => {
      const kata = new Kata();
      expect(kata.scoreTest([0, 1, 2, 0, 0], 1, 0, 0)).toStrictEqual(3);
    });

    test('GIVEN [0, 1, 2, 0, 0], 2, 0, 0 WHEN logic THEN returns 6', () => {
      const kata = new Kata();
      expect(kata.scoreTest([0, 1, 2, 0, 0], 2, 0, 0)).toStrictEqual(6);
    });

    test('GIVEN [0, 1, 2, 0, 0, 0], 3, 0, 0 WHEN logic THEN returns 12', () => {
      const kata = new Kata();
      expect(kata.scoreTest([0, 1, 2, 0, 0, 0], 3, 0, 0)).toStrictEqual(12);
    });
  });
});




