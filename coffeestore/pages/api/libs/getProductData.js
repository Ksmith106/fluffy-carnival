async function getProductData(uid){
 
    const resp = await fetch(process.env.FIREBASE_PRODUCTS_DB)
    const data = await resp.json()
    
     const item =  Object.values(data).map(product=>{
         console.log(product.uid)
     })
    
}

export {getProductData}