/*
    The if statement executes a statement if a specified condition is truthy. 
    If the condition is falsy, another statement can be executed.

    this is the syntax:

        if(condition){
            your code
        }else{
            your code
        }
*/

// example

var age = prompt('type it your age');

if(age >= 21){
    document.write('Adult');
}else{
    document.write('you not adult');
}

// you can test this code in: https://jsfiddle.net/