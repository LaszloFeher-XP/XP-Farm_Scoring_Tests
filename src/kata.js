class Kata {

  scoreTest(str, right, omit, wrong) {
    return str.reduce((a, b) => a + (b > 1 ? -wrong : b ? omit : right), 0);
  }
}

module.exports = {
  Kata,
};