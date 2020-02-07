const listA = ['a', 'b', 'c'];
const listB = [1, 2, 3];

function zipList(arrayA, arrayB) {
  const result = [];
  for (let i = 0; i < arrayA.length; i++) {
    result.push(arrayA[i]);
    result.push(arrayB[i]);
  }
  return result;
}
console.log(zipList(listA, listB));

function zipListTheSimpleWay(arrayA, arrayB) {
  return _.flatten(_.zip(arrayA, arrayB));
}
console.log(zipListTheSimpleWay(listA, listB));
