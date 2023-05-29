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

// BONUS - Validazione

let isValid = true;
let errorMessage = null;

// Controllo che i chilometri siano un numero maggiore di 0

if (isNaN(kilometers) || kilometers <= 0)
{
    isValid = false;
    errorMessage = 'Il numero di chilometri inserito è errato \n';
}

// Controllo che l'età sia un numero maggiore di 0 plausibile

if (isNaN(age) || age <= 0 || age > 125)
{
    isValid = false;
    errorMessage += "L'età inserita è errata";
}

if (!isValid)
{
    alert(errorMessage);
}
else
{
    // BONUS - Inserisco nel DOM il chilometraggio, l'età, e il prezzo prima dello sconto

    document.getElementById('kilometers').innerText = kilometers;
    document.getElementById('age').innerText = age;

    if (age < 18 || age >= 65)
    {
        document.getElementById('initial-price').innerText = 'Prezzo senza sconto: €' + price.toFixed(2);
    }

    // 4 - 5 - Verifico se ci sono sconti da applicare e, se necessario, li applico

    if (age < 18)
    {
        price *= 0.8;  
    }
    if (age >= 65)
    {
        price *= 0.6;
    }

    console.log('Prezzo finale: ', price);

    // 6 - Arrotondo il prezzo e lo inserisco nell'elemento del DOM

    pricePlaceholder.innerText = price.toFixed(2);
}