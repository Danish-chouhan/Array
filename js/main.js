// forEach

// const number = [1,2,3,4]

// let sum = 0;

// number.forEach((item,ik,arr)=>{
//     let summing = sum += item
//     console.log(`array have a index ${ik} and the num on this index is ${item} and the total sum of array is ${summing} and this is comming from this array ${arr}`)
// }) ;

// ----------------------------

// const latters = ["a", "b", "b", "c", "a"]

// let obj = {};

// latters.forEach((item)=>{
//     if(obj[item]){
//         obj[item]++
//     }else{
//         obj[item] = 1
//     }
// })
// console.log(obj)

// ----------------------------

// Map method

// const map = [1,2,3,4,5,6,7,8,9,10]

// const newMap = map.map((item,index)=>{
//     console.log(item * 2)
// })

// const newMap = map.map((item,index)=>{
//     console.log(item * index)
// })

// -------------------------

// const obj = [
//     {
//         name : "computer",
//         price : 30000,
//         qunt : 6
//     },
//     {
//         name : "leptop",
//         price : 20000,
//         qunt : 5
//     },
//     {
//         name : "mobile",
//         price : 15000,
//         qunt : 10
//     }
// ]

// const newMap = obj.map(item=> ({
//     productName : item.name,
//    totalPrice : (item.price * item.qunt)
// }))

// console.log(newMap)

// ---------------------------

// const str = ['1','2','3','4','5','6','7','8','9']

// const newStr = str.map(Number)

// console.log(newStr)

// -------------------------------------------------------

// fillter method

// const arring = [1,2,3,4,5,6,7,8,9,10]

// const filtering = arring.filter((value)=>{
//     return value % 2 === 0
// })

// console.log(filtering)


// -------------------------------------------------------

// const obj = [
//     {
//         name : 'Danish-chouhan',
//         age  : 17
//     },
//     {
//         name : 'fayyaz',
//         age  : 18
//     },
//     {
//         name : 'ayaz',
//         age  : 12
//     }
// ];

// const newFilters = obj.filter((value)=>{
//     return value.age >= 15
// })
// console.log(newFilters)


// -------------------------------------------------------

// const num = [1,2,2,3,4,4,5,6,7,8,9,10];
// const nums = num.filter((value,index,arr)=>{
//     return arr.indexOf(value) === index
// })
// console.log(nums);