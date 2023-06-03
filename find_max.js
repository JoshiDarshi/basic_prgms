function findMax(arr){
let max = 0
for(let i=0;i<arr.length;i++){
    if (arr[i]>max){
        max=arr[i]
    }
}
return max
}
const arr = [12,21,23,45,6,16]
console.log(findMax(arr))