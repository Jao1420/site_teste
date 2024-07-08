var estudantes = [
    { nome: "Jão", nota: 5 },
    { nome: "josé", nota: 5.5 },
    { nome: "bella", nota: 3 },
    { nome: "luz", nota: 4 }
];

//// Normalizar as notas
let notas = [];

for (let i of estudantes) {
    notas.push(i.nota);
}

let maior_nota = Math.max(...notas);

let notas_normalizadas = estudantes.map(estudante => (estudante.nota * 10 / maior_nota).toFixed(2));

// Adicionando espaço entre as notas ao imprimir no console
console.log(`Notas antigas eram: ${notas.join(', ')}`);
console.log(`Notas novas são: ${notas_normalizadas.join(', ')}`);
