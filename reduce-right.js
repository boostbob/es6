var flattened = [1, 2, 3].reduceRight(function(prev, curr) {
  console.error(curr, prev);
  // return prev += curr;
}, 0);

console.error(flattened);
