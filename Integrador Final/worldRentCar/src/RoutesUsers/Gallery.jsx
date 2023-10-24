function Gallery(){
    //LAS IMAGENES SON SOLO ILUSTRATIVAS DEBEN SER REMPLAZADAS//
    return(
        <section className="galeria">
                <div class="card">
                    
                    <img src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcR4ntE-PvfSREpY0D5cYAl84RqBWp2SAS0XmA&usqp=CAU" alt="Imagen del artículo" />
                    <h3>Nombre del artículo</h3>
                    <p>Precio: $100</p>
                    <p>Clasificación: 5 estrellas</p>
                    <button>Reservar</button>
                </div>
                <div class="card">
                    <img src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcR4ntE-PvfSREpY0D5cYAl84RqBWp2SAS0XmA&usqp=CAU" alt="Imagen del artículo" />
                    <h3>Nombre del artículo 2</h3>
                    <p>Precio: $200</p>
                    <p>Clasificación: 4 estrellas</p>
                    <button>Reservar</button>
                </div>
                <div class="card">
                    <img src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcR4ntE-PvfSREpY0D5cYAl84RqBWp2SAS0XmA&usqp=CAU" alt="Imagen del artículo" />
                    <h3>Nombre del artículo 3</h3>
                    <p>Precio: $300</p>
                    <p>Clasificación: 3 estrellas</p>
                    <button>Reservar</button>
                </div>
                <div class="card">
                    <img src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcR4ntE-PvfSREpY0D5cYAl84RqBWp2SAS0XmA&usqp=CAU" alt="Imagen del artículo" />
                    <h3>Nombre del artículo 4</h3>
                    <p>Precio: $350</p>
                    <p>Clasificación: 2 estrellas</p>
                    <button>Reservar</button>
                </div>
        </section>
    )

}
export default Gallery;