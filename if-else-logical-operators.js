/*
     Let's work with conditionals and logical operators

    &&
    ||
    !
*/
var nota = prompt("Insert student's nota");
var faults = prompt("Insert faults");
var media = 7;
var recoveryMedia = 5;
var maxFaults = 15;

// if(nota >= media || faults <= maxFaults)
// if(!(nota >= media) || faults <= maxFaults)
if(nota >= media && faults <= maxFaults){
    document.write('Approved');
}else if (nota == recoveryMedia && faults <= maxFaults){
    document.write('Recovery');
} else {
    document.write('Disapproved');
}