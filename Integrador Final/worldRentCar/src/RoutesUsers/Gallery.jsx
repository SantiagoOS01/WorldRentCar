function Gallery(){
    return(
        <section className="galeria">
                <div class="card">
                    <img src="imagen.jpg" alt="Imagen del artículo" />
                    <h3>Nombre del artículo</h3>
                    <p>Precio: $100</p>
                    <p>Clasificación: 5 estrellas</p>
                    <button>Reservar</button>
                </div>
                <div class="card">
                    <img src="imagen2.jpg" alt="Imagen del artículo" />
                    <h3>Nombre del artículo 2</h3>
                    <p>Precio: $200</p>
                    <p>Clasificación: 4 estrellas</p>
                    <button>Reservar</button>
                </div>
                <div class="card">
                    <img src="imagen3.jpg" alt="Imagen del artículo" />
                    <h3>Nombre del artículo 3</h3>
                    <p>Precio: $300</p>
                    <p>Clasificación: 3 estrellas</p>
                    <button>Reservar</button>
                </div>
        </section>
    )

}
export default Gallery;