class Kata {

  scoreTest(str, right, omit, wrong) {
    let result = 0;
    for (const val of str) {
      console.log(val);
      if (val === 0) {
        result += right;
      }
      if (val === 1) {
        result += omit;
      }
    }
    return result;
  }
}

module.exports = {
  Kata,
};