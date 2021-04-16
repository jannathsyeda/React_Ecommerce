import React from 'react';
import { useParams } from 'react-router-dom';
import fakeData from '../../fakeData';
import Product from '../Product/Product';

const ProductDetails = (props) => {
   const {productid}=useParams();
   const product=fakeData.find(pd=>pd.key===productid);
    return (
        <div>
           <h1>This {productid} is comming soon..</h1>
     <hr></hr>
<Product  showbutton={false} product={product}></Product>
        </div>
    );
};

export default ProductDetails;