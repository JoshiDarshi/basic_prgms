function removeDuplicate(value){
          
        let n = []
        for(let i=0;i<value.length;i++){
            if(n.indexOf(value[i])==-1){
            n.push(value[i])
            }
        }
        return n
        }        

const or_arr = [12,12,32,23,32,65]
console.log(removeDuplicate(or_arr));