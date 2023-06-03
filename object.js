let x = {
    name: "Rahul",
    class: 9,
    greet: function () {
        return this.name
    },
    items: [1, 3, 4, 5, 6],
    obj: {
        clg: "jec",
        rollNo: "1234"
    }
}

// console.log("name --> ",x.name)
// console.log("class --> ",x.class)
// console.log("function --> ",x.greet())
// console.log("array --> ",x.items)
// console.log("obj --> ",x.obj)


x.name = "vishal"
x.run = function(){
    return this.class
}
// console.log(x.name)
// console.log(x.run())

delete x.obj.rollNo // to delete any property

console.log(x)




function Student (name , age){
    this.name = name;
    this.age = age;
}
let stu1 = new Student("rahul" , 30)
let stu2 = new Student("vishAL" , 30)
let stu3 = new Student("ram" , 30)
let stu4 = new Student("dev" , 30)


Student.prototype.clg = "Jec"


console.log("object---> ", stu1)
console.log("object---> ", stu2)
console.log("object---> ", stu3)
console.log("object---> ", stu1)

// delete Student.prototype.clg

console.log(stu1.clg)




