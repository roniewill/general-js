/*
    A multidimensional array is an array containing one or more arrays.

    I make two list for exemplo:
    
    * Games:
        - God of War
        - Battle Field
        - GTA V
        - Fifa 2016
        - Need for Speed no Limits

    * Consoles:
        - Xbox One
        - PS4
        - Nintendo 64
        - Ps Vita
        - Nintendo Ui
*/

var nerdStore = Array();

nerdStore['games'] = Array();

nerdStore['games'][1] = 'God of War';
nerdStore['games'][2] = 'Battle Field';
nerdStore['games'][3] = 'GTA V';
nerdStore['games'][4] = 'Fifa 2016';
nerdStore['games'][5] = 'Need for Speed no Limits';

document.write(nerdStore['games'][2]);

// or we can assign as follows
nerdStore['consoles'] = ['Xbox One', 'PS4', 'Nintendo 64', 'Ps Vita', 'Nintendo Ui'];

document.write(nerdStore['consoles'][0]);

// or like this
nerdStore['other_consoles'] = Array('PC Gamer', 'Nintendo 3DS', 'Super nintendo', 'Mega Drive', 'Game Cubo');

document.write(nerdStore['other_consoles'][3]);

// you can test this code in: https://jsfiddle.net/