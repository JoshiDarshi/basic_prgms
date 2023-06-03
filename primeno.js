let flag = 0
 let m =0
let n = 4;
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
