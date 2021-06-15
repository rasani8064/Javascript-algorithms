function capitalize(str1) {
  const strArr = str1.split(" ");
  for (let i = 0; i < strArr.length; i++) {
    strArr[i] =
      strArr[i].substring(0, 1).toUpperCase() + strArr[i].substring(1);
  }
  return strArr.join(" ");
}

console.log(capitalize("i love javascript"));
