import React from 'react'
import { Link } from 'react-router-dom/dist/umd/react-router-dom.development'

const LogIn = () => {

    return(
        <div>
        <h2 className='titulo-login'>Iniciar sesión</h2>
        <form action="procesar-login.php" method="post">
            <div class="form-group">
                <label for="email">Correo electrónico</label>                
                <input type="email" id="email" name="email" required />
            </div>
            <div class="form-group">
                <label for="password">Contraseña</label>
                <input type="password" id="password" name="password" required />                
            </div>
            <button type="submit" className='button-log'>Iniciar sesión</button>
        </form>
        <p className='ruta-a-registro'>¿No tienes una cuenta? <Link to ="/registration"><p>Registrate Aqui</p></Link> </p>
        </div>
    )
}

export default LogIn