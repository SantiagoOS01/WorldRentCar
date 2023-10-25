import React from 'react'

const SearchBar = () => {
  return (
    <div className='buscador'> 
    <div>      
    <h1>Busca tu mejor opción</h1>
    </div>
    <div className='form-search'>
    <form action="busqueda.php" method="GET"/>
        <label for="dia-inicio">Día de Inicio:</label>
        <input type="date" name="dia-inicio" id="dia-inicio"/>

        <label for="dia-entrega">Día de Entrega:</label>
        <input type="date" name="dia-entrega" id="dia-entrega"/>

        <label for="tipo-auto">Tipo de Auto:</label>
        <select name="tipo-auto" id="tipo-auto">
            <option value="sedan">Sedan</option>
            <option value="suv">SUV</option>
            <option value="deportivo">Deportivo</option>
            <option value="camioneta">Camioneta</option>
            
        </select>

        <label for="pais">País:</label>
        <select name="pais" id="pais">
            <option value="Argentina">Argentina</option>
            <option value="Colombia">Colombia</option>
            <option value="Uruguay">Uruguay</option>
        </select>

        <label for="localidad">Localidad:</label>
        <input type="text" name="localidad" id="localidad"/>

        <input type="submit" value="Buscar" className='buscarbtn'/>    
    </div>
    </div>
  )
}

export default SearchBar;
