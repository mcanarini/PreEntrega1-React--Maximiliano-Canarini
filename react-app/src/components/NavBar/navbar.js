import cart from './Assets/LogoCanarino.png'
import CartWidget from "../CartWidget/CartWidget"

const NavBar = ()=>{
    return(
        <nav className="navBar">
            <img className="Logo" src= {cart} alt="LogoCanarino" />
            <div className="navBtn"> 
            <button>Remeras</button>
            <button>Buzos</button>
            <button>Pantalones</button>
            </div>
            <CartWidget />
        </nav>
    )
}

export default NavBar
