const { Kata } = require('../src/kata');

describe('First story', () => {
  test('GIVEN [0, 1, 2, 0, 0], 1, 0, 0 WHEN logic THEN returns 3', () => {
    const kata = new Kata();
    expect(kata.scoreTest([0, 1, 2, 0, 0], 1, 0, 0)).toStrictEqual(3);
  });
});




