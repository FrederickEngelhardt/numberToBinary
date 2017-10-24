var num1 = '100'
var num2 = '110'
var num3 = '1'
var num4 = '16'
function binaryAdd(num){
  let array = []
  var step = 0
  while (i=true){
    if (Math.pow(2,step) > num) {
      i = false
      break
    }
    else {
      let num = Math.pow(2,step)
      array.push(num)
      step += 1
      // console.log(step)
    }
  }
  // console.log(array)
  var count = 0
  var binary = ''
  for (i = (array.length-1); i > -1; i--) {
    // console.log('loop reached')
    if (num === count){
      // console.log(binary)
      return binary
    }
    if (num < (count + array[i])){
      binary += '0'
    }
    else {
      count += array[i]
      binary += '1'
    }
  }
  console.log(binary)
  return binary
}
binaryAdd(num1)
binaryAdd(num2)
binaryAdd(num3)
binaryAdd(num4)

// function binaryAdd(a,b){
//   let sum = parseInt(a,2) + parseInt(b,2)
//   console.log(sum.toString(2))
// }
// binaryAdd(num1,num2)

// let binNum = "10101010";
// let decNum = 43
// // // how to access the kth digit
// // console.log(binNum.split("")[binNum.length - 2])
//
// // how can you convert 0 to 1 or 1 to 0 //parseInt -wat
// let num = 1;
// console.log(parseInt(+!num))
//
// // How do you convert from a binary string to a decimal number
// console.log(parseInt(binNum, 2));
