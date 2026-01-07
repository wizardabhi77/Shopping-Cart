import { Link } from "react-router";

function Header() {

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
            
        </div>
    )
}

export default Header;