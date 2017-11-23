/*
    In JavaScript, most things are objects, from core JavaScript features like strings and arrays to the browser APIs built on top of JavaScript. 
    You can even create your own objects to encapsulate related functions and variables into efficient packages, and act as handy data containers. 
*/

// Let's code

// declaring(instance) a basic class
class Home{ // class name 

    // method or action
    openDoor(){
        document.write('Open the door!');
    }

}

// creating a new object
 var home = new Home();

 // call method
 home.openDoor();


 // declaring(instance) a basic class with attributes using constructor
 class Person{

    constructor(name, age, height, weight, color){
        this.name = name;
        this.age = age;
        this.height = height;
        this.weight = weight;
        this.color = color;
    }

    getPersonInfo(){
        document.write(
            'Name: ' + this.name +
            ', Age: ' + this.age +
            ', Height: ' + this.height +
            ', Weight: ' + this.weight +
            ', Color: ' + this.color
        );
    }

    walk(type){ // we can use parameters in the class methods
        document.write('Walk ' + type);
    }

    run(type){
        document.write('Run ' + type);
    }

 }

 var newPerson = new Person('William', 30, 1.78, 115, 'Black');
 newPerson.getPersonInfo();
 document.write('<br>');
 newPerson.walk('fast');

 // you can test this code in: https://jsfiddle.net/