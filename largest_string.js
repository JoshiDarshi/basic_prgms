function findlongestword(words){
    let index = 0
for(let i in words){

    if(words[index].length < words[i].length){
        index = i
    }

}
return index
}

const words = ["elena","stephan","daemonaseee"]
console.log(findlongestword(words))
