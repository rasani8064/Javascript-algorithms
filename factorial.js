function fact(number) {
  let result = 1;
  for (let i = 2; i <= number; i++) {
    result = result * i;
  }
  return result;
}

console.log(fact(3)); //6
console.log(fact(4)); //24
console.log(fact(5)); //120
