/*
    Arrays são coleções de variáveis, suportam armazenamento de diversos valores, 
    ou seja, de uma coleção de valores, tudo isso dentro de uma única variável

    Nosso array conterá uma Lista de compras:
    - Arroz
    - Feijão
    - Macarrão
    - Farinha
    - Ovos
*/

// Declarando a variável do tipo array
var listaCompras = Array();

// Atribuindo valores aos indices do nosso array
listaCompras[1] = 'Arroz';
listaCompras[2] = 'Feijão';
listaCompras[3] = 'Macarrão';
listaCompras[4] = 'Farinha';
listaCompras[5] = 'Ovos';

// Mostramos o valor de nossa lista em cada indice
document.write(listaCompras[4]);


// Podemos declarar nosso array de outra forma
var lista_compras = ['Arroz', 'Feijão', 'Macarrão', 'Farinha', 'Ovos'];

// ou Assim
var ListaCompras = Array('Arroz', 'Feijão', 'Macarrão', 'Farinha', 'Ovos');

// Da forma como declaramos o nosso array acima, o o indice onde esta o valor do 'Arroz' agora é 0
document.write(lista_compras[0]);
document.write(ListaCompras[2]); // Seguindo a mesma lógica que o indice comece me 0, então o valor do indice 2 será 'Macarrão' 