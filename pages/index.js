import Head from 'next/head'
import PageTitle from "../components/PageTitle/PageTitle";
import ProductCard from "../components/ProductCard/ProductCard";
import {loadStripe} from "@stripe/stripe-js";
import {pane} from "./../styles/home.module.scss";
import {Button} from "../components/Button"

 
 
export default function Home(props) {

    const products = props.products.slice(0,3);
   


const stripPromise = loadStripe (process.env.NEXT_PUBLIC_STRIPE_PUBLISHABLE_KEY)

     return(
          <>
          <Head>
          <meta name="viewport" content="width=device-width, initial-scale=1.0"/>
          <meta name="description" content="Online Coffee storefront free shipping"/>
          <meta name="keywords" content="Coffee, top of the morning, black, blonde, kicking horse"/>
           <title>Coffeeshop</title>
          </Head>
           <PageTitle tagline="Coffee Selections" title="Everything Coffee"/>
           <main className={pane}>
               {  products.map(product=> <ProductCard  key={product.uid}   product={product}/>)}
           </main>
          </>
     )
}




export async function getStaticProps(){
  
    const res = await fetch('https://kennethsstorefront-default-rtdb.firebaseio.com/coffee.json')
    const productData = await res.json();
    const products = Object.values(productData)
 return {
      props:{
           products
           
      },
      revalidate: 60,
 }
}

 