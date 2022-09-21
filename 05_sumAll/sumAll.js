const sumAll = function(a,b) {
    if ((typeof a === 'string') || (typeof b === 'string')) {
       return 'ERROR';
     } 
     
     if ((a >= 0) && (b >=0) ) {
         let c = [];
         if (a<b) {
            for(i=a; i <= b;i++) {
                     c.push(i);
                                 }
             return c.reduce((a, b) => a + b);
                   
          } else if (a>b) {
                     for(i=b; i <= a;i++){
                              c.push(i);
                                        }
             return c.reduce((a, b) => a + b);
         } 
     
      } else return 'ERROR'
   }
   
   
// Do not edit below this line
module.exports = sumAll;
