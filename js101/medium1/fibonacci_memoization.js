let memo = { };

function fibonacci(nth) {
  //base case
  if (nth < 3) return 1;
  else if (memo[nth]) {
    return memo[nth];
  } else {
    memo[nth] = fibonacci(nth - 1) + fibonacci(nth - 2);
    return memo[nth];
  }
}