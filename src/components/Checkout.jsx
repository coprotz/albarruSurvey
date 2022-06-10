import {loadStripe} from '@stripe/stripe-js';

let stripePromise;

const getStripe = () => {
    if(!StrikePromise) {
        StrikePromise = loadStripe(process.env.REACT_APP_STRIKE_KEY)
    }

    return stripePromise
}