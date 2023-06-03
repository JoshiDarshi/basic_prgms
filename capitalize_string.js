function capitalizewords(str){
 
 for(let i=0;i<word1.length;i++){
    word1[i] = String(word1[i]).charAt(0).toUpperCase()+String(word1[i]).slice(1)

}   
return word1
}
const word1 = ["apple","banana","orange"]
const w2 = []

console.log(capitalizewords(word1))