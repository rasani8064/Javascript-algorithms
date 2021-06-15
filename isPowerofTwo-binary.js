function isPowerTwo(number) {
  if (number < 1) {
    return false;
  }
  return (number & (number - 1)) === 0;
}

console.log(isPowerTwo(8)); //true
