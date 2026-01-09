import { useState } from "react"; 
import { useOutletContext } from "react-router";

function Cart () {

   const {cartList, increaseQty, decreaseQty} = useOutletContext(); 


    return (
        <>
        <h2>CART</h2>
        <ul>
            {cartList.map((item)=>{
                return (
                    <div key={item.id}>
                        <h3>{item.title}</h3>
                        <img src={item.image} />
                        <br />
                        <button onClick={() => increaseQty(item.id)}>+</button>
                        <p>Quantity:{item.quantity}</p>
                        <button onClick={() => decreaseQty(item.id)}>-</button>
                    </div>
                )
            })}
        </ul>
        </>
    )
}

export default Cart;