const repeatString = function(string,num) {
    if (num<0){
        return 'ERROR';
        
       } else {
        let x = [];
        for(var i =0; i<num; ++i){
        x.push(string);
        }
        return  x.join('')
       }
};

// Do not edit below this line
module.exports = repeatString;
