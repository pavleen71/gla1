const readline= require('readline').createInterface({
    input: process.stdin,
    output: process.stdout
});
readline.question("enter a number greater than 0: ", (input)=>{
    const n = parseInt(input);
    var a=1,b=1,c=1,d=1;
    // factorial of a number inputted by user using for loop
    for(let i=1;i<=n;i++)
{
    a=a*i;
    
}
console.log(`using for loop factorial is ${a}`);
 // factorial of a number inputted by user using while loop
let j=1;
while(j<=n){
 b=b*j;
  j++;
}
console.log(`using while loop factorial is ${b}`);
 // factorial of a number inputted by user using function
function fact(k){
 for(let i=1;i<=k;i++)
{
    c=c*i;
}
console.log(`using function factorial is ${c}`);
}

fact(n);
 // factorial of a number inputted by user using recursion
function factorial(c){
    for(let i=1;i<=c;i++){
    if(c === 1){
        return 1;
    }
    else {
    d=c*factorial(c-1);
    }
    }
return d;
}
 var f=factorial(n);
 console.log(`using recursion factorial is ${f}`);
readline.close();
});

