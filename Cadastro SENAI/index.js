let nome = prompt("Qual é o seu nome?");

if(nome === true){
    alert("Próximo");
}

let idade = prompt("Qual é sua idade?");

if (idade<18) {
  alert("Sinto muito, mas não podemos efetuar seu cadastro.");
} 

let dataEvento = prompt("Qual é a data do evento?");
let dataHoje = Date; 

if(dataHoje<10){
    alert("coloque outra data"); 
}

let participantes = 100;

if(participantes>100){
    alert("Sinto muito, mas já atingimos o número de participantes"); 
}

let listarparticipantes = [''];
console.log(listarparticipantes.length)

let listarpalestrantes = ['']
console.log(listarpalestrantes.length)
