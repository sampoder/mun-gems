const stripe = require('stripe')(process.env.STRIPE_API_KEY);

export default async (req, res) => {
  const session = await stripe.checkout.sessions.create({
    payment_method_types: ['card'],
    line_items: [
      {
        name: 'Ticket to MUN @ GEMS',
        description: 'A different kind of MUN conference, all money goes to the Rainbow Center.',
        images: ['https://cloud-rili0t7tg.vercel.app/82225120_1255964828124592_8113147521939543579_n.jpg'],
        amount: '500', // Cents
        currency: 'sgd',
        quantity: 1
      }
    ],
    success_url: 'https://docs.google.com/forms/d/e/1FAIpQLSeRVHLBlWjNt4J25oU3zyLWMvCcFj8eUZV7Yg_HHtokOqYdLg/viewform?usp=pp_url&entry.1340452357={CHECKOUT_SESSION_ID}',
    cancel_url: 'https://mun-gems.vercel.app'
  });

  return res.status(200).json(session);
};
