import '../css/Navbar.css'
import imagenSRC from '../assets/logo-shop-src.png'
import CartWidget from './CartWidget'

const Navbar = () => {
    return(
        <nav style={{display:"flex", justifyContent:'space-around', alignItems:'center', padding:'2rem', color:"black", backgroundColor:'grey'}}>
            <a className="nav-link" href="">
                {/* imagen en public */}
                <img src='../logo-shop.png' alt='logo' className='logo'/>
                {/* imagen de src */}
                {/* <img src={imagenSRC} alt='logo' className='logo'/> */}
            </a>
            <a  className="nav-link" href="">Nuevos</a>
            <a  className="nav-link" href="">Mas vendidos</a>
            <a  className="nav-link" href="">Ofertas</a>
            <CartWidget/>
        </nav>
    )
}

export default Navbar