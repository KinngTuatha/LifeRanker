const audio = document.getElementById('background-music');
const muteButton = document.getElementById('mute-button');

muteButton.addEventListener('click', () => {
if (audio.paused) {
    audio.play();
    muteButton.textContent = 'Mute';
  } else {
    audio.pause();
    muteButton.textContent = 'Unmute';
  }
});

document.body.addEventListener('click', function(event) {
  if (event.target !== muteButton) {
    audio.play();
  }
});

const backgroundImageInput = document.getElementById('background-image');
const backgroundColorInput = document.getElementById('background-color');
const applyChangesButton = document.getElementById('apply-changes');
const resetButton = document.getElementById('reset-button'); // Agregar un botón para restaurar el fondo original

let originalBackground = document.body.style.backgroundImage; // Guardar el fondo original

applyChangesButton.addEventListener('click', () => {
  const backgroundImage = backgroundImageInput.files[0];
  const backgroundColor = backgroundColorInput.value;

  if (backgroundImage) {
    const reader = new FileReader();
    reader.onload = () => {
      document.body.style.backgroundImage = `url(${reader.result})`;
    };
    reader.readAsDataURL(backgroundImage);
  } else {
    document.body.style.backgroundColor = backgroundColor;
  }
});

resetButton.addEventListener('click', () => {
  document.body.style.backgroundImage = originalBackground; // Restaurar el fondo original
});

backgroundImageInput.addEventListener('change', () => {
  if (backgroundImageInput.files.length === 0) {
    document.body.style.backgroundImage = originalBackground; // Cancelar la selección de imagen
  }
});

backgroundImageInput.addEventListener('invalid', () => {
  alert('Por favor, seleccione una imagen válida.'); // Mostrar un mensaje de error
});
