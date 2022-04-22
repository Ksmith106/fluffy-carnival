import React from 'react';
import Img from 'next/Image';
import {productCard, price, name, description} from './styles.module.scss'


const myLoader = ({ src, width, quality }) => {
  return `${src}?w=${width}&q=${quality || 75}`
}


function ProductCard ({children, product, checkoutRequest, ...props})  {
  const {productName, productPrice, productDescription, imageUrl, uid}= {...product}
  return (
       <aside className={productCard}>
         <header>
           <Img
              src={imageUrl} alt={productName} width='418' height='240' />        
         </header>
         
          <h2 className={name}>{productName}</h2>
          <p className={price}>${productPrice}</p>
          <p className={description}>{productDescription}</p>
          <footer>
            <form action="/api/chekout" method="POST">
              <input type="hidden" name="uid" value={uid}/>
              <button type="submit">Order Now</button>
            </form>
          </footer>
       </aside>
  )
}

export default ProductCard