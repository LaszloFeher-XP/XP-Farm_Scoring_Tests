class Kata {

  scoreTest(str, right, omit, wrong) {
    let result = 0;
    for (const val of str) {
      if (val === 0) {
        result += right;
      }
      if (val === 1) {
        result += omit;
      }
      if (val === 2) {
        result -= wrong;
      }
    }
    return result;
  }
}

module.exports = {
  Kata,
};