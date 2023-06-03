// syntax of object
const student= {
name : "Darshi",
mobile_no : 1234456789,
course : "MCA",
address : "ramghat ujjain"
}
console.log(student)
// objects are mutuable
const person = {
    name :"abc"
}
console.log(person)
const x = person
x.name="xyz"
console.log(x)
console.log(person);
// console.log(this.address)

//accessing array properties
const a = {
    id : 101,
    fname : "john",
    lname : "mack",
    address : "mystic_falls"
}

console.log(a.fname)
console.log(a.id) // using dot operator with key we can use access the value
console.log(a["lname"]); //using square brackets


//object declaration
let obj = {
    name : "Stephan",
    class : "MCA",
    greet : function(){
        return this.name
    },
    items : [12,2,123,45,56,657,89,87],
    obj :{
     clg : "MIT",
     rollno : "0712CA201012"
    }
}
console.log(obj);
//to update any object value
obj.name = "Daemon"
console.log(obj);
// to delete any object value
delete obj.obj.clg
console.log(obj);
//constructor function
function data(name , rollNo , Class){
this.name = name
this.rollNo = rollNo
this.class = Class

}
let d1 = new data("kathrine",121,"bca")
let d2 = new data("elena",121,"mca")
let d3 = new data("tale",121,"msc")
let d4 = new data("bony",121,"btech")
console.log(d1);
console.log(d2);
console.log(d3);
console.log(d4);

data.prototype.clg = "MIT"
console.log(data);