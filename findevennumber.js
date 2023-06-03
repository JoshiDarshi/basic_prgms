function findevennumber(){
    
    for(let i=0;i<=numbers.length;i++){
        if(i%2!=0){
        e.push(numbers[i])
        }
    }
return e
}

const numbers = [1,2,3,4,5,6,7,8,9,10]
let e = []
console.log(findevennumber(numbers));