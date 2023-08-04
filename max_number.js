var arr = [32, 21, 98, 45, 9, 55];
var largest = arr[0];

for (var i = 0; i < arr.length; i++) {
  if (arr[i] > largest ) {
    largest = arr[i];
  }
}
console.log(largest);