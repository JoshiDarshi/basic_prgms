// Arithmetic operators
let a = 2
let b = 8
console.log("a+b =",a+b)
console.log("a-b =",a-b)
console.log("a*b =",a*b)
console.log("a/b =",a/b)
console.log("a**b =",a**b)
//pre post increment 
console.log("a++ =",a++) // print 2 because increment is post
console.log(a) // print 3 because value increase by 1
console.log("++a =",++a) //  print 4 because 3 is pre increment by 1
console.log(a) //4
//pre post decrement
console.log("a-- =",a--) //print 4 because value increase by 1 after print 
console.log(a) // 3 print value decrease by 1
console.log("--a =",--a) // print 2 because first value will decrease by 1 then print value
console.log(a)//2

//Assignment operators
let x = 10
x = x+5
console.log(x)
x+=6 //assignment operator
console.log(x)
x-=6
console.log(x)
x = 2
x*=2
console.log(x)
x = 6
x/=3
console.log(x)
x = 9
x%=4
console.log(x)


//Comparison Operator
let comp1 = 20
let comp2 = "20"
console.log(comp1 != comp2) //not equals
console.log(comp1==comp2) // equals compare on basis of value
comp1 = 10
comp2 = "12"
console.log(comp1 !== comp2) //true
console.log(comp1 === comp2) // false it compare on values as well as it's datatype
comp1 = 12
comp2 = 21
console.log(comp1<comp2)//true
console.log(comp1>comp2)//false

//logical operators
p = 10
q = 12
console.log(p<12 && q>9)//return true as both condition are satisfied
console.log(p<12 || q<9) // if one condition is true it will return true

//typeof operator 
let a2 = 20
console.log(typeof(a2))