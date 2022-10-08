const palindromes = function (str) {

    str = str.replace(/_/g, " ")
    str = str.trim().split(/\W||\s/gi)
    str = str.join('').toLowerCase()
    
    let x = str.length
    let a =[]
    let b=[]
    console.log(str)
    if (x%2==0){
      for(let i=(x/2)-1;i>=0;i--){
       a.push(str[i])
      }
       for(let i=x/2;i<x;i++){
       b.push(str[i])
      }
      }else {
        for(let i=((x-1)/2)-1;i>=0;i--){
       a.push(str[i])
      }
      for(let i=((x-1)/2)+1;i<x;i++){
       b.push(str[i])
      }
     }
     console.log(a)
     console.log(b)
    let c=[]
    if (a.length == b.length){
    for(let i=0;i<a.length;i++){
      if(a[i]==b[i]){
        c.push(a[i])
      }
    }
    } else {
      return false
    }
    console.log(c)
    if (c.length==a.length){
      return true
    } return false
};

// Do not edit below this line
module.exports = palindromes;
