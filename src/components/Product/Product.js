import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import React from 'react';
import  './Product.css';
import { faShoppingCart} from '@fortawesome/free-solid-svg-icons'
import { Link } from 'react-router-dom';


const Product = (props) => {
    // console.log(props.product.name);
    const{img,name, seller, price,stock,key}=props.product;
    return (
        <div class="product">
        <div>
            <img src={img} alt=""/>
        </div>
        <div class="Product-details">
           
            <h4 class="product-name"><Link to={"/product/"+key}>{name}</Link></h4>
            <br/>
            <p><small>by: {seller}</small></p>
            <p>${price}</p>
            <br/>
            <p><small>Only {stock} left in stock-Order soon</small></p>
{
            props.showbutton === true && <button onClick={()=>props.handleAddProduct(props.product)} class="main-button"><FontAwesomeIcon icon={faShoppingCart}/> add to cart</button>

}        </div>
        </div>
    );
};

export default Product;