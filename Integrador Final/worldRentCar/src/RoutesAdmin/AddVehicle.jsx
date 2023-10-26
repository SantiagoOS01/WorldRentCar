import React from 'react'

const AddVehicle = () => {

    return(
      <form action="procesar-formulario.php" method="post" enctype="multipart/form-data" className='form-add'>
      <h2>Datos del Vehículo</h2>
      <div class="form-group">
        <label for="modelo">Modelo</label>
        <input type="text" class="form-control" id="modelo" name="modelo" required />
      </div>
    
      <div class="form-group">
        <label for="marca">Marca</label>
        <input type="text" class="form-control" id="marca" name="marca" required />
      </div>
    
      <div class="form-group">
        <label for="precio">Precio</label>
        <input type="number" class="form-control" id="precio" name="precio" required />
      </div>
    
      <div class="form-group">
        <label for="disponibilidad">Disponibilidad</label>
        <input type="checkbox" id="disponibilidad" name="disponibilidad" />
      </div>
    
      <div class="form-group">
        <label for="tipo">Tipo o Categoría</label>
        <select class="form-control" id="tipo" name="tipo">
          <option value="Selecciona">Selecciona</option>
          <option value="Autos">Autos</option>
          <option value="Motos">Motos</option>
          <option value="Camionetas">Camionetas</option>
          <option value="Van">Van</option>
        </select>
      </div>
    
      <div class="form-group">
        <label for="pasajeros">Número de Pasajeros</label>
        <input type="number" class="form-control" id="pasajeros" name="pasajeros" required />
      </div>
    
      <div class="form-group">
        <label for="descripcion">Descripción del Vehículo</label>
        <textarea name="descripcion" class="form-control" id="descripcion"></textarea>
      </div>
    
      <div class="form-group">
        <label for="motor">Tipo de Motor</label>
        <select class="form-control" id="motor" name="motor">
          <option value="Selecciona">Selecciona</option>
          <option value="Eléctrico">Eléctrico</option>
          <option value="Diésel">Diésel</option>
          <option value="Gas">Gas</option>
          <option value="Híbrido">Híbrido</option>
        </select>
      </div>
    
      <div class="form-group">
        <label for="cilindrada">Cilindrada</label>
        <input type="number" class="form-control" id="cilindrada" name="cilindrada" required />
      </div>
    
      <div class="form-group">
        <label for="caja">Tipo de Caja</label>
        <select class="form-control" id="caja" name="caja">
          <option value="Selecciona">Selecciona</option>
          <option value="Automática">Automática</option>
          <option value="Manual">Manual</option>
        </select>
      </div>
    
      <div class="form-group">
        <label for="patente">Patente</label>
        <input type="text" class="form-control" id="patente" name="patente" required />
      </div>
    
      <div class="form-group">
        <label for="stock">Stock</label>
        <input type="number" class="form-control" id="stock" name="stock" required />
      </div>
    
      <div class="form-group">
        <label for="imagenes">Imágenes</label>
        <input type="file" class="form-control-file" id="imagenes" name="imagenes" multiple />
      </div>
    
      <h2>Datos de la Sucursal</h2>
    
      <div class="form-group">
        <label for="sucursalNombre">Nombre de la Sucursal</label>
        <input type="text" class="form-control" id="sucursalNombre" name="sucursalNombre" required />
      </div>
    
      <h3>Dirección de la Sucursal</h3>
    
      <div class="form-group">
        <label for="pais">País</label>
        <input type="text" class="form-control" id="pais" name="pais" required />
      </div>
    
      <div class="form-group">
        <label for="calle">Calle</label>
        <input type="text" class="form-control" id="calle" name="calle" required />
      </div>
    
      <div class="form-group">
        <label for="numero">Número</label>
        <input type="text" class="form-control" id="numero" name="numero" required />
      </div>
    
      <div class="form-group">
        <label for="localidad">Localidad</label>
        <input type="text" class="form-control" id="localidad" name="localidad" required />
      </div>
    
      <div class="form-group">
        <label for="provincia">Provincia</label>
        <input type="text" class="form-control" id="provincia" name="provincia" required />
      </div>
    
      <button type="submit" class="btn btn-primary">Agregar Vehículo</button>
    </form>
    
    )
}

export default AddVehicle