// Para usar input por consola instalá prompt-sync con: npm install prompt-sync

const prompt = require("prompt-sync")({ sigint: true });

function registrarVisitas() {
  const visitas = []; // Array vacío para guardar las visitas

  for (let i = 0; i < 3; i++) { // Repite 3 veces
    console.log(`\nRegistro N° ${i + 1}`);
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

function registroVisitas(visitas) {
  if (visitas.length === 0) {
    console.log("No hay visitas registradas");
    return;
  }else{
  console.log("\n--- Lista de estudiantes que ingresaron a la MakerSpace ---");
  visitas.forEach(visita => {
    console.log(`${visita.nombre} - Curso ${visita.curso} - Motivo: ${visita.motivo}`);
  })};
}

function contarVisitasPorCurso(visitas) {
  const cursos = {};
  visitas.forEach(visita => {
    cursos[visita.curso] = (cursos[visita.curso] || 0) + 1;
  });
  console.log("\n--- Cantidad de visitas por curso ---");
  if (Object.keys(cursos).length === 0) {
    console.log("No hay visitas registradas");
    return;
  }
  for (const [curso, cantidad] of Object.entries(cursos)) {
    console.log(`${curso}: ${cantidad} estudiante(s) ingresaron`);
  }
}

function primerEstudiante(visitas) {
  console.log("\nPrimer estudiante que ingresó a la MakerSpace:");
  visitas.length === 0? console.log("No hay visitas registradas"): console.log(visitas[0].nombre);
}


function main() {
  const visitas = registrarVisitas();

  let opcion;
  do {
    console.log("\n--- Menú MakerSpace ---");
    console.log("1. Lista de estudiantes que ingresaron a la MakerSpace");
    console.log("2. Cantidad de visitas por curso");
    console.log("3. Primer estudiante que ingresó a la MakerSpace");
    console.log("4. Salir");
    opcion = prompt("Elija una opción (1-4): ");

    switch (opcion) {
      case "1":
        registroVisitas(visitas);
        break;
      case "2":
        contarVisitasPorCurso(visitas);
        break;
      case "3":
        primerEstudiante(visitas);
        break;
      case "4":
        console.log("Saliendo...");
        break;
      default:
        console.log("Opción inválida. Intente nuevamente.");
    }
  } while (opcion !== "4");
}

main();



