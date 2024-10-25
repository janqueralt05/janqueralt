function filtrarArticulos() {
    const input = document.getElementById('buscar');
    const filter = input.value.toLowerCase();
    const articulos = document.querySelectorAll('.card'); // Cambiar aquí

    articulos.forEach(articulo => {
        const titulo = articulo.querySelector('.card-title').innerText.toLowerCase(); // Cambiar aquí
        const descripcion = articulo.querySelector('.card-description').innerText.toLowerCase(); // Cambiar aquí

        if (titulo.includes(filter) || descripcion.includes(filter)) {
            articulo.style.display = ""; // Muestra el artículo
        } else {
            articulo.style.display = "none"; // Oculta el artículo
        }
    });
}