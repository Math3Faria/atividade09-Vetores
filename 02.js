let notas = [];
let nota;
let somaDasNotas = 0;
for (let index = 0; index < 4; index++) {
    nota = parseFloat(prompt(`Digite o valor da sua ${index + 1}ª nota:`));
    if (isNaN(nota)) {
        alert("O valor digitado é invalido, digite de novo");
        index--;
    } else {
        notas[index] = nota;
        somaDasNotas += nota;
    }
}
let media = somaDasNotas / notas.length;
console.log(`Suas notas são: ${notas} e sua média é: ${media}`);