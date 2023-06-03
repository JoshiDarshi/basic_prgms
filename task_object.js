let myStr = [3,1,2,1,3,2,3,5];
let counts = {};

for(let i=0;i<myStr.length;i++) 
    {
counts[myStr[i]] = counts[myStr[i]] ? counts[myStr[i]] + 1 : 1;
};

console.log(counts);
