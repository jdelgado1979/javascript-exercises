const add = function(a,b) {
	return a + b;
};

const subtract = function(a,b) {
	return a - b;
};
	const sum = function(array) {

    if (array.length == 0){
      return 0;
     } else {
      let ans = array.reduce(function(a,b){return a+b});
       return ans;
       }
     
   };

const multiply = function(array) {
  if (array.length == 0){
    return 0;
   } else {
    let ans = array.reduce(function(a,b){return a*b});
     return ans;
     }
};

const power = function(a,b) {
  
  let c = [];
  for(let i=1; i<=b;++i){
      c.push(a);
    }
    let d = c.reduce(function(a,b){return a*b});
    return d;

};

const factorial = function(a) {
  if ((a==0)||(a==1)) {
    return 1;
  } else {
    let c = [];
    for(let i=1; i<=a;++i){
    c.push(i);
     }
    let d = c.reduce(function(a,b){return a*b});
     return d;
    }
};

// Do not edit below this line
module.exports = {
  add,
  subtract,
  sum,
  multiply,
  power,
  factorial
};
