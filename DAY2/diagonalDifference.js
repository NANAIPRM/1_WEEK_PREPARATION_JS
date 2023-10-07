function diagonalDifference(arr) {
  let primaryDiagonalSum = 0;
  let secondaryDiagonalSum = 0;

  const n = arr.length; // Assuming arr is a square matrix

  // Calculate the sum of the primary diagonal
  for (let i = 0; i < n; i++) {
    primaryDiagonalSum += arr[i][i];
  }

  // Calculate the sum of the secondary diagonal
  for (let i = 0; i < n; i++) {
    secondaryDiagonalSum += arr[i][n - 1 - i];
  }

  // Calculate the absolute difference between the two sums
  const absoluteDifference = Math.abs(
    primaryDiagonalSum - secondaryDiagonalSum
  );

  return absoluteDifference;
}
