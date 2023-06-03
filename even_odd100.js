let n1 = 100
let sum =0 
for(let i = 1;i<n1;i++){
    if(i%2==0){
        console.log("even number:-"+i)
        sum = sum+i
    }
    
}
console.log("Sum of even number till 100:-",sum)
let sumo = 0
for(let i = 1;i<1000;i++){
    if(i%2!=0){
        console.log("odd number"+i)
        sumo = sumo+i
    }
    
}
console.log("sum of odd number till 100:-",sumo);