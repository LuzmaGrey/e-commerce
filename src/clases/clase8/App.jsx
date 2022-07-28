import {useEffect, lazy, Suspense } from 'react'

import Menu from './components/Menu/Menu'
// import ComponenteContenedor from './containers/ComponenteContenedor'
// import logo from './logo.svg'
import NavBar from './components/NavBar/NavBar'
import ItemListContainer from './containers/ItemListContainer/ItemListContainer'
// import ItemDetailContainer from './containers/ItemDetailContainer/ItemDetailConteiner'
// import Formulario from './components/Formulario/Formulario'


import './App.css'
import 'bootstrap/dist/css/bootstrap.min.css';
import CartContainer from './containers/CartContainer/CartContainer'

import { BrowserRouter, Routes, Route, Navigate } from 'react-router-dom'

const ItemDetailContainer = lazy(() => import('./containers/ItemDetailContainer/ItemDetailConteiner'))

// BrowserRouter nos da el contexto para poder usar funciones de react router dom

function App() {  // eslint-disable-line 
    let saludo  =  'Hola soy ItemListContainer' // estado de app
       
    return (
        <BrowserRouter>
                <div className="App">
                    <NavBar />          
                    <Routes>
                        <Route index path='/' element={<ItemListContainer />} />
                        <Route index path='/categoria/:categoriaId' element={<ItemListContainer />} />
                        
                        <Route path='/detalle/:productId' element={
                            <Suspense fallback={<div>Cargando...</div>}>
                                <ItemDetailContainer />
                            </Suspense>
                        } />
                        <Route path='/cart' element={<CartContainer />} /> 
                        {/* <Route path='/error' element={<404NotFound />} />  */}

                        <Route path='*' element={<Navigate to='/' />} /> 
                    </Routes>
                </div>
        </BrowserRouter>
    )
}

export default App
