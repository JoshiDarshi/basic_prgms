function large(arr){
    let index = 0
    for(let i in array){
    
        if(array[index].length < array[i].length){
            index = i
        }
    
    }
return array[index]
}
let array = [ "elena" , "stephan" , "daemon" , "kathrine"]
console.log(large(array));

