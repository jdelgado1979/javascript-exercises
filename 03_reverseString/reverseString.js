const reverseString = function(string) {
    let x = [];
    for(let i = string.length-1; i>=0; i--){
    x.push(string[i]);
    }
    
    return  x.join('');
};

// Do not edit below this line
module.exports = reverseString;
