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

// ---------------------------------------------

// const loop = ["a", "b", "c", "d", "e", "f"]

// for(let i=0; i<loop.length; i++){
//     // console.log('length is ' + i)
//     console.log("index" +loop[i])
// }

// loop.forEach((element,index)=>{
//     console.log(`on the index ${index} the element is ${element}`)
//   })

// function fn(element,index,array){
//     console.log(this)
// }

// const thisarg = {
//     name : 'Danish',
//     element : loop,
//     array : loop
// }
// loop.forEach(fn,thisarg)

// ----------------------------------------

// const num = [1,2,3,4,5,6,7,8,9,10]

// const sqr = []

// for(let i=0; i<num.length; i++){
//     sqr[i] = num[i] * num[i]
// }
// console.log(sqr)
// console.log("Danish")

// ----------------------------------------

// const arr = [1,2,3,4,5,6,7,8,9,10]

// const obj = {
//     name : 'Danish'
// }

// const newArr = arr.filter(function(value){
//     console.log(this);
//     return   value > 5
// },obj)

// console.log(newArr)

// ----------------------------------------

// const finding = [
//   { name: "Danish", age: 17, gender: "Male" },
//   { name: "fayyaz" , age: 18, gender: "Male"},
//   {name : "nabeel", age: 19, gender: "Male"},
//   {name : "vajeela", age: 17, gender: "Female"}
// ];

// const fnd = finding.find((value)=>{
//     // console.log(this)
//     return value.gender === "Female"
// })
// console.log(fnd)
// // console.log(finding)

// const fnd1 = finding.findIndex((value)=>{
//     // console.log(this)
//     return value.gender === "Female"
// })
// console.log(fnd1)

// const att = [1,2,3,4,5]
// const att2 = att.at(2)
// console.log(att2)

// const conc = [1,2,3,4,5];
// const conc2 = [6,7,8,9,10]
// console.log(conc.concat(conc2));

// const cwi = [1,2,3,4,5];
// const cwi2 =  cwi.copyWithin(0,2,4)
// console.log(cwi2)

// const array = [1,2,3,4,5];
// const items = array.entries();
// console.log(items.next().value);

// --------------------------------
// const vajla = [1,2,3,4,5];

// console.log(vajla.every(ele => ele < 10))

// const fillM = [1,2,3,4,5];

// console.log(fillM.fill(0,1,3))
// --------------------------------
// const fltr = [1,2,3,4,5,7,6];

// console.log(fltr.filter(ele => ele % 2 !== 0))

// --------------------------------

// const fnd = [1,2,3,4,5];

// console.log(fnd.find(ele => ele > 3))

// ---------------------------------

// const fndI = [1,2,3,4,5];

// console.log(fndI.findIndex(ele => ele > 3))

// --------------------------------

// const fndL = [1,2,3,4,5];

// console.log(fndL.findLast(ele => ele < 3))

// --------------------------------

// const fndLI = [1,2,3,4,5];

// console.log(fndLI.findLastIndex(ele => ele < 4))

// --------------------------------

// const flt = [1,2,[3],[4,[[[[[[[3]]]]]]], 5]];

// console.log(flt.flat())

// --------------------------------

// const forE = [1,2,3,4,5];

// forE.forEach(ele => console.log(ele))

// ----------------------------------

// const frm = Array.from("Danish");
// console.log(frm);

// ----------------------------------

// const inc = [1,2,3,4,5];
// console.log(inc.includes(3))

// ----------------------------------

// const indeof = [1,2,3,4,5,"Danish"];
// console.log(indeof.indexOf("Danish"));

// ----------------------------------

// const isA = { name: "English", is: [1, 2, 3]};
// console.log(Array.isArray(isA));

// ----------------------------------

// const jon = [1,2,3,4,5];
// console.log(jon.join("-----"))

// ----------------------------------

// const kes = [1,2,3,4,5];
// const kss = kes.keys()
// for(let keyss of kss){
//     console.log(keyss);
// }

// ----------------------------------

// const lIO = ["Danish","fayyaz","Danish","Hamza"];

// console.log(lIO.lastIndexOf("Danish"));

// ----------------------------------

// const off = Array.of("Danish-chouhan",12,'Fayyaz');
// console.log(off);
// ----------------------------------

// const array1 = [0, 1,2, 3, 4, 5];

// const result = array1.reduceRight((accumulator, currentValue) => accumulator + currentValue);

// console.log(result);

// -----------------------------------
// const array2 = [1,2,3,4,5];

// console.log(array2.slice(2,3))

// -----------------------------------
// const array2 = [1,2,3,4,5];

// console.log(array2.slice(2,3))

// -----------------------------------

// const array2 = [1,2,7,6,5];

// console.log(array2.sort())

// -----------------------------------

