function fibsRec(num) {
  // base case 1
  if (num === 1) return [0];
  // base case 2
  if (num === 2) return [0, 1];
  // recursive case
  else {
    // Fn = Fn-1 + Fn-2
    const arr = fibsRec(num - 1);
    arr.push(arr[num - 2] + arr[num - 3]);
    return arr;
  }
}

console.log(fibsRec(1));
console.log(fibsRec(8));
console.log(fibsRec(20));
