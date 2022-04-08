class Kata {

  scoreTest(str, right, omit, wrong) {
    let result = 0;
    for (const val of str) {
      console.log(val);
      if (val === 0) {
        result += right;
      }
    }
    return result;
  }
}

module.exports = {
  Kata,
};