// Para usar input por consola instalá prompt-sync con:
// npm install prompt-sync

const prompt = require("prompt-sync")({ sigint: true });

function registrarVisitas() {
  const visitas = []; // Lista vacía para guardar las visitas

  for (let i = 0; i < 3; i++) { // Repite 3 veces
    console.log(`\nRegistro # ${i + 1}`);
    const nombre = prompt("Nombre del estudiante: ");
    const curso = prompt("Curso: ");
    const motivo = prompt("Motivo por el que entra a la MakerSpace: ");

    const visita = {
      nombre: nombre,
      curso: curso,
      motivo: motivo
    };

    visitas.push(visita);
  }

  return visitas;
}

function mostrarDatos(visitas) {
  console.log("\n--- Lista de estudiantes que ingresaron a la MakerSpace ---");
  visitas.forEach(visita => {
    console.log(`${visita.nombre} - ${visita.curso} - Motivo: ${visita.motivo}`);
  });

  const cursos = {}; // Diccionario para contar visitas por curso
  visitas.forEach(visita => {
    const curso = visita.curso;
    if (cursos[curso]) {
      cursos[curso] += 1;
    } else {
      cursos[curso] = 1;
    }
  });

  console.log("\n--- Cantidad de visitas por curso ---");
  for (const [curso, cantidad] of Object.entries(cursos)) {
    console.log(`${curso}: ${cantidad} estudiante(s) ingresaron`);
  }

  console.log("\nPrimer estudiante que ingresó a la MakerSpace:");
  console.log(visitas[0].nombre);
}

function main() {
  const visitas = registrarVisitas();
  mostrarDatos(visitas);
}

main();
