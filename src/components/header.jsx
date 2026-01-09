import { Link } from "react-router";

function Header({cart}) {

    return (
        <div className="header">
            <h1>SHOPKILLA</h1>
            <nav>
                <ul>
                   <Link to="home"><button>HOME</button></Link> 
                    <Link to="shop"><button>SHOP</button></Link>
                    <Link to="cart"><button>CART</button></Link>
                </ul>
            </nav>
            
            <p>CART ICON, number of items in cart: {cart.length}</p>
        </div>
    )
}

export default Header;