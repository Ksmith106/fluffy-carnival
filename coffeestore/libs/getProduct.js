async function getProducts(uid){
  
    const res = await fetch(`https://kennethsstorefront-default-rtdb.firebaseio.com/${uid}.json`)
    const data = await res.json()
    return  data
    
}

export {getProducts}

