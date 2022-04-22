import React from "react";
import { useRouter } from "next/router";
import {productPage, price, description, name} from './../../styles/product.page.module.scss'




function ProductPage({ product }) {
   console.log(product)
  return (
    <aside  className={productPage}>
      <img
        src={product.imageUrl}
        alt={product.productName}
        width="418"
        height="240"
      />
      <div>
      <ul>
        <li className={name}><h2>{product.productName}</h2></li>
        <li className={price}>${product.productPrice}</li>
        <li className={description}>{product.productDescription}</li>
      </ul>
      <footer>
        <form action="/api/products" method="POST">
          <input type="hidden" name="uid" value={product.uid} />
          <button type="submit">buy now</button>
        </form>
      </footer>
      </div>
    </aside>
  );
}

export async function getStaticPaths() {
  const res = fetch(
    "https://shoeshine8k-default-rtdb.firebaseio.com/products.json"
  );
  const products = await (await res).json();
  const paths = Object.keys(products).map((key) => ({ params: { key } }));

  return {
    paths,
    fallback: false, // false or 'blocking'
  };
}
export async function getStaticProps({ params }) {
  console.log(params);
  // `getStaticProps` is executed on the server side.
  const res = fetch(
    "https://shoeshine8k-default-rtdb.firebaseio.com/products.json"
  );
  const products = Object.values(await (await res).json());
  const product = products.find((product) => product.uid === params.key);

  return {
    props: {
      product,
      fallback: false,
    },
    revalidate: 60,
  };
}

export default ProductPage;
