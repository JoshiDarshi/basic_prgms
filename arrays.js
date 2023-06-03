//basic funda of array
let marks = [12,32,34,78,12,false,"absent"]
console.log(marks[0])
console.log(marks[1])
console.log(marks[2])
console.log(marks[3])
console.log(marks[4])
console.log(marks[5])
console.log(marks[6])
console.log(marks[7])
//length property
console.log("length of arrays",marks.length)
//we can change the values
marks[0]=96
console.log(marks)
//type of array is object
console.log(typeof(marks))

//access loop using for loop
for(let i=0;i<marks.length;i++){
    console.log(marks[i])
}
for(let x in marks){
    console.log(marks);
}
for (let y of marks){
    console.log(marks);
}