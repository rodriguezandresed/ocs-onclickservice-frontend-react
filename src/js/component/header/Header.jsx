import React from 'react';
import './header.css';
import people from '../../../assets/people.png'
import trabajador from '../../../assets/trabajador.png'

export const Header = () => {
  return (
    <div className='ocs__header section__padding' id='home'>
        <div className="ocs__header-content">
            <h1 className='gradient__text'>La ayuda que necesitas a solo un click de distancia</h1>
            <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Quod expedita unde magni porro itaque dignissimos adipisci accusantium rerum ratione, velit debitis. Ad pariatur eveniet atque ea hic consequuntur, similique autem!</p>
            <div className="ocs__header-content__input">
                <input type='email' placeholder='Coloca tu Direccion de Correo'/>
                <button type="button">Comienza Aqui</button>
            </div>

            <div className="ocs__header-content__people">
                <img src={people}/>
                <p>1.600 personas se han unido a OCS en las ultimas 24 horas</p>
            </div>
        </div>
        <div className="ocs__header-image">
                <img src={trabajador} alt="trabajador"/>
        </div>
    </div>
  )
}
