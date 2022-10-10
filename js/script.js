/*
Scrivi un programma che stampi in console i numeri da 1 a 100, ma che per i multipli di 3 stampi “Fizz” al posto del numero e per i multipli di 5 stampi “Buzz”. 
Per i numeri che sono sia multipli di 3 che di 5 stampi “FizzBuzz”.
Prima di partire a scrivere codice poniamoci qualche domanda:
Come faccio a sapere se un numero è divisibile per un altro? Abbiamo visto qualcosa di particolare che possiamo usare?

Consigli del giorno:
Scriviamo sempre prima dei commenti in italiano per capire cosa vogliamo fare
Proviamo ad immaginare le operazioni che vogliamo far svolgere al nostro programma così come lo faremmo "a mano"
BONUS 1: Crea un container nel DOM , aggiungendo (attraverso la funzione append()) un elemento html con il numero o la stringa corretta da mostrare.
BONUS 2: Applica stili differenti agli elementi aggiunti al DOM nel BONUS 1, a seconda che il valore inserito sia un numero, un fizz, un buzz o un fizzbuzz.

*/

    for(let number=1; number < 101; number++){
        // Stampo numeri da 1 a 100 in console

        // Verifico se i è multiplo di 3 e 5
        if(number % 3 == 0 &&  number % 5 == 0){
           console.log("FizzBuzz");
        }
        // Verifico se i è multiplo di 3
        else if(number % 3 === 0){
            console.log("Fizz");
        }    
        // Verifico se i è multiplo di 5
        else if(number % 5 === 0){
            console.log("Buzz");
        }      
        // Se i non è multiplo di 3 e di 5, stampo in console il numero
        else{
            console.log(number);
        } 
    }



