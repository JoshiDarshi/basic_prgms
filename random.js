function findCommonElement(a,b){
    const a3=[]
    for(let i=0;i<a1.length;i++){
        for(let j=0;i<a2.length;j++){
            if(a1[i]==a2[i]){
             a3.push(a1[i])
            }
        }
    }
return a3
}

const a1 = [1,2,3,4,5]
const a2 = [3,4,5,6,7]

console.log(findCommonElement(a1,a2));