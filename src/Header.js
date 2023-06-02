import { useRef, useState, useEffect } from "react";

const Header =()=>{
    const userIcon = require('./imgs/user.png') //PLACE HOLDER
    const [isUserLoggedIn, setIsUserLoggedIn] = useState(true);
    const [isMenuOpen, setIsMenuOpen] = useState(false);

    const handleMenuToggle = () => {
        setIsMenuOpen(!isMenuOpen);
  };
    return (
    <header className="Header">

      <img src="logo.png" alt="Company Logo" className="logo" />
      
      <div>
            
            <select name="option" >
                <option value="puestos">Proyectos</option>
                <option value="personal">Personal</option>
            </select>
            <input type="search" class="buscador-header" placeholder="Buscar..." />
            <button type="submit" class="boton-header">Buscar</button>
        
      </div>

      <a href="/about-us">About Us</a>
      
    
      <div className="user">
        {isUserLoggedIn ? (
          <div  onClick={handleMenuToggle}>
            <img src={userIcon} width="60" height="60"/>

            {isMenuOpen && ( //Cambiar por un componente entero
              <ul className="menu">
                <li>Profile</li>
                <li>Settings</li>
                <li>Logout</li>
              </ul>
            )}
          </div>
        ) : ( //NO REGISTRADO
          <div>
            <button class="boton-header">Acceder</button>
            <button class="boton-header">Registrarse</button>
          </div>
        )}
      </div>
    </header>

    );
}
export default Header