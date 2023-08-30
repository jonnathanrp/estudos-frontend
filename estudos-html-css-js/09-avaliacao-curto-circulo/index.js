/*
Operadores Lógicos
Avaliação de Curto-Circuito(Short-Circuit)
&& -> false && true -> false
|| ->
! ->

Falsy Value

As expressões abaixo são usadas para indicar uma avaliação em falso, da expressão. Qualquer coisa diferente valida em verdadeiro (tue). Assim, sempre que encontramos estas expressões, podemos considerar um short-cicuit, deduzindo um retorno falso.

false
0
'' "" `` (quando estas espressões estão vazias o compilador considera um falsy value)
null / undefined
NaN
*/


// quando atribuido a expressão && o output retorna o último valor da expressão.

//console.log('Jonnathan' && 'Rodrigues');



//estudando uma função

/*

function falaOi() {
    return 'Oi';
}
*/
//const vaiExecutar = 'Jonnathan'; //aqui quando não há um falsy value a função é executada normalmente, quando inserimos um falsy value, exemplo "NaN" a função não é executada.
//console.log(vaiExecutar && falaOi());


// Entre 0 - 11 - Bom dia
// Entre 12 - 17 - Boa tarde
// entre 13h - 23 - Boa noite

const hora = 13;

if (hora >= 0 && hora <= 11) {
    console.log('Bom dia, meus amigo!');
} else if (hora >= 12 && hora <= 17) {
    console.log('Boa tarde, guerreiros!')
} else if (hora >= 18 && hora <= 23) {
    console.log('Boa noite!');
} else {
    console.log(Olá);
}