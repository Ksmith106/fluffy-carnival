import { getProductData } from './libs/getProductData';

const stripe = require('stripe')(process.env.STRIPE_SECRET_KEY);


export default async function handler(req, res) {
  getProductData()
  if (req.method === 'POST') {
    try {

      const session = await stripe.checkout.sessions.create({
        line_items: [
          {
            name:"The Best dam coffee selection in the world",
            description:"best selection of coffee ever",
            images:['https://firebasestorage.googleapis.com/kennethsstorefront.appspot.com/o/images1850.jpeg?alt=1850coffee'],
            amount: "50",
            currency:"CAD",
            quantity:1

          },
        ],
        mode: 'payment',
        success_url: `${req.headers.origin}/?success=true`,
        cancel_url: `${req.headers.origin}/?canceled=true`,
      });
      res.redirect(303, session.url);
    } catch (err) {
      res.status(err.statusCode || 500).json(err.message);
    }
  } else {
    res.setHeader('Allow', 'POST');
    res.status(405).end('Method Not Allowed');
  }
}