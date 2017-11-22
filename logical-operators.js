/*
    Logical operators are typically used with Boolean (logical) values. When they are, they return a Boolean value. 
    However, the && and || operators actually return the value of one of the specified operands, so if these operators are used with non-Boolean values, they may return a non-Boolean value.

    1 - Logical AND (&&)

    The following code shows examples of the && (logical AND) operator.

    a1 = true  && true       // t && t returns true
    a2 = true  && false      // t && f returns false
    a3 = false && true       // f && t returns false
    a4 = false && (3 == 4)   // f && f returns false
    a5 = 'Cat' && 'Dog'      // t && t returns "Dog"
    a6 = false && 'Cat'      // f && t returns false
    a7 = 'Cat' && false      // t && f returns false
    a8 = ''    && false      // f && f returns ""
    a9 = false && ''         // f && f returns false


    2 - Logical OR (||)

    The following code shows examples of the || (logical OR) operator.

    o1 = true  || true       // t || t returns true
    o2 = false || true       // f || t returns true
    o3 = true  || false      // t || f returns true
    o4 = false || (3 == 4)   // f || f returns false
    o5 = 'Cat' || 'Dog'      // t || t returns "Cat"
    o6 = false || 'Cat'      // f || t returns "Cat"
    o7 = 'Cat' || false      // t || f returns "Cat"
    o8 = ''    || false      // f || f returns false
    o9 = false || ''         // f || f returns ""


    3 - Logical NOT (!)

    The following code shows examples of the ! (logical NOT) operator.

    n1 = !true               // !t returns false
    n2 = !false              // !f returns true
    n3 = !'Cat'              // !t returns false
*/

