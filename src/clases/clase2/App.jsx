import { useState } from 'react'
import logo from './logo.svg'
import './App.css'

function App() {
    const [count, setCount] = useState(0)
  
    // let condition = true
    // let resultado = ''
    // if (condition) {
    //     resultado = 'verdadero'
    // } else {
    //     resultado = 'falso'
    // }

    // console.log('El resultado es:  ', resultado)

    // console.log(`El resultado es ${ condition ? 'verdadero' : 'falso'}`)

    // const array = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10]
    // const once = 11

    // const newArray = [ ...array, once ]
    // console.log(newArray)
    

    let campoId = '_id'

    const objeto = {
        nombre: 'Juan',
        apellido: 'Perez',
        ['persona' + campoId] : '6464646546',
        edad: 32
    }
    // let nombre = objeto.nombre

    const { nombre: firstName, edad = 30 } = objeto
 
    
    console.log(edad)


    return (
        <div className="App">
        <header className="App-header">
            <img src={logo} className="App-logo" alt="logo" />
            <p>Hello Vite + React!</p>
            <p>
            <button type="button" onClick={() => setCount((count) => count + 1)}>
                count is: {count}
            </button>
            </p>
            <p>
            Edit <code>App.jsx</code> and save to test HMR updates.
            </p>
            <p>
            <a
                className="App-link"
                href="https://reactjs.org"
                target="_blank"
                rel="noopener noreferrer"
            >
                Learn React
            </a>
            {' | '}
            <a
                className="App-link"
                href="https://vitejs.dev/guide/features.html"
                target="_blank"
                rel="noopener noreferrer"
            >
                Vite Docs
            </a>
            </p>
        </header>
        </div>
    )
}

export default App
