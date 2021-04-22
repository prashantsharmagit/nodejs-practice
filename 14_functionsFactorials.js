function factorial(n){
    if (n==0) {
        return 1;
    } else {
        return(n*factorial(n-1));
    }
}

console.log("The factorial of 3 is : " + factorial(5));