function getUniquevalue(value){
let n = []
for(let i=0;i<value.length;i++){
    if(n.indexOf(value[i])==-1){
    n.push(value[i])
    }
}
return n
}
const number = [1,2,3,4,2,5,6,3,4]
console.log(getUniquevalue(number));

//or by using set method
function unique(a2){
const a = new Set(n1)
return a
}
const n1 = [1,22,22,12,12,11,5]
console.log(unique(n1));