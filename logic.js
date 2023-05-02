// Selezioniamo elemento "container"
const container = document.getElementById("container");
console.log(container);

//  Creo il loop per gli elementi di output
for (let i = 1 ; i <= 100; i++) {

    // creiamo un nuovo elemento all'inetrno del container
    const square = document.createElement("div");
    square.classList.add("square");

    // creamio le condizioni per scrivere bizz e buzz
    if ( i % 3 ===0 && i % 5 === 0) {
        square.append("Fizz&Buzz");
        square.classList.add("fizzbuzz");
    } else if (i % 3 === 0) {
        square.append("Fizz");
        square.classList.add("fizz");
    } else if ( i % 5 === 0) {
        square.append("Buzz");
        square.classList.add("buzz");  
    }  else {
        square.append(i);
    }

    // inseriamo il valore all'interno dell'elemento creato
    // square.append(i);

    // aggiungiamo al contenitore l'elemento creato
    container.append(square);


}

