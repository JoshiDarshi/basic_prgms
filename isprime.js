function isprime(p){
    let flag = 0,m =0,n = p
    m = n/2
 if(n==0||n==1){
        console.log("not prime")
 }
 else{
     for(let i = 2;i<=m;i++)
     {
        if(n%i==0){
             console.log("not prime")
             
            flag = 1;
            break
        }
     }
    if(flag==0){
        console.log("prime number")
     }
 }
return n
}
console.log(isprime(7));
console.log(isprime(10));
console.log(isprime(13));
console.log(isprime(1));

