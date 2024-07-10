import React from 'react';

import { data } from "../../constants";
import './products.css';

const ProductCard = ({product: {imgUrl, title, subtitle, price}}) => (
  <div className='app__products-card'>
  <img src={imgUrl} alt="award"/>
  <div className='app_products-card_content'>
  <p className='p__cormorant'>{title}</p>
  <p className='p__opensans'>{subtitle}</p>
  <p className='p__cormorant'>{price}</p>
  <button type="button" className="custom__button">ADD TO CART</button>
  </div>
  </div>
)

const Products = () => (
  <div className='flex-center section__padding' id='product'>
    <h1 className='headtext__cormorant flex__center'>Our Products</h1>

    <div className='app__products'>
    {data.products.map((product)=> <ProductCard product={product} key={product.title}/>)}
    </div>
  </div>
);

export default Products;