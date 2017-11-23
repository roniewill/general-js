/*
    With most of the gory details of OOJS now explained, this article shows how to create "child" object classes (constructors) that inherit features from their "parent" classes. 
    In addition, we present some advice on when and where you might use OOJS.
*/

// Let's code

class Animal{

    constructor(color, weight){
        this.color = color;
        this.weight = weight;
    }

    toSleep(){
        document.write('Sleeping');
    }
}

class Dog extends Animal{
    bark(){
        document.write('barking');
    }
}

var dog = new Dog();

dog.toSleep();
document.write('<br>');
dog.bark();