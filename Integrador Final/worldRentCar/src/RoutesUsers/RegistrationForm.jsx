import React from 'react'

const RegistrationForm = () => {

    return(
    <div>
        <h1 className='titulo-form'>Formulario de Registro</h1>

            
        <form action="procesar_registro_php" method="post">

            <label for="nombre">Nombre:</label>
            <input type="text" id="nombre" name="nombre" required/> <br />
            
            <label for="apellido">Apellido:</label>
            <input type="text" id="apellido" name="apellido" required/><br />

            <label for="email">Email:</label>
            <input type="email" id="email" name="email" required /><br />
    
            <label for="contrasena">Contraseña:</label>
            <input type="password" id="contrasena" name="contrasena" required /><br />
    
            <label for="pais">País:</label>
            <select id="pais" name="pais">
                <option value="Selecciona">Selecciona</option>
                <option value="Argentina">Argentina</option> 
                <option value="Chile">Chile</option> 
                <option value="Colombia">Colombia</option> 
                <option value="Uruguay">Uruguay</option> 
            </select><br />
    
            <label for="direccion">Dirección:</label>
            <input type="text" id="direccion" name="direccion" /><br />
    
            <label for="genero">Género:</label>
            <input type="radio" id="genero-masculino" name="genero" value="Masculino" /> Masculino
            <input type="radio" id="genero-femenino" name="genero" value="Femenino" /> Femenino
            <input type="radio" id="genero-otro" name="genero" value="Otro" /> Otro<br />
    
            <label for="dni">DNI:</label>
            <input type="text" id="dni" name="dni" required /><br />
    
            <input type="submit" value="Registrarse" className='button-contacto'/>
        </form>

    </div>

    )
  
}

export default RegistrationForm