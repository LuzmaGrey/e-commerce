import { useState, useEffect } from 'react'
// useState(valor) => [valor, func]

// {nombre: 'fede'  , apellido: 'fede'} = const

const ItemListContainer = ({ greeting }) => {
  const [ contador , actualizarContador ] = useState(0)
  const [ bool , actualizarBool ] = useState(true)

  const aumentar = () => {    
    actualizarContador(contador + 1) // 0 +1 , 1 + 1
  }  

  const cambiarBool = ()=>{
    actualizarBool(!bool)
  }

  
  useEffect(()=>{ // hook
      
      console.log('addEventListener - evento')


      return ()=>{
        console.log('desuscribir addEventListener')
      }
  })

  useEffect(()=>{ // hook usamos para las apis
    console.log('llamando apis 2') // guardo en un estado
  }, [])
  
  useEffect(()=>{ // hook usamos para las apis
    console.log('solo cuando cambie bool 3') // guardo en un estado
    // actualizarBool()
  }, [ bool, contador ])
  
  console.log('item List Container rendered 4')
 
  return (
    <div>
      { greeting }<br></br>
      { contador }
      <button onClick={aumentar}>Aumentar</button>
      <button onClick={cambiarBool}>cambiar estado</button>
    </div>
  )
}

export default ItemListContainer