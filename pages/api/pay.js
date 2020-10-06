const stripe = require('stripe')(process.env.STRIPE_API_KEY);

export default async (req, res) => {
  const session = await stripe.checkout.sessions.create({
    payment_method_types: ['card'],
    line_items: [
      {
        name: 'Serverless Functions – The Complete Guide',
        description: '100 page e-book on serverless functions.',
        images: ['https://site.com/image.png'],
        amount: '5000', // Cents
        currency: 'usd',
        quantity: 1
      }
    ],
    success_url: 'https://mun-gems.vercel.app?session_id={CHECKOUT_SESSION_ID}',
    cancel_url: 'https://mun-gems.vercel.app'
  });

  return res.status(200).json(session);
};
