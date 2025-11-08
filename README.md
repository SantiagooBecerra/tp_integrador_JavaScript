# 📘 MakerSpace - Registro de Visitas

Este proyecto es un pequeño programa hecho en **JavaScript (Node.js)** que permite registrar las visitas de estudiantes a la MakerSpace, mostrando luego un menú con distintas opciones para mostrar un resumen de los datos ingresados.

El código está basado en una versión original escrita en **Python**, pero adaptado completamente a JavaScript para ejecutarse en consola.

---
## 📑 Elementos y estructuras utilizadas

Este programa hace uso de diversos elementos y estructuras de programación en JavaScript, entre ellos:
- Funciones: para dividir el código en bloques reutilizables (registrarVisitas, registroVisitas, contarVisitasPorCurso, primerEstudiante, main).
- Arrays: para almacenar los registros de cada visita.
- Objetos: para guardar la información de cada estudiante ({ nombre, curso, motivo }).
- Bucles for y forEach: para recorrer listas de visitas.
- Condicionales (if y switch): para verificar opciones del menú y manejar casos especiales (por ejemplo, cuando no hay registros).
- Diccionarios (objetos con claves dinámicas): para contar la cantidad de visitas por curso.
- Estructura de menú con do...while: para repetir las opciones hasta que el usuario elija salir.
- Entrada de datos por consola: mediante la librería prompt-sync.
  
---

## 🚀 Requisitos para ejecutarlo

- Tener instalado **[Node.js](https://nodejs.org/)** (versión 16 o superior recomendada).

---

## ⚙️ Instalación

1. Clonar este repositorio o crear una carpeta y copiar los archivos.
   ``` bash
   git clone https://github.com/usuario/makerspace-js.git
   cd makerspace-js
---
## ▶️ Ejecución

Ejecutá el siguiente comando en la terminal desde la carpeta del proyecto:
   ``` bash
   node tp.js
   ```
---
## 🧩 Estructura del proyecto
```
makerSpace/
│
├── tp.js     # Código principal del programa
├── package.json      # Configuración del proyecto Node.js
└── README.md         # Documentación del proyecto



