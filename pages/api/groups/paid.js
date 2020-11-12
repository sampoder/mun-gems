const stripe = require('stripe')(process.env.STRIPE_API_KEY);

export default async (req, res) => {
  const {
    query: { amount },
  } = req
  const session = await stripe.checkout.sessions.create({
    payment_method_types: ['card'],
    line_items: [
      {
        name: 'Delegation Payment For MUN @ GEMS',
        description: 'A different kind of MUN conference, all money goes to a TBD charity.',
        images: ['https://cloud-rili0t7tg.vercel.app/82225120_1255964828124592_8113147521939543579_n.jpg'],
        amount: amount*500, // Cents
        currency: 'sgd',
        quantity: 1
      }
    ],
    success_url: 'https://docs.google.com/forms/d/e/1FAIpQLSeRVHLBlWjNt4J25oU3zyLWMvCcFj8eUZV7Yg_HHtokOqYdLg/viewform?usp=pp_url&entry.1340452357={CHECKOUT_SESSION_ID}',
    cancel_url: 'https://mun-gems.vercel.app'
  });
  console.log(session)
  
  res.send(`<!DOCTYPE html><script src="https://js.stripe.com/v3/"></script><script>var stripe = Stripe('pk_live_51HYoodLM7aPhXtdi9rSpiDyBgJjZ9KJ9PvelwRnXxbkw9bK4pahoaOStrM52SSSZwC8BjaXbUzU3Igpw2aB6H5ZS00HRLDXppp');
  stripe.redirectToCheckout({
    sessionId: '${session.id}',
  })</script>`)
           
};
