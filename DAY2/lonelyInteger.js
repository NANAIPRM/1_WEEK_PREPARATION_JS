function lonelyinteger(arr) {
  arr = arr.sort();
  const length = arr.length;
  let result = 0;
  for (let i = 0; i < arr.length; i++) {
    if (arr[i] !== arr[i + 1] || arr[i] !== arr[i - 1]) {
      result = arr[i];
    }
  }
  return result;
}
