/*
    Variáveis: são endereços que apontam para valores que estão armazenados
    temporáriamente em memória

    English version:
    Declarations:
    There are three kinds of declarations in JavaScript.
        var
            * Declares a variable, optionally initializing it to a value.
        let
            * Declares a block-scoped, local variable, optionally initializing it to a value.
        const
            * Declares a block-scoped, read-only named constant.
    
    Variables:
    You use variables as symbolic names for values in your application. The names of variables, called identifiers, conform to certain rules.
    A JavaScript identifier must start with a letter, underscore (_), or dollar sign ($); subsequent characters can also be digits (0-9). 
    Because JavaScript is case sensitive, letters include the characters "A" through "Z" (uppercase) and the characters "a" through "z" (lowercase).
    You can use most of ISO 8859-1 or Unicode letters such as å and ü in identifiers (for more details see this blog post). You can also use the Unicode escape sequences as characters in identifiers.
    Some examples of legal names are Number_hits, temp99, $credit, and _name.

    Declaring variables:
    You can declare a variable in three ways:
    1 - With the keyword var. For example, var x = 42. This syntax can be used to declare both local and global variables.
    2 - By simply assigning it a value. For example, x = 42. This always declares a global variable, if it is declared outside of any function. It generates a strict JavaScript warning. You shouldn't use this variant.
    3 - With the keyword let. For example, let y = 13. This syntax can be used to declare a block-scope local variable. See Variable scope below.
*/

/* 
    Tipos de variáveis:
    Int: armazena valores inteiros como: -9 ou 9
    Float: armazena valores fracionados como: -7.5 ou 4.5
    String: armazena textos
    Boolean: retorna um estado, verdadeiro(true) ou falso(false)

    Regras para declaração de variáveis:
    * Não podem iniciar  com números
    * Não podem utilizar caracteres especiais
    * Não podem utilizar palavras reservadas do Javascript

    Javascript é Case-sensitive:
    curso é diferente Curso ou mesmo de CURSO

    Comando var para declaração de variáveis:

    Regras para declaração de variáveis:
    Jeito certo: 
        var _123MyVar;
        var MyVar;
        var myvar;
        var MYVAR;
    
    Errado:
        var 123var;
        var número;
*/

// MÃO NA MASSA!

var _inteiro = 8;
var _valorFracionado = 4.5;
var _texto = 'Alguma coisa';
var _verdadeiroOuFalco = true; // posso atribuir tanto true como false

// Obs.: o tipo de variável é definido na atribuição do valor