module.exports = function getZerosCount(number) {
  res = 0;
	while(number > 0) {
    res = res + Math.floor(number/5);
    number = number /  5;
  }
 	return res;
}
