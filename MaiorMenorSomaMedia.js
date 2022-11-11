/*Numeros para calculos*/
const numeros= [10,20,30,300,40,50,60];

let maiorNumero = 0;
let menorNumero = 99999999999

/*Maior e menor número*/
for (let contador=0 ; contador < numeros.length; contador++){

    if (numeros[contador] > maiorNumero){
        maiorNumero = numeros[contador];
    }else if(numeros[contador] < menorNumero){
        menorNumero = numeros[contador]
    }
}

console.log("Maior número: " + maiorNumero);
console.log("Menor número: " + menorNumero);

/*Function que soma os numeros do array: .reduce()*/
function soma(numero1, numero2){
    let somaTotal = numero1 + numero2
    return somaTotal
}

/*.reduce() -> Percorre o array e retorna um valor*/
let somaDoArray = numeros.reduce(soma,0);
console.log("Soma entre os valores: " + somaDoArray);

/*Média do array, reutilizado o valor da soma entre os valores*/
let mediaDoArray = somaDoArray / numeros.length;
console.log("Média dos valores: " + mediaDoArray.toFixed(2))



/*
---REDUCE
A function precisa de 2 parametros.
Criar uma variavel que calcula os 2 parametros, como é o .reduce ele percorre o array todo, pega o primeiro e o segundo valor, soma, e depois esses dois valores vira o primeiro e assim sucessivamente
.reduce percorre o array todo e volta apeas com um item da lista.
Ao chamar o resultado do .reduce em uma variavel, o primeiro parametro é a function, segundo parametro é em qual valor quer que comece.
let somaDoArray = numeros.reduce(soma,0);
*/