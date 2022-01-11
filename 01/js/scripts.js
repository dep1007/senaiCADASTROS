let nome = window.prompt("Digite seu nome"); 
window.alert(`Olá ${nome}, seja bem vindo ao cadastro de eventos!`);

let idade = Number(window.prompt("Digite sua idade"));

if(idade<18){
    window.alert(`${nome}, infelizmente você não atingiu a idade requerida`)
}else{
    window.alert("Vamos continuar seu cadastro"); 
}

let dataEvento = Date(window.prompt("Digite a data do evento. Ex: 01/01/2021"));
let dataLimite = Date.now

if(dataEvento<dataLimite) {
    window.alert("Digite outra data! Data não permitida");
}

let listarparticipantes = [nome.length];

let listarpalestrantes = ['']
console.log(listarpalestrantes.length)

if(listarparticipantes>100){
    window.alert('Não foi possível cadastrar, pois foi atingido número máximo de participantes.')
}