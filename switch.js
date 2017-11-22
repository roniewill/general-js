/*
    The switch statement evaluates an expression, matching the expression's value to a case clause, and executes statements associated with that case.

    Syntax:

    switch (expression) {
      case value1:
        //Statements executed when the
        //result of expression matches value1
        [break;]
      case value2:
        //Statements executed when the
        //result of expression matches value2
        [break;]
      ...
      case valueN:
        //Statements executed when the
        //result of expression matches valueN
        [break;]
      [default:
        //Statements executed when none of
        //the values match the value of the expression
        [break;]]
    }
*/

// Example

var value = 2;

switch (value) {
    case 1:
        document.write('Your value is: '+value);
        break;
    
    case 2:
        document.write('Your value is: '+value);
        break;

    default:
        document.write('You not have a value');
        break;
}

// you can test this code in: https://jsfiddle.net/