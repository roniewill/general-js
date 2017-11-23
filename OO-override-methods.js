/*
    Working with override methods and attributes
*/

class Animal{

    constructor(color, weight){
        this.color = color;
        this.weight = weight;
    }

    toSleep(){
        document.write('Sleeping');
    }

    run(){
        document.write('Running');
    }
}

class Dog extends Animal{

    constructor(color, weight, breed){
        super(color, weight);
        this.breed = breed;
    }

    getInfo(){
        document.write(
            'Animals information - Color: ' + this.color +
            ', Weight: ' + this.weight +
            ', Breed: ' + this.breed
        );
    }

    toSleep(){
        document.write('Sleeping a lot');
    }

    run(){
        super.run();
        document.write(' fast');
    }
}

var dog = new Dog('Brown', 25, 'Doberman');
dog.toSleep();
document.write('<br>');
dog.run();
document.write('<br>');
dog.getInfo();

// you can test this code in: https://jsfiddle.net/