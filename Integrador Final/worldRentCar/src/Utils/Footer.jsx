import React from 'react'
import { Link } from 'react-router-dom/dist/umd/react-router-dom.development'

const Footer = () => {
    return(
        <section className='foot'>
            <div className='logo'>                
                <img src="" alt="Logo" />
            </div>
            <div className='redes'>
                <div>             
                <img src="../src/Redes/4.png" alt="facebook" />
                <img src="../src/Redes/3.png" alt="facebook hover" className='hoveri'/>
                </div> 
                <div>
                <img src="../src/Redes/5.png" alt="instagram" />
                <img src="../src/Redes/6.png" alt="instagram hover" className='hoveri' />
                </div>  
                <div>
                <img src="../src/Redes/1.png" alt="whatsapp" />
                <img src="../src/Redes/2.png" alt="whatsapp hover" className='hoveri' />
                </div>
                <div>
                <img src="../src/Redes/8.png" alt="tik tok" />
                <img src="../src/Redes/7.png" alt="tik tok hover" className='hoveri' />
                </div>
            </div>
            <div><h2>Contactanos</h2></div>
        </section>
    )
  
}

export default Footer