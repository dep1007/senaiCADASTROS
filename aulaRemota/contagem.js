/*situação problema: empresa precisa de controle de alunos de uma escola.
- percorrer do zero até o número de alunos. 
- se o n. de alunos for par, escreva par e o numero correspondente. Mesma coisa para impar e zero.
- tem que mostrar o numero dos alunos.
-obs: eu colocaria else if pq tem 3 sentenças. 

verificar se n é par:
    verdadeiro: escrever na tela o n par

verificar se numero é impar:
    verdadeiro:  escrever na tela o n impar

verificar se o n é zero:
    verdadeiro: escrever na tela zero.     
*/
//o ++ conta de 1 em 1. é = contador = contador +1.
//se quiser contar de 2 em 2 
//quando eu coloco %2 == 0 significa que ele é par.

let numeroAlunos = 10; 

//percorrer utiliza o for, pois temos o n exato de alunos.
//percorrer geralmente significa o for.

for(let contador = 0; contador < numeroAlunos; contador++) {
    
    if(contador == 0){
        console.log("O número é igual a ZERO");
    }else if(contador % 2 == 0) {
        console.log(`O número ${contador} é PAR`);
    }else if(contador % 2 == 1){
            console.log(`O número do ${contador} é IMPAR`);
    }
}

//se eu colocar o IF contator == 0 e depois else if, vai ocultar o zero. Só colocar tudo nessa ordem.
//else if é só quando tem outras condições. 
//switch case teria uma limitação, pois eu teria que colocar o case certinho. Teria que percorrer um a um. Ex: case 0: console.log("O numero é zero"); case 2: ...



