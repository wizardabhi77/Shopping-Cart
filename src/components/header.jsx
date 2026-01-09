import { Link } from "react-router";
import shopimg from '../assets/shop.svg'
import cartimg from '../assets/cart.svg'

function Header({cart}) {

    return (
        <div className="header">
            <div className="title">
                <img src={shopimg} alt="" />
                <h1>SHOPKILLA</h1>
            </div>
            
            <nav>
                <ul className="navbtn">
                   <Link to="home"><button>HOME</button></Link> 
                    <Link to="shop"><button>SHOP</button></Link>
                    <Link to="cart"><button className="cartbtn">
                        <img src={cartimg} alt="" className="icon"/>
                        <p className="carticon">{cart.length}</p>
                    </button></Link>
                </ul>
            </nav>
            
            
        </div>
    )
}

export default Header;