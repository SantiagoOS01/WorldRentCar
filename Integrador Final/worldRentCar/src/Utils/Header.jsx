import { Link } from "react-router-dom/dist/umd/react-router-dom.development";

function Header (){

    return(
        <section className="head">
                <div className="logo">
                    <img src="../logo_WRC.png" alt="Logo" className="" />
                </div>
                <nav>
                    <ul className="navegacion">
                        <li><Link to="/"><button>Inicio</button></Link></li>
                        <li><Link to="/gallery"><button>Galeria</button></Link></li>
                        <li><Link to="/myreservation"><button>Mis Reservas</button></Link></li><br />
                        <li><Link to="/contact"><button>Contacto</button></Link></li>
                    </ul>
                    <ul className="registro">
                        <li><Link to="/login"><button>iniciar sesion</button></Link></li>
                        <li><Link to="/registration"><button>Crear cuenta</button></Link></li>
                    </ul>
                </nav>
        </section>
    )
}

export default Header;