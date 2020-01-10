helper(0, [1, 2, 3, 4, 5, 6, 7, 8, 9]);

function helper(idx, arr) {
  if (idx === arr.length) {
    console.log("Base case");
    return;
  }

  console.log(arr[idx] + " Printing in pre call");

  helper(idx + 1, arr);

  console.log(arr[idx] + " Printing in post call");
}

var idx = 0;
var ctr = 0;

var ansStr = "";
var product = 1;
var max = -1;

//console.log(triple_find(idx, ctr, [1, -4, 3, -6, 7, 0], ansStr, product, max));

function triple_find(idx, ctr, arr, ansStr, product, max) {
  if (idx >= arr.length) {
    if (max < product) {
      max = product;
    }
    return max;
  }

  ans1 = -1;
  if (ctr + 1 !== 4) {
    ans1 = triple_find(
      idx + 1,
      ctr + 1,
      arr,
      ansStr + " " + arr[idx],
      product * arr[idx],
      max
    );
  }

  ans2 = triple_find(idx + 1, ctr, arr, ansStr, product, max);

  return Math.max(ans1, ans2);
}

console.log(max_of_arr(0, [10, -4, 3, -6, 7, 0], -1));

function max_of_arr(idx, arr, max) {
  if (idx === arr.length) {
    return max;
  }

  max = Math.max(arr[idx], max);

  return max_of_arr(idx + 1, arr, max);
}
