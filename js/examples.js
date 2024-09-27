// Seleccionamos todas las imágenes con la clase 'info-img'
const infoImages = document.querySelectorAll('.info-img');

// Añadimos un evento 'click' a cada imagen
infoImages.forEach((img) => {
    img.addEventListener('click', function() {
        // Obtenemos la información del atributo 'data-info'
        const info = this.getAttribute('data-info');
        // Mostramos una alerta con la información
        alert(info);
    });
});