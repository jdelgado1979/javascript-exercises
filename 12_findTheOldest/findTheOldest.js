const findTheOldest = function(objectArray) {
  
    return objectArray.reduce((previousValue, currentValue) => {
     
    const age1 = (currentValue.yearOfDeath ?? 2022) - currentValue.yearOfBirth;
    const age2 = (previousValue.yearOfDeath ?? 2022) - previousValue.yearOfBirth;
    
   if (age1  > age2) {
    return currentValue
   }
   return previousValue;
 })
 };

// Do not edit below this line
module.exports = findTheOldest;
