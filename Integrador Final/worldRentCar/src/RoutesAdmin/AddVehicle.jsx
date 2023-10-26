import React from 'react'

const AddVehicle = () => {
    return(
        <form action="procesar-formulario.php" method="post" enctype="multipart/form-data">
            <div class="form-group">
                <label for="modelo">modelo</label>
                <input type="text" class="form-control" id="modelo" name="modelo" required />
            </div>

            <div class="form-group">
                <label for="marca">marca</label>
                <input type="text" class="form-control" id="marca" name="marca" required />
            </div>

            <div class="form-group">
                <label for="precio">precio</label>
                <input type="number" class="form-control" id="precio" name="precio" required />
            </div>

            <div class="form-group">
                <label for="disponibilidad">disponibilidad</label>
                <select class="form-control" id="disponibilidad" name="disponibilidad">
                <option value="disponible">disponible</option>
                <option value="No-disponible">No disponible</option>
                </select>
            </div>

            <div class="form-group">
                <label for="tipo">tipo</label>
                <select class="form-control" id="tipo" name="tipo">
                <option value="Selecciona">Selecciona</option>
                <option value="Autos">Autos</option>
                <option value="Motos">Motos</option>
                <option value="Camionetas">Camionetas</option>
                <option value="van">van</option>
                </select>
            </div>

            <div class="form-group">
                <label for="pasajeros">cantidad de pasajeros</label>
                <input type="number" class="form-control" id="pasajeros" name="pasajeros" required />
            </div>


            <div class="form-group">
                <label for="descripcion">descripcion</label>
                <textarea name="descripcion" className='form-control' id='descripcion'></textarea>
            </div>

            <div class="form-group">
                <label for="motor">motor</label>
                <select class="form-control" id="motor" name="motor">
                <option value="seleciona">seleciona</option>
                <option value="electrico">electrico</option>
                <option value="diesel">diesel</option>
                <option value="gas">gas</option>
                <option value="hibrido">hibrido</option>

                </select>
            </div>

            <div class="form-group">
                <label for="cilindrada">cilindrada</label>
                <input type="number" class="form-control" id="cilindrada" name="cilindrada" required />
            </div>

            <div class="form-group">
                <label for="caja">caja</label>
                <select class="form-control" id="caja" name="caja">
                <option value="seleciona">seleciona</option>
                <option value="automatica">automatica</option>
                <option value="manual">manual</option>
                </select>
            </div>

            <div class="form-group">
                <label for="patente">patente</label>
                <input type="text" class="form-control" id="patente" name="patente" required />
            </div>

            <div class="form-group">
                <label for="imagen">Imagen</label>
                <input type="file" class="form-control-file" id="imagen" name="imagen" />
            </div>

            <button type="submit" class="btn btn-primary">Agregar vehiculo</button>
        </form>

    )
}

export default AddVehicle