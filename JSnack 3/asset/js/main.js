let container = document.getElementById("container");
var numbers = [];
let somma = 0;


for(i=0 ; i < 10 ; i++){
    let number = Number(prompt("Inserisci un numero:"));
    numbers.push(number) ;

};
for(i=0 ; i < 10 ; i++){

    somma += numbers[i];
};
container.innerHTML += `<div>${somma}</div>`;