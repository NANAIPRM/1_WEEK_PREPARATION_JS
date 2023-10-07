function plusMinus(arr) {
  let positive = 0;
  let negative = 0;
  let zero = 0;

  let n = arr.length;

  for (let i = 0; i < n; i++) {
    if (arr[i] > 0) {
      positive += 1;
    } else if (arr[i] < 0) {
      negative += 1;
    } else {
      zero += 1;
    }
  }

  console.log(positive / n);
  console.log(negative / n);
  console.log(zero / n);
}
