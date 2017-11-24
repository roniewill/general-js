/*
    JavaScript Object Notation (JSON) is a standard text-based format for representing structured data based on JavaScript object syntax. 
    It is commonly used for transmitting data in web applications (e.g., sending some data from the server to the client, so it can be displayed on a web page, or vice versa). 
*/

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

// instantiating an object from a class
var newPerson = new Person('William', 30, 1.78, 120, 'black');


/*
    Now we create a literal object
*/

var person = {name: 'William', age: 30, height: 1.78, weight: 120, color: 'black'};

document.write(person.name);
document.write('<br>');

var otherPerson = {
    name: 'Roberto Carlos', 
    age: 76, 
    height: 1.75,
    friends: {
        friend1: 'Erasmo carlos',
        friend2: 'Maria Betanha',
        friend3: 'Timaia'
    }
};

document.write('Name: ' + otherPerson.name);
document.write('<br>');
document.write('Your friend: ' + otherPerson.friends.friend2);


/*
    now finally the JSON object
*/

var objtJson = '{"name": "William","age": 30,"color": "black"}';

var object = JSON.parse(objtJson);

document.write(object.name);

 // you can test this code in: https://jsfiddle.net/