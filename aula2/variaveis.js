var numero = 2; //  Pode ser alterada e acessada em qualquer bloco

let texto = "Hello"; //  Pode ser alterada e só existe dentro do bloco qual foi criado, porém, pode ser acessado se criado em escopo geral

const oQueEisso = "?"; // Não pode se alterar o valor e pode se acessar em qualquer bloco

console.log("Tipo var: ",numero);

numero = 13;

console.log(texto + " o número agora é " + numero);

texto = 69;

console.log(texto + numero); // concatenar com "+" dois valores numericos resulta em uma soma

//console.log(oQueEisso)

//Constantes não podem ter novos valores assinalados a elas

//oQueEisso = "uma constante????"

//console.log(oQueEisso)