function is_Palindrome(str){
    let s1 = ""
    let len = str.length;
    for(let i=str.length-1;i>=0;i--){
        s1 +=str[i] 
        if(str==s1){
         return true
        }
    }
    
}

console.log(is_Palindrome("level"));
console.log(is_Palindrome('Racecar'));
console.log(is_Palindrome('hello'));
console.log(is_Palindrome('A man a plan'));
