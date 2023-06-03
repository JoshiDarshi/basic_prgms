
//to string method
let num = [1,2,33,31,12]
let b = num.toString()
console.log(typeof(b))

//join method
let c = num.join("*")
console.log(c)
//pop method
let d = num.pop()
console.log(num,d)
//push method
let e  = num.push(11)
console.log(num,e)
//shift method
let f = num.shift()
console.log(num , f)
//unshift method
let g = num.unshift(11)
console.log(num,g)
// delete operator
delete num[0]
console.log(num,g)

//concat method
let a1 = [1,2,3]
let a2 = [4,5,6]
let a3 = [7,8,9]
let a4=a1.concat(a2,a3)
console.log(a4)
//sort method
num.sort()
console.log(num)
//slice method
let x = [1,2,3,4]
let y=x.slice(2)
console.log(y)