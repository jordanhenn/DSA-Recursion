
const binaryConverter = function(num){
   let binary = ''
   if(num === 0) {
       return num
   }
   else if (num === 1) {
       binary = '1' + binary
       return binary
   }
   else if (num % 2 !== 0) {
       binary = '1' + binary
       const newNum = (num) - (num % 2)
       return binaryConverter(newNum/2)
   }
       binary = '0' + binary
       return binaryConverter(num/2)
}

console.log(binaryConverter(25));