import React from 'react'

const RegistrationForm = () => {

    return(
    <div>
        <h1>Formulario de Registro</h1>

            
        <form action="action="procesar_registro.php" method="post"">

            <label for="nombre">Nombre:</label>
            <input type="text" id="nombre" name="nombre" required><br><br>
            
            <label for="apellido">Apellido:</label>
            <input type="text" id="apellido" name="apellido" required><br><br>
    
            <label for="email">Email:</label>
            <input type="email" id="email" name="email" required><br><br>
    
            <label for="contrasena">Contraseña:</label>
            <input type="password" id="contrasena" name="contrasena" required><br><br>
    
            <label for="pais">País:</label>
            <select id="pais" name="pais">
                <option value="Selecciona">Selecciona</option>
                <option value="Estados Unidos">Estados Unidos</option>
                <option value="Canadá">Canadá</option>
                <!-- Agrega más países aquí -->
            </select><br><br>
    
            <label for="direccion">Dirección:</label>
            <input type="text" id="direccion" name="direccion"><br><br>
    
            <label for="genero">Género:</label>
            <input type="radio" id="genero-masculino" name="genero" value="Masculino"> Masculino
            <input type="radio" id="genero-femenino" name="genero" value="Femenino"> Femenino
            <input type="radio" id="genero-otro" name="genero" value="Otro"> Otro<br><br>
    
            <label for="dni">DNI:</label>
            <input type="text" id="dni" name="dni" required><br><br>
    
            <input type="submit" value="Registrarse">
        </form>

    </div>

    )
  
}

export default RegistrationForm