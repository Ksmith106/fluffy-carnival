import {getProduct} from './getProduct'
const stripe = require('stripe')(process.env.STRIPE_SECRET_KEY);


export default async function handler(req, res) {
   
   
    
    res.json({name:"jim"})
 
      // const session = await stripe.checkout.sessions.create({
      //   line_items: [
      //     {
      //       name:productName,
      //       description: productDescription,
      //       images:[imageUrl],
      //       amount: productPrice*100,
      //       currency:"CAD",
      //       quantity:1

      //     },
      //   ],
      //   mode: 'payment',
      //   success_url: `${req.headers.origin}/?success=true`,
      //   cancel_url: `${req.headers.origin}/?canceled=true`,
      // });
 
      //  if(session){
      //    console.log('session created')
      //  // res.redirect(303, session.url);
      //  }else{
      //    res.status(200)
      //  }
    

    // }
    
   
    
}


 

// if (req.method === 'POST') {
//     try {
//       // Create Checkout Sessions from body params.
//       const session = await stripe.checkout.sessions.create({
//         line_items: [
//           {
//             name:"some type of shoe",
//             description:"best fucking shoes ever",
//             images:['https://firebasestorage.googleapis.com/v0/b/shoeshine8k.appspot.com/o/images%2Fproducts%2F8k4.jpg?alt=media&token=62ea4115-b17a-40a0-9baf-b907009341d5'],
//             amount: "1000",
//             currency:"CAD",
//             quantity:1

//           },
//         ],
//         mode: 'payment',
//         success_url: `${req.headers.origin}/?success=true`,
//         cancel_url: `${req.headers.origin}/?canceled=true`,
//       });
//       res.redirect(303, session.url);
//     } catch (err) {
//       res.status(err.statusCode || 500).json(err.message);
//     }
//   } else {
//     res.setHeader('Allow', 'POST');
//     res.status(405).end('Method Not Allowed');
//   }