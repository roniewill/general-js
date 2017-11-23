/*
    A function is a code snippet that can be called by other code or by itself, or a variable that refers to the function. 
    When a function is called, arguments are passed to the function as input, and the function can optionally return an output. A function in JavaScript is also an object.
*/


// let's the code

function calcGroundArea(_width, _length){
    var area = _width * _length;
    return area; 
}

var area = calcGroundArea(25, 30); 
document.write('Ground area is: ' + area + '(m²)');