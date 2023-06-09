import { useState } from "react"

const UserPreview=({users})=>{
    const avi = require('./imgs/avi.png'); //Placeholder, nuevamente lmao

    //ARREGLO QUE SE USA COMO CONTEXTO/PLACEHOLDER, SE DEFINIRA SEGUN LO QUE RETORNE LA BASE DE DATOS
    //Crear funcion que retorne un arreglo a futuro dependiendo del tipo de busqueda

    

    return(
        <main>
            {users.length ? (
                <ul >
                
                {users.map((user)=>(  //El map (supongo) hace un bucle for por cada items que esté en el arreglo, e item es el nombre de la instancia
                    <li  key={user.id}>
                        <div className="userPreview">
                            <div>
                                <img src={avi} width="60" height="60" border-radius="50%"/>
                                <p>{user.username}</p>
                            </div>

                            <div>
                                {user.bio} 
                            </div>

                            <div>
                                <img src={user.country} width="30" height="30"/>
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