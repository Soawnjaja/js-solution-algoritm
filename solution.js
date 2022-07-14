// 1, 1, 2, 3, 5, 8, 13
// f(n) = f(n-1) + f(n-2) - формула поиска по индексу в числах фибаначи
function fibonachi(n) {
  if(n < 0) {
    return 0
  }
  if (n <= 2) {
    return 1
  }
  return fibonachi(n-1) + fibonachi(n-2)
}

console.log(fibonachi(5))

// function getSumArray(arr) {
//   let sum = 0
//   for(let i = 0; i < arr.length; i++) {
//     sum = sum + arr[i]
//   }
//   return  sum
// }

// console.log(getSumArray(arr))

// let arr = [1,3,-5,7,-19,9]

// function getSum(arr) {
//   let sum = 0
//   for(let i = 0; i < arr.length; i++) {
//     if(arr[i] % 3 === 0) {
//     sum += arr[i]
// }
// }
//   return sum
// }
// console.log(getSum(arr))

// function reverseStr(string) {
//   let result = ''
//   for(let i = string.length -1; i >= 0; i--) {
//     result += string[i]
//   }
//   return result
// }

// console.log(reverseStr('Some text'))

// let arr = [4,1,5,11,53]

// function getMinNum(arr){
//   min = arr[0]
//    for(let i =0; i<arr.length; i++) {
//      if(arr[i] < min) {
//        min = arr[i]
//      }
//    }
//   return min
// }
// console.log(getMinNum(arr))
/* функция принимает строку, если строка заканчивается числом , то число увиличвается на 1, если числа нет то добавляется 1*/

// foo -> foo1
// foo1 -> foo2
// function getSome(string) {
//   let result = ''
//   if(string[string.length -1] )
//   return
// }
let arr = [1,4,5,3,8]
let arr1 = [2,4,3,12,5,6]
function sumArr(arr1, arr2) {
  let newArr = arr1
  for(let i = 0; i < arr2.length; i++) {
    if(newArr.includes(arr2[i]) == false)
    newArr.push(arr2[i])
  }
  return newArr.sort((a,b) => a -b)
}

console.log(sumArr(arr,arr1))
