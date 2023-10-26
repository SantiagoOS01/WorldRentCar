import React from 'react'

const CarCards = () => {
  return (
    <div class="card">                    
        <img src="" alt="Imagen del artículo" />
        <div className='car-details'>
        <h3>Modelo: </h3>
        <p>Marca:</p>
        <p>Precio: </p>
        </div>
        <div className='card-buttons'>
        <button>Reservar</button>
        <button>Más Detalles</button>
        </div>
     </div>
  )
}

export default CarCards