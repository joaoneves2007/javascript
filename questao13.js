/*
Questão 13: Como você pode verificar se um valor está contido em um array 
em JavaScript?
*/

let meuArray = [1, 2, 3, 4, 5];
let valor = 3;

if (meuArray.includes(valor)) {
    console.log(`O valor ${valor} está contido no array.`);
} else {
    console.log(`O valor ${valor} não está contido no array.`);
}