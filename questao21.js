/*
Questão 21: Como você pode verificar se um objeto contém uma determinada 
propriedade em JavaScript?
*/

let meuObjeto = { propriedade: "valor" };
if ('propriedade' in meuObjeto) {
    console.log("O objeto contém a propriedade 'propriedade'.");
} else {
    console.log("O objeto não contém a propriedade 'propriedade'.");
}