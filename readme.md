# Calcolo del prezzo del biglietto del treno

Il programma dovrà chiedere all'utente il numero di chilometri che vuole percorrere e l'età del passeggero.
Sulla base di queste informazioni dovrà calcolare il prezzo totale del viaggio, secondo queste regole:

- il prezzo del biglietto è definito in base ai km (0.21 € al km)
- va applicato uno sconto del 20% per i minorenni
- va applicato uno sconto del 40% per gli over 65.<br>

L'output del prezzo finale va messo fuori con massimo due decimali, per indicare centesimi sul prezzo.

## Steps:

0. Recupero l'elemento del DOM in cui inserire il prezzo totale
1. Chiedo all'utente i chilometri da percorrere e li salvo in una varabile
2. Chiedo all'utente l'età e la salvo in una variabile
3. Calcolo il prezzo in base ai chilometri da percorrere
4. Data l'età dell'utente, verifico se ci siano sconti da applicare
5. Se necessario, calcolo il prezzo definitivo applicando gli sconti
6. Arrotondo il prezzo definitivo in modo che abbia al massimo due cifre decimali
7. Inserisco il prezzo definitivo nell'elemento del DOM
