import { useRef, useState, useEffect } from "react";
import { usePopper } from "react-popper";

const Header =()=>{
    const userIcon = require('./imgs/user.png') //PLACE HOLDER
    const [isUserLoggedIn, setIsUserLoggedIn] = useState(true);
    const [isMenuOpen, setIsMenuOpen] = useState(false);


    //USER POPUP
    let [referenceElement,setReferenceEelement]=useState();
    let [popperElement, setPopperElement]=useState();
    let {styles,attributes}=usePopper(referenceElement,popperElement);

    const handleMenuToggle = () => {
        setIsMenuOpen(!isMenuOpen);
  };
    return (
    <header className="Header">

      <img src="logo.png" alt="Company Logo" className="logo" />
      
      <div>
            
            <select name="option" >
                <option value="puestos">Proyectos</option>
                <option value="personal">Personas</option>
            </select>
            <input type="search" class="buscador-header" placeholder="Buscar..." />
            <button type="submit" class="boton-header">Buscar</button>
        
      </div>

      <a href="/about-us">About Us</a>
      
      <div></div>
      <div className="user">
        {isUserLoggedIn ? (
          <div  onClick={handleMenuToggle} ref={setReferenceEelement}>
            <img src={userIcon} width="60" height="60"/>

            {isMenuOpen && ( //Cambiar por un componente entero o por links
              <ul>
              <li>
                <a href="/profile">Ver Perfil</a>
              </li>
              <li>
                <a href="/settings">Configuracion</a>
              </li>
              <li>
                <a href="/logout">Cerrar sesión</a>
              </li>
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