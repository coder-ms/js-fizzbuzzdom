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


let html = '';
const section = document.querySelector("section.receptacle");

const tagDiv = document.createElement('div');

for(let number=1; number <= 100; number++){
    // Stampo numeri da 1 a 100 in console

    // Verifico se i è multiplo di 3 e 5
    if(number % 3 == 0 && number % 5 == 0){
        console.log("FizzBuzz");

        // Aggiungo attraverso la funzione append() la stringa 'FizzBuzz' per i numeri multipli di 3 e 5
        const tagDiv = document.createElement('div');
        tagDiv.className = `box--${number}`;
        tagDiv.append(`${"FizzBuzz"}`);
    
        section.append(tagDiv);

        // Creo uno stile per la stringa 'FizzBuzz'
        const element = `<div class="redFizzBuzz redFizzBuzz--${number}">${"FizzBuzz"}</div>`;
        html += element;
        console.log(html);
        section.innerHTML = html;
    }

    // Verifico se i è multiplo di 3
    else if(number % 3 === 0){
        console.log("Fizz");
        // Aggiungo attraverso la funzione append() la stringa 'Fizz' per i numeri multipli di 3
        const tagDiv = document.createElement('div');
        tagDiv.className = `box--${number}`;
        tagDiv.append(`${"Fizz"}`);
    
        section.append(tagDiv);

        // Creo uno stile per la stringa 'Fizz'
        const element = `<div class="blueFizz blueFizz--${number}">${"Fizz"}</div>`;
        html += element;
        console.log(html);
        section.innerHTML = html;

    }  

    // Verifico se i è multiplo di 5
    else if(number % 5 === 0){
        console.log("Buzz");

        // Aggiungo attraverso la funzione append() la stringa 'Buzz' per i numeri multipli di 5
        const tagDiv = document.createElement('div');
        tagDiv.className = `box--${number}`;
        tagDiv.append(`${"Buzz"}`);
    
        section.append(tagDiv);
        // Creo uno stile per la stringa 'Buzz'
        const element = `<div class="greenBuzz greenBuzz--${number}">${"Buzz"}</div>`;
        html += element;
        console.log(html);
        section.innerHTML = html;
    }

    // Se i non è multiplo di 3 e di 5, stampo in console il numero
    else{
        console.log(number);

        // Aggiungo attraverso la funzione append() i numeri non multipli di 3 o di 5  
        const tagDiv = document.createElement('div');
        tagDiv.className = `box--${number}`;
        tagDiv.append(`${number}`);
    
        section.append(tagDiv);

        // Creo uno stile per per i numeri rimanenti
        const element = `<div class="greyNumber greyNumber--${number}">${number}</div>`;
        html += element;
        console.log(html);
        section.innerHTML = html;
    } 
}


    

