import { useState } from "react"

const UserPreview=()=>{
    const avi = require('./imgs/avi.png'); //Placeholder, nuevamente lmao

    //ARREGLO QUE SE USA COMO CONTEXTO/PLACEHOLDER, SE DEFINIRA SEGUN LO QUE RETORNE LA BASE DE DATOS
    //Crear funcion que retorne un arreglo a futuro dependiendo del tipo de busqueda
    const [items,setItems]=useState([
        {
            id:1 ,
            icon: "icon1",
            username: "Fari",
            bio: "Desarrollador Godot sin experiencia previa",
            country: "https://flagcdn.com/cl.svg"
        },

        {
            id: 2,
            icon: "icon2",
            username: "juan",
            bio: "Pixel artist que tambien anima.",
            country: "https://flagcdn.com/us.svg"
        },

        {
            id: 3,
            icon: "icon2",
            username: "Pagliaccia",
            bio: "RPG Maker developer con mas de 5 juegos hechos.",
            country: "https://flagcdn.com/jp.svg"
        }
        
       
        
    ])

    return(
        <main>
            {items.length ? (
                <ul >
                
                {items.map((item)=>(  //El map (supongo) hace un bucle for por cada items que esté en el arreglo, e item es el nombre de la instancia
                    <li  key={item.id}>
                        <div className="userPreview">
                            <div>
                                <img src={avi} width="60" height="60" border-radius="50%"/>
                                <p>{item.username}</p>
                            </div>

                            <div>
                                {item.bio} 
                            </div>

                            <div>
                                <img src={item.country} width="30" height="30"/>
                            </div>
                        </div>
                        
                    </li>
                ))}
            </ul>
            ):(
                <div>
                    <p>No se encontró lo que buscabas...</p> 
                    <p>imagen de monita china disculpandose</p>
                </div>
                
            )}

        </main>
    )

}
export default UserPreview