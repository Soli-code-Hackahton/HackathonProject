async function generate_instant_payment_url() {
    const stripe = require('stripe')(process.env.STRIPE_SECRET_KEY);

    const paymentLink = await stripe.paymentLinks.create({
        line_items: [
            {
                price: 'price_1NJBb02eZvKYlo2CbPDPeo6K',
                quantity: 1,
            },
        ],
    });

    return paymentLink.url;
}

async function generate_price_id(product_name, product_price_in_usd) {
    const stripe = require('stripe')(process.env.STRIPE_SECRET_KEY);

    const price = await stripe.prices.create({
        unit_amount: product_price_in_usd * 100,
        currency: 'usd',
        product_data: {
            name: product_name,
        },
    });

    return price.id;
}