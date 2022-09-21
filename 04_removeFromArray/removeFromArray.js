const removeFromArray = function([...args], ...z) {
    let a = [...args];
    let b = [...z];
   
   
   let c = [];
    for(let i = 0; i<a.length;i++){
      for(let j = 0; j<b.length;j++){
       if(a[i]===b[j]){
         c.push(a[i]);
        } else {
          continue;
       }
      }
    }
    
   const setA = new Set([...args]); 
   const setC = new Set(c);  
   const _difference = new Set(setA);
    for (const elem of setC) {
      if (_difference.has(elem)) {
        _difference.delete(elem);
      } else {
        _difference.add(elem);
      }
    }
    let arr = Array.from(_difference);
    return arr;
  };
  

// Do not edit below this line
module.exports = removeFromArray;
