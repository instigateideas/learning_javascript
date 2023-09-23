// Assignment -1
console.log("Write a JavaScript function that takes a number as a parameter and prints whether it's positive, negative, or zero.")
main= (n)=> {
    if (n>0){
        console.log(n, " is Positive");
    }
    else if (n<0){ 
        console.log(n, " is Negative");
    } else {
            console.log(n, " is Zero");
    }
}
main(-1)
main(0)
main(1)

// Assignment 2:
// Write a JavaScript function that takes a positive integer as a parameter and calculates its factorial using a for loop. The factorial of a number N is the product of all positive integers less than or equal to N.
factorial = (n)=> {
    ans = 1
    for (let i=1; i<=n; i++) {
        ans = ans * i;
    }
    console.log("Factorial of ", n, " is ", ans)
}

factorial(10);

// Assignment 3:
// Write a JavaScript function that takes two numbers as parameters and returns the larger one.
largerone = (a, b) => {
    if (a> b) {
        console.log("A is larger");
    } else if (b > a) {
        console.log("B is larger");
    } else {
        console.log("A & B are Equal");
    }
}

largerone(9, 10);

// Assignment - 4
// Find a Palindrome
palindrome = (s) => {
    len_s = s.length;
    let v="";
    for (let i=len_s-1; i>=0; i--) {
        v+= s[i];
    }
    if (v==s){
        console.log("The given text is a Palindrome");
    }
    else {
        console.log("Not a Palindrome")
    }
}

palindrome('ab')
palindrome('mom')

// Assignment 5:
// Write a JavaScript function that takes a positive integer as a parameter and prints all the prime numbers less than or equal to that integer. A prime number is a natural number greater than 1 that is not a product of two smaller natural numbers.


// Assignment 6:
// Write a JavaScript function that simulates a simple calculator. The function should take two numbers and an operator (+, -, *, or /) as parameters and perform the corresponding operation.
calculator = (a,b, op) => {
    if (op == '+') {
        console.log("Adding the numbers");
        d = a + b;
        
    }
    else if (op == '-') {
        console.log("Subracting the numbers");
        d = a - b;
        
    }
    else if (op == '*') {
        console.log("Multiplying the numbers");
        d = a * b;
        
    }
    else if (op == '/') {
        console.log("Dividing the numbers");
        d = a / b;
        
    }
    console.log("Result: ", d)
}

calculator(8, 9, "+")
calculator(8, 9, "-")
calculator(8, 9, "*")
calculator(8, 9, "/")