import { useEffect, useState } from "react"

const ItemListContainer = () => {
    const [ personajes, actualizarPersonaje ] =  useState([])

    // estado

    //https://pokeapi.co/api/v2/pokemon/?offset=20&limit=10
    const getFecht = async () => {
            try {
                const resp = await fetch('https://rickandmortyapi.com/api/character/1,2,3,4,5,6,7,8,9')
                const dataParse = await resp.json()
                actualizarPersonaje(dataParse)
            } catch (error) {
                console.log(error)
            }
            
    }
        
    

    useEffect(()=>{
        getFecht()
    },[])

  
    console.table(personajes)
    return (
        //[<li>{Ricky Sanchez}</li>, <li>{personaje.name}</li>,<li>{personaje.name}</li>,...]
        <ul>
            { personajes.map(personaje => <li key={personaje.id}>{personaje.name}</li> ) }
        </ul>
    )
}

export default ItemListContainer