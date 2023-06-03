function reverse_String(str){
    let s1 = ""
    for(let i=str.length-1;i>=0;i--){
        s1 +=str[i] 
    }
return s1
}
console.log(reverse_String('hello'));
console.log(reverse_String('OpenAI'));
console.log(reverse_String('12345'));