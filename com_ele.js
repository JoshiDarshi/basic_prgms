function findCommonElement(a,b){
    
    for(let i=0;i<a.length;i++){
        for(let j=0;j<b.length;j++){
            if(a[i]===b[j]){
                c.push(a[i])
            }
        }
    }
return c
}

const a = [1,2,3,4,5]
const b = [3,4,5,6,7]
const c = []
console.log(findCommonElement(a,b));