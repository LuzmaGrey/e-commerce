import CartWidget from '../NavBar/CartWidget'
import './Menu.css'
function Menu({ children }) { // componente
    console.log(children)
    return (
        <>
            <nav>
                <p>Pokémon</p>
                <p>Pokémon</p>
                <p>Specials</p>

                <CartWidget />

            </nav>
            {children}
        </>
    )
}

export default Menu