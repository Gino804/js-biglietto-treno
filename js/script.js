console.log('JS OK');

// 0 - Recupero il placeholder dal DOM

const pricePlaceholder = document.getElementById('price');
console.log(pricePlaceholder);

// 1 - 2 - Chiedo all'utente i chilometri da percorrere e l'età

const kilometers = parseInt(prompt('Inserisci i chilometri da percorrere', '20'));
console.log('Chilometri da percorrere: ', kilometers);

const age = parseInt(prompt('Inserisci la tua età', '20'));
console.log('Età del passeggero: ', age);

// 3 - Calcolo il prezzo in base ai chilometri

let price = kilometers * 0.21;
console.log('Prezzo di base: ', price);

// 4 - 5 - Verifico se ci sono sconti da applicare e, se necessario, li applico

if(age < 18)
{
    price *= 0.2;  
}
if(age >= 65)
{
    price *= 0.4;
}

console.log('Prezzo finale: ', price);

// 6 - Arrotondo il prezzo e lo inserisco nell'elemento del DOM

pricePlaceholder.innerText = price.toFixed(2);