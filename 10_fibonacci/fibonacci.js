const fibonacci = function(num) {
    if (num <= 0) return 'OOPS';
  do {
    let fibonArray = [1,1]
 for(let i=0;i<num;i++){
  let a = fibonArray[i]+fibonArray[i+1];
  fibonArray.push(a)
}
  return fibonArray[num-1];
  } while(num>1);
};

// Do not edit below this line
module.exports = fibonacci;
