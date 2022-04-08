const { Kata } = require('../src/kata');

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

describe('Test omitted answers', () => {
  test('GIVEN [1, 1, 2, 0, 1], 0, 2, 0 WHEN logic THEN returns 6', () => {
    const kata = new Kata();
    expect(kata.scoreTest([1, 1, 2, 0, 1], 0, 2, 0)).toStrictEqual(6);
  });

  test('GIVEN [1, 1, 2, 0, 1], 0, -2, 0 WHEN logic THEN returns -6', () => {
    const kata = new Kata();
    expect(kata.scoreTest([1, 1, 2, 0, 1], 0, -2, 0)).toStrictEqual(-6);
  });
});

describe('Test incorrect answers', () => {
  test('GIVEN [2, 2, 2, 0, 1], 0, 0, 1 WHEN logic THEN returns -3', () => {
    const kata = new Kata();
    expect(kata.scoreTest([2, 2, 2, 0, 1], 0, 0, 1)).toStrictEqual(-3);
  });
  test('GIVEN [2, 2, 2, 2, 1], 0, 0, 2 WHEN logic THEN returns -8', () => {
    const kata = new Kata();
    expect(kata.scoreTest([2, 2, 2, 2, 1], 0, 0, 2)).toStrictEqual(-8);
  });
});

describe('Complex logic', () => {
  test('GIVEN [0, 2, 2, 0, 1], 4, 1, 2 WHEN logic THEN returns 5', () => {
    const kata = new Kata();
    expect(kata.scoreTest([0, 2, 2, 0, 1], 4, 1, 2)).toStrictEqual(5);
  });
  test('GIVEN [0,1,0,2,1,0,0,1,1,0], 2, 8, 7 WHEN logic THEN returns 35', () => {
    const kata = new Kata();
    expect(kata.scoreTest([0, 1, 0, 2, 1, 0, 0, 1, 1, 0], 2, 8, 7)).toStrictEqual(35);
  });
});




