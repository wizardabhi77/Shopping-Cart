import { useState, useEffect } from "react";
import { useOutletContext } from "react-router";

let productList = [];

function Product () {

    const { addToCart } = useOutletContext();

    const [quantity,setQuantity] = useState({});
    const [loading,setLoading] = useState(true);

    useEffect(() => {
    fetch('https://fakestoreapi.com/products')
    .then(response => response.json())
    .then(data => {
        productList = [...data]
        setLoading(false);
    });

    },[])

    function handleChange(id, value) {

        setQuantity ({...quantity, 
            
            [id] : value
            
        });
    }
    
    if(loading) {
        return (<h3>LOADING...</h3>)
    }

    return (

        <div className="shop">
            {productList.map((product)=> {
               return(
                <div key={product.id} className="card">
                    <h3>{product.title}</h3>
                    <img src={product.image}  />
                    <p>Price:{product.price}</p>
                    <p>{product.description}</p>
                    <label htmlFor="quantity">NUMBER OF ITEMS:</label>
                    <input 
                    type="number" 
                    id="quantity" 
                    name="quantity" 
                    onChange = {(e) => handleChange(product.id, e.target.value)}
                    />
                    <br />
                    <br />
                    <button onClick={()=> addToCart(product,quantity[product.id])}>Add to CART</button>
                </div>
               ) 
            })}
            
            
        </div>
    )
}



export default Product;