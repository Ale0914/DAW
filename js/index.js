
const pensumTecnico = [
    { codigo: 'MAT101', nombre: 'Matemática I', uv: 4, prerequisitos: [] },

  ];
  
  const pensumIngenieria = [
    { codigo: 'MAT201', nombre: 'Matemática II', uv: 4, prerequisitos: ['MAT101'] },
   
  ];
  
  module.exports = {
    pensumTecnico,
    pensumIngenieria,
  };
  