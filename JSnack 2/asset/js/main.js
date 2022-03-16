let container = document.getElementById("container");
let firstWord = prompt("Inserisci la prima parola:");
let secondWord = prompt("Inserisci la seconda parola:");

console.log(firstWord);
console.log(secondWord);

if(firstWord.length > secondWord.length){
    container.innerHTML = `<div>${secondWord}</div>`;
    container.innerHTML += `<div>${firstWord}</div>`;
    
}else if( firstWord.length < secondWord.length ){
    container.innerHTML = `<div>${firstWord}</div>`;
    container.innerHTML += `<div>${secondWord}</div>`;

}else{
    container.innerHTML = `<div>Le due parole hanno lo stesso numero di lettere</div>`;
}