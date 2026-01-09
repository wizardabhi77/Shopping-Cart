import { useState, useEffect } from 'react'


import './App.css'
import Header from './components/header';


import { Outlet } from 'react-router';



function App() {
  
  
  const [cartList, setCartList] = useState([]);

  


  return (
    <>
      
      <Header cart={cartList}/>
      <Outlet context={{addToCart, cartList, increaseQty, decreaseQty}}/>
      
    </>
  );

  function addToCart(product,quantity) {

    product = {...product, "quantity" : quantity};

    setCartList([...cartList,product]);
  }

  function increaseQty (id) {

    setCartList((prev)=> 
      prev.map((item) => 

        item.id === id ?
        {...item, quantity : Number(item.quantity)+1}
        : item
        
      )
    )
  }

  function decreaseQty (id) {

    setCartList((prev)=> 
      prev.map((item) => 

        item.id === id ?
        {...item, quantity : Number(item.quantity)-1}
        : item
        
        
      )
      .filter((item) => Number(item.quantity) > 0)
    )
  }
}



export default App
