function generate_subscription(client_id) {
    const stripe = require('stripe');
    const STRIPE_SECRET_KEY = process.env.STRIPE_SECRET_KEY;

    const Stripe = stripe(STRIPE_SECRET_KEY);

    const addNewCustomer = async (email) => {
        return await Stripe.customers.create({
            email, description: 'New Customer'
        })
    }

    const getCustomerByID = async (id) => {
        return await Stripe.customers.retrieve(id)
    }

    module.exports = {
        addNewCustomer, getCustomerByID
    }


}