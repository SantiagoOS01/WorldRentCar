import Carrusel from "../Componentes/Carrusel";

function Home (){

return(
<section>
    <div className="welcome">
        <h1>Bienvenidos a World Rent Car</h1>        
    </div>
        <h3>carrusel</h3>
        
    <div>
        <h3>Recomendados</h3>
        <p>Lorem ipsum, dolor sit amet consectetur adipisicing elit. Aut, voluptatum accusamus. Tenetur ex qui repellat ipsam eveniet ducimus ipsa asperiores, corrupti quae cumque, reprehenderit non, eum suscipit alias nesciunt. Recusandae?</p>
    </div>
    <div className="categorias">
        <h3>Categorias</h3>
        <div className="area-categorias">
            <div className="imagen-categoria">
                <h3>AUTOS</h3>
                <img src="../auto.jpg" alt="Auto" />
            </div>
            <div className="imagen-categoria">
                <h3>MOTOS</h3>
                <img src="../moto.jpg" alt="Moto" />
            </div>
            <div className="imagen-categoria">
                <h3>CAMIONETAS</h3>
                <img src="../camioneta.jpg" alt="Camioneta" />
            </div>
            <div className="imagen-categoria">
                <h3>VAN</h3>
                <img src="van.webp" alt="Van" />
            </div>
        </div>
    </div>
</section>


)
}

export default Home;