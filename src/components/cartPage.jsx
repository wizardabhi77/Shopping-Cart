import { useState } from "react"; 
import { useOutletContext } from "react-router";

function Cart () {

   const {cartList, increaseQty, decreaseQty} = useOutletContext(); 


    return (
        <>
        <h2>CART</h2>
        <ul className="cart">
            {cartList.map((item)=>{
                return (
                    <div key={item.id} className="item">
                        <h3>{item.title}</h3>
                        <img src={item.image} />
                        <br />
                        <p>Quantity:</p>
                        <button onClick={() => decreaseQty(item.id)}>-</button>
                        <p>{item.quantity}</p>
                        <button onClick={() => increaseQty(item.id)}>+</button>
                        
                    </div>
                )
            })}
        </ul>
        </>
    )
}

export default Cart;