/**
 * @param {number} x
 * @return {number}
 */
var reverse = function (x) {
  let result = 0;
  if (x < 0) {
    x = Math.abs(x);
  }
  let num = x;
  while (num > 0) {
    result = result * 10;
    result += num % 10;
    num = num / 10;
  }
  return x < 0 ? -result : result;
};

console.log(reverse(123));
