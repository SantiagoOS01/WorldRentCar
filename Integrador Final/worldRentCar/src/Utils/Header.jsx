import { Link } from "react-router-dom/dist/umd/react-router-dom.development";

function Header (){

    return(
        <section className="head">
                <div className="logo">
                    <img src="" alt="Logo" srcset="" />
                </div>
                <nav>
                    <ul>
                        <li><Link to="/home">Inicio</Link></li>
                        <li><Link to="/contact">Contacto</Link></li>
                        <li><Link to="/gallery">Galeria</Link></li>
                        <li><Link to="/myreservation">Mis Reservas</Link></li>
                    </ul>
                </nav>
                <div className="buttons_head">
                    <button>Iniciar Sesion</button>
                    <button>Crear Cuenta</button>
                </div>
        </section>
    )
}

export default Header;