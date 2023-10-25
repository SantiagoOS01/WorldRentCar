import { Link } from "react-router-dom/dist/umd/react-router-dom.development";
import SearchBar from "./SearchBar";

function Header (){

    return(
        <section className="head">
                <div className="logo">
                   <Link to="/"><img src="../src/Redes/CAR 2@3x.png" alt="Logo" className="" /></Link>
                </div>                
                    <ul className="registro">
                        <li><Link to="/login"><button className="headerbutton">Iniciar Sesion</button></Link></li>
                        <li><Link to="/registration"><button className="headerbutton">Crear Cuenta</button></Link></li>
                    </ul>                       
        </section>
        
    )
}

export default Header;