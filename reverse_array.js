function reverseArray(){
for(let i=a1.length-1;i>=0;i--){
    a2.push(a1[i])
}
return a2
}
const a1 = [21,12,34,22,78]
const a2 = []
console.log("Original Array :-",a1)
console.log("Reverse Array :-",reverseArray(a2))