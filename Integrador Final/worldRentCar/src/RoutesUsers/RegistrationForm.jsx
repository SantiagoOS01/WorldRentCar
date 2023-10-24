import React from 'react'
import '../Styles/registration_form.css'

const RegistrationForm = () => {

    return(
<section className='form'>
    <div className='regForm'>
        <h1>Formulario de Registro</h1>
        <form action="">
        <div>
        <label for="nombre">Nombre completo:</label>
        <input type="text" id="nombre" v-model="nombre" required/>        
      </div>
      <div>
        <label for="dni">DNI:</label>
        <input type="text" id="dni" v-model="dni" required/>
      </div>
      <div>
        <label for="correo">Correo electrónico:</label>
        <input type="email" id="correo" v-model="correo" required/>
      </div>
      <div>
        <label for="direccion">Dirección de vivienda:</label>
        <input type="text" id="direccion" v-model="direccion" required/>
      </div>
      <div>
        <label for="fechaNacimiento">Fecha de Nacimiento:</label>
        <input type="date" id="fechaNacimiento" v-model="fechaNacimiento" required/>
      </div>
      <div>
        <label for="rol">Rol de usuario:</label>
        <select id="rol" v-model="rol" required>
          <option value="cliente">Cliente</option>
          <option value="administrador">Administrador</option>
        </select>
      </div>
      <div>
        <button type="submit">Registrarse</button>
      </div>
        </form>
    </div>
</section>    
    )  
}

export default RegistrationForm;