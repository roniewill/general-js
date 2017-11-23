/*
    Working with loop

    while
    do while
    for
*/

// Loop: While
var x = 1;
while (x <= 10) {
    document.write( x + '<br>' );
    x++;
}
document.write( '--End--' );

// Loop: do While
var x = 1;
do  {
    document.write( x + '<br>' );
    x++;
}while(x <= 10);
document.write( '--End--' );

//Loop: for
for(var x = 1; x <=10; x++){
    document.write( x + '<br>');
}
document.write( '--End--' );

// you can test this code in: https://jsfiddle.net/