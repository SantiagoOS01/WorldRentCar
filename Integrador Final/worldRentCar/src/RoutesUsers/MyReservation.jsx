import React from 'react'

const MyReservation = () => {

    return(
        <section className='mis-reservas'>
            <table class="table table-striped">
                <thead>
                    <tr>
                    <th>Foto</th>
                    <th>Nombre</th>
                    <th>Fecha de reserva</th>
                    <th>Precio</th>
                    </tr>
                </thead>
                <tbody>
                    <tr>
                    <td><img src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcR4ntE-PvfSREpY0D5cYAl84RqBWp2SAS0XmA&usqp=CAU" alt="Foto del producto"/></td>
                    <td>Producto 1</td>
                    <td>2023-07-20</td>
                    <td>$100</td>
                    </tr>
                    <tr>
                    <td><img src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcR4ntE-PvfSREpY0D5cYAl84RqBWp2SAS0XmA&usqp=CAU" alt="Foto del producto"/></td>
                    <td>Producto 2</td>
                    <td>2023-07-21</td>
                    <td>$200</td>
                    </tr>
                    <tr>
                    <td><img src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcR4ntE-PvfSREpY0D5cYAl84RqBWp2SAS0XmA&usqp=CAU" alt="Foto del producto"/></td>
                    <td>Producto 3</td>
                    <td>2023-07-22</td>
                    <td>$300</td>
                    </tr>
                </tbody>
            </table>

        </section>
    )
  
}

export default MyReservation