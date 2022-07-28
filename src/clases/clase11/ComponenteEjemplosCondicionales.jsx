import { useState, useEffect } from "react";
import { Navigate } from "react-router-dom";


 
export const ControlledInput = () => {
    const [dataForm, setDataForm] = useState( {email: '', nombre: '' } );    

    const handleOnChange = (e) =>{     

        setDataForm( {...dataForm,
            [e.target.name]: e.target.value
        } )

        // console.log(e.target.name)
        // console.log(e.target.value)
    }

    console.log(dataForm)
    return (
        <>
            <input
                type="text"
                name='email'
                value={dataForm.email}
                onInput={handleOnChange} /// addEventListener('evento', fn)
                placeholder="mail"
            /><br></br>
            <input
                type="text"
                name='nombre'
                value={dataForm.nombre}
                onChange={handleOnChange}
                placeholder="nombre"
            />
           
        </>
    );
  };










  
  
export  function LoadingComponent() {
    const [loading, setLoading] = useState(true);
  
    useEffect(() => {

        setTimeout(() => {
            setLoading(false);
        }, 5000)        
    }, []);


    
    return <>
        { loading ? <h2>Cargando ...</h2> : <h3>Productos cargardos!</h3>}
    </>;
  }











  
export  function TextComponent({ user = true, children }) {
    const token = localStorage.getItem('token')
    
    if (!token) {        
        return <Navigate to='/' />
    }

  
    return (
        <>  
            {children}
            {/* <h2>Ud esta logueado puede ver la pág.</h2> */}
        </>
    )
  }








//   condicion ? :  => if else ,    condicion && => if   ,    condicion ||  or


export  function TextComponent2({ condition = true }) {

    // Llamado context 
    return (
        <>
            {condition && <button>Ud esta logueado puede ver este boón.</button>}

            {!condition && <button>Ud no esta logueado, NO puede ver este botón.</button>}

        </>
    );
  }

// condicion ? :(si no), condición && accion si, condicion  || acciones







export  function TextComponent3({ condition = true }) {

    return (
        <>
            <h2> { condition ? 'Hay Stock' : 'No Hay stock'} </h2>   
            {/* condition ? <h2>texto</h2>: <h2>otro texto</h2>                      */}
        </>
    )
}









 export function TextComponent4({ condition = true }) {
    const estilo = { color: condition ? "green" : "red" }

    return (
        <>
            <h2 style={ estilo }>
                Ud esta logueado puede ver la pág.
            </h2>
        </>
    );
  }













  
export  function TextComponent5({ stock = 3 }) {


    return (
        <>
            <h2 className={ (stock !== 0) ? "alert alert-success" : "alert alert-danger" }>
                stock
            </h2>
        </>
    );
}

















export  function TextComponent6( { condition = true, otro='mt-5'}  ) {
    return (
        <>
            <h2
                className={ `${condition === true ? "alert alert-success" : "alert alert-danger"} ${otro || ""} `}
            >
                Ud esta logueado puede ver la pág.
            </h2>
        </>
    );
}












export function TextComponent7({ condition = false , otro = "mt-5" }) {
    
    
    const props = condition ?
            {
                className: `alert alert-success ${otro || ""}`,
                style: {color: 'red'},
                title: "Este es el titulo si la condicion es verdadera",
                nombre: 'Fede'
            }
        : 
            {
                className: `alert alert-warning ${otro || ""}`,
                style: {color: 'green'},
            }

            
    
      return (
        <>    
            {/* className= btn btn-success style=   */}
            <h2 {...props} >Ud esta logueado puede ver la pág.</h2>
        </>
    )
  }