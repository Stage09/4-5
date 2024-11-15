// ________________________________________________________1-rasm________________________________________________________________

// -----------------------------------------------------||1-masala||---------------------------------------------

// const arr = [
//     { id: 1, name: "Ismoil", age: 20, hobby: "Football" },
//     { id: 2, name: "Samir", age: 20, hobby: "Volleyball" },
//     { id: 3, name: "Ibrohim", age: 20, hobby: "Volleyball" },
//     { id: 4, name: "Asad", age: 22, hobby: "Football" }
// ]
// function hers(arr) {
//     const result = [];
//     for (let i = 0; i < arr.length; i++) {
//         for (let j = i + 1; j < arr.length; j++){
//             if (arr[i].age === arr[j].age && arr[i].hobby === arr[j].hobby){
//                 result.push(arr[i], arr[j]);
//             }
//         }
//     }
//     console.log(result)
// }
// hers(arr)


// -----------------------------------------------------||2-masala||---------------------------------------------

// const arr = [3, 4, 3, 2, 3, 4, 5, 6, 3, 5, 6, 7, 8, 9, 5, 4, 3]

// function find(arr) {
//     const result = []
//     for (let i = 0; i < arr.length; i++){
//         let bor = true;
//         for (let j = 0; j < arr.length; j++){
//             if (i !== j && arr[i] === arr[j]){
//                 bor = false;
//             }
//         }
//         if (bor) {
//             result.push(arr[i])
//         }
//     }
//     console.log(result)
// }
// find(arr)

// -----------------------------------------------------||3-masala||---------------------------------------------

// const list = [22, 112, 3, 4, 222, 123, 43]

// function addMax(arr){
//     let max = arr[0];
//     for (let i = 1; i < arr.length; i++){
//         if (arr[i] > max){
//             max = arr[i]
//         }
//     }
//     arr.unshift(max)  
//     return(arr)
// }
// console.log(addMax(list))

// -----------------------------------------------------||4-masala||---------------------------------------------

// const size = practick(prompt("Ismlar sonini kiritshingiz lozim! "))

// function practick(size){
//     const names = [];
//     for (let i = 0; i < size; i++){
//         const name = prompt("Ism kiriting! : ")
//         names.push(name);
//     }
//     const lastName = prompt("Yana bir marta ism kiriting:")
//     if (names.includes(lastName)){
//         console.log("bor")
//     } else {
//         names.push(lastName)
//         console.log(names)
//     }
// }
// practick(size)


// -----------------------------------------------------||5-masala||---------------------------------------------

// let promptNum = prompt("Son kiritshingiz lozim! :  ") 
// function collectAndReverse(num) {
//     const result = [];
//     for (let i = 0; i <= num; i++){
//         result.push(i)
//     }
//     return result.reverse();
// }

// console.log(collectAndReverse(promptNum))


// ________________________________________________________2-rasm________________________________________________________________


// -----------------------------------------------------||1-masala||---------------------------------------------

// let name = {
//     name: "Ibrohim", age: 23, job: "Doctor", interest: "game", hobby: "game", number: "+99895552277", username: "Only" }
// for (let key in name) {
//     console.log(`${key} - ${name[key]}`)
// }

// -----------------------------------------------------||2-masala||---------------------------------------------

// const person1 = { name: "Ibrohim", age: 23 }

// const person2 = { hobby: "Football", interest: "Game" }
// const persons = Object.assign({}, person1, person2)
// console.log(persons)

// -----------------------------------------------------||3-masala||---------------------------------------------

// let arr = [1, 2, 3 , 5, 6]
// function add(list){
//     if (list.length > 0){
//         list[list.length - 1] += 1
//     }
//     return list
// }
// console.log(add(arr))

// -----------------------------------------------------||4-masala||---------------------------------------------

// let arr = [2, 2, 3]
// function calc(list) {
//     let sum = 0;
//     for (let i = 0; i < list.length; i++){
//         sum += list[i];
//     }
//     if (list[0] % 2 === 0){
//         list.unshift(sum)
//     } else {
//         list.push(sum)
//     }
//     return list
// }
// console.log(calc(arr))

// -----------------------------------------------------||5-masala||---------------------------------------------

// let arr = [1, 2, 3, 4]
// function change(list){
//     if (list.length > 1){
//         let temp = list[0];
//         list[0] = list[list.length - 1]
//         list[list.length - 1] = temp
//     }
//     return list
// }

// console.log(change(arr))

// -----------------------------------------------------||6-masala||---------------------------------------------

// function collect(times, arr = []) {
//     if (times === 0) return arr
//     let word = prompt("So'z kiritshingiz lozim! : ")
//     arr.push(word)
//     return collect(times - 1, arr)
// }
// let collectArr = collect(6)
// console.log(collectArr)


// -----------------------------------------------------||7-masala||---------------------------------------------

// function questions(count = 3, list = []){
//     if (count === 0){
//         console.log("list:", list)
//         return
//     }
//     let question = prompt("Savol kiritshingiz lozim! ")
//     let answer = prompt(question);
//     list.push({ savol: question, javob: answer });
//     return questions(count - 1, list)
// }
// questions()


// ________________________________________________________2-rasm________________________________________________________________


// -----------------------------------------------------||1-masala||---------------------------------------------

// function createArray(){
//     const size = parseInt(prompt("Size kiritshingiz lozim! "))
//     const array = []
//     for (let i = 1; i <= size; i++){
//         array.push({ id: i, name: Name{i}})
//     }
//     console.log(array)
// }

// createArray()


// -----------------------------------------------------||2-masala||---------------------------------------------

// let nums = [1, 1, 2, 2, 3, 3, 4, 4, 5, 5,2]

// function remove(arr){
//     console.log([...new Set(arr)])
// }

// remove(nums)


// -----------------------------------------------------||3-masala||---------------------------------------------

// function Index(){
//     const arr = [88, 75, 342, 21, 45, 67]

//     const num = prompt("Son kiriting")-0
//     const index = arr.indexOf(num);   
//     if (index !== -1) {
//         console.log(`{num} sonining indexsi: {index}`)
//     } else {
//         console.log(`{num} mavjud emas`)
//     }
// }
// Index()

// -----------------------------------------------------||4-masala||---------------------------------------------

// function remove(){
//     let arr = [88, 75, 342, 21, 45, 67];
//     const num = prompt("Son kiritshingiz lozim! : ")-0
//     arr = arr.filter(item => item !== num);    
//     console.log(arr)
// }
// remove()

// -----------------------------------------------------||5-masala||---------------------------------------------

// function kolice() {
//     const arr = [10, 2, 3, 4, 5]

//     let maxSum = 0
//     for (let i = 0; i < arr.length; i++ {
//         for (let j = i + 1; j < arr.length; j++){
//             const sum = arr[i] + arr[j];
//             if (sum > maxSum){
//                 maxSum = sum;
//             }
//         }
//     }
//     console.log("Eng katta yig'indi :", maxSum)
// }
// kolice()
