import React, { useState } from 'react';

import fakeData from '../../fakeData';
import Product from '../Product/Product';
import  './Shop.css';
import Cart from '../Cart/Cart';
import { addToDatabaseCart } from '../../utilities/databaseManager';



const Shop = () => {
    const first10 =fakeData.slice(0,10);
    const [products, setProducts]= useState(first10);
    const [cart, setCart]=useState([]);
    const  handleAddProduct=(id)=>{
        // console.log('product added',id);
        const newCart=[...cart ,id];
        setCart(newCart);
        const sameProduct=newCart.filter(pd=>pd.key=== id.key)
        const count = sameProduct.length;
        addToDatabaseCart(id.key,count);

    }
    return (
        <div class="shop-container">
            <div class="product-container">
<ul>
{products.map(pd=>
<Product showbutton={true}
product={pd}
handleAddProduct={handleAddProduct}
  
></Product>)}
</ul>
            </div>
            <div class="cart-container">
            
            <Cart cart={cart}></Cart>


            </div>
        </div>
    );
};

export default Shop;
