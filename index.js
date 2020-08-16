// Your code here
function mapToNegativize(sourceArray) {
  let result = [];
  for(const element of sourceArray) {
    result.push(parseInt(sourceArray[element]) * -1);
  }
  return result;
}

mapToNoChange(sourceArray) {
  let result = [];
  for(const element of sourceArray) {
    result.push(parseInt(sourceArray[element]));
  }
  return result;
}
