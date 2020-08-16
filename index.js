// Your code here
function mapToNegativize(sourceArray) {
  let result = [];
  for(const element in sourceArray) {
    result.push(parseInt(sourceArray[element]) * -1);
  }
  return result;
}

console.log(mapToNegativize([1, 2, 3]));

function mapToNoChange(sourceArray) {

  let result = sourceArray;

  return result;
}


function mapToDouble(sourceArray) {
  let result = [];
  for(const element of sourceArray) {
    result.push(parseInt(sourceArray[element]) * 2);
  }
  return result;
}
