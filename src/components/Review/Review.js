import React, { useEffect, useState } from "react";
import {
  getDatabaseCart,
  removeFromDatabaseCart,
} from "../../utilities/databaseManager";
import Cart from '../Cart/Cart';

import fakeData from "../../fakeData";
import ReviewItem from "../ReviewItem/ReviewItem";
 



const Review = () => {

  const removeProduct=(productKey)=>{
    const newCart = cart.filter(pd=>pd.key !==productKey);
    setCarts(newCart);
    removeFromDatabaseCart(productKey);
  }

  const styleSheet={
   
    textAlign:'center',
    marginBottom:'100px'
  }
  const [cart, setCarts ] = useState([]);

  useEffect(() => {
    const saveCart = getDatabaseCart();
    const productKeys = Object.keys(saveCart);
    const cartProducts = productKeys.map((key) => {
      const product = fakeData.find((pd) => pd.key === key);
      product.quantity = saveCart[key];
      return product;
    });


setCarts(cartProducts)  },[]);




  return( 
  
 
        
        


<div class="shop-container">
<div class="product-container">
<h1 style={styleSheet}> Cart Items: {cart.length}</h1>
        {
          cart.map(pd=><ReviewItem product={pd} key={pd.key} removeProduct={removeProduct}></ReviewItem>)
        }

  </div>
  <div class="cart-container">
            
            <Cart cart={cart}></Cart>


            </div>



</div>  
  );

  
};




export default Review;
