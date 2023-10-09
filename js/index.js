const express = require('express');
const app = express();
const port = 3000;


const pensumTecnico = [
  { codigo: 'MAT101', nombre: 'Matemática I', uv: 4, prerequisitos: [] },
  { codigo: 'FIS101', nombre: 'Física I', uv: 4, prerequisitos: [] },
  
];

const pensumIngenieria = [
  { codigo: 'MAT201', nombre: 'Matemática III', uv: 4, prerequisitos: ['MAT102'] },
  { codigo: 'INF201', nombre: 'Programación II', uv: 4, prerequisitos: ['INF102'] },
 
];


app.get('/api/prerrequisitos/:codigo', (req, res) => {
  const codigo = req.params.codigo;
  res.json({ codigo, prerrequisitos: [] });
});


app.get('/api/materias/:ciclo', (req, res) => {
  const ciclo = req.params.ciclo;
  res.json({ ciclo, materias: [] });
});

app.post('/api/inscripcion/:carrera', (req, res) => {
  const carrera = req.params.carrera;
  res.json({ mensaje: `Inscripción en la carrera ${carrera} exitosa` });
});

app.delete('/api/inscripcion/:carrera/:materia', (req, res) => {
  const carrera = req.params.carrera;
  const materia = req.params.materia;
  res.json({ mensaje: `Inscripción en la carrera ${carrera} para la materia ${materia} eliminada` });
});

app.listen(port, () => {
  console.log(`Servidor API escuchando en el puerto ${port}`);
});
document.addEventListener('DOMContentLoaded', () => {
  const materiasList = document.getElementById('materias-list');
  const materiaSelect = document.getElementById('materia');
  const inscripcionForm = document.getElementById('inscripcion-form');

  // Función para cargar las materias disponibles desde la API
  function cargarMaterias() {
      // Llama a la API para obtener las materias disponibles y actualiza el formulario
      // Puedes usar fetch u otra librería para realizar la solicitud GET a la API
      // Ejemplo de solicitud GET usando fetch:
      fetch('/api/materias', { method: 'GET' })
          .then((response) => response.json())
          .then((data) => {
              // Limpia la lista de materias y el formulario
              materiasList.innerHTML = '';
              materiaSelect.innerHTML = '';

              // Agrega las materias disponibles al formulario y a la lista
              data.materias.forEach((materia) => {
                  const option = document.createElement('option');
                  option.value = materia.codigo;
                  option.textContent = materia.nombre;
                  materiaSelect.appendChild(option);

                  const listItem = document.createElement('li');
                  listItem.textContent = materia.nombre;
                  materiasList.appendChild(listItem);
              });
          })
          .catch((error) => console.error('Error al cargar las materias:', error));
  }

  
  inscripcionForm.addEventListener('submit', (e) => {
      e.preventDefault();

      const materiaSeleccionada = materiaSelect.value;

      // Realiza una solicitud POST a la API para inscribir la materia
      // Puedes usar fetch u otra librería para realizar la solicitud POST a la API
      // Ejemplo de solicitud POST usando fetch:
      fetch('/api/inscripcion', {
          method: 'POST',
          headers: { 'Content-Type': 'application/json' },
          body: JSON.stringify({ materia: materiaSeleccionada }),
      })
          .then((response) => response.json())
          .then((data) => {
              console.log('Respuesta de la API:', data);
              // Actualiza la lista de materias inscritas o muestra un mensaje de confirmación
          })
          .catch((error) => console.error('Error al inscribir la materia:', error));
  });

  // Cargar las materias disponibles al cargar la página
  cargarMaterias();
});
