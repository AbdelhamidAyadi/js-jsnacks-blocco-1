let container = document.getElementById("container");
let firstNumber = Number( prompt("Inserisci il primo numero:"));
let secondNumber = Number( prompt("Inserisci il secondo numero:"));

console.log(firstNumber);
console.log(secondNumber);

if(firstNumber > secondNumber){
    container.innerHTML = `<div> Il numero maggiore è: ${firstNumber}</div>`;

}else if( firstNumber < secondNumber ){
    container.innerHTML = `<div> Il numero maggiore è: ${secondNumber}</div>`;
}else{
    container.innerHTML = `<div>I numeri sono uguali</div>`;
}