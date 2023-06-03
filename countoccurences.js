function countOccurences(arr , n){

let count=0
for(let i of arr){
if(i==n){
    count++
}
}
return count
}
const arr = [12,32,12,33,1,22,12,21]
console.log(countOccurences(arr,12))