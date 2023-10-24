import React from 'react'

const AddVehicle = () => {
    return(
        <form action="procesar-formulario.php" method="post" enctype="multipart/form-data">
            <div class="form-group">
                <label for="nombre">Nombre</label>
                <input type="text" class="form-control" id="nombre" name="nombre" required />
            </div>

            <div class="form-group">
                <label for="año">Año</label>
                <input type="number" class="form-control" id="año" name="año" required />
            </div>

            <div class="form-group">
                <label for="categoria">Categoría</label>
                <select class="form-control" id="categoria" name="categoria">
                <option value="Selecciona">Selecciona</option>
                <option value="Autos">Autos</option>
                <option value="Motos">Motos</option>
                <option value="Camionetas">Camionetas</option>
                <option value="van">van</option>
                </select>
            </div>

            <div class="form-group">
                <label for="precio">Precio</label>
                <input type="number" class="form-control" id="precio" name="precio" required />
            </div>

            <div class="form-group">
                <label for="imagen">Imagen</label>
                <input type="file" class="form-control-file" id="imagen" name="imagen" />
            </div>

            <button type="submit" class="btn btn-primary">Enviar</button>
        </form>

    )
}

export default AddVehicle