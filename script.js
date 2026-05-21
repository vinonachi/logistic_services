// Replace with your own Stripe publishable key
const stripe = Stripe('your-publishable-key');

function subscribe(plan) {
    fetch('/create-checkout-session', {
        method: 'POST',
        headers: {
            'Content-Type': 'application/json',
        },
        body: JSON.stringify({ plan: plan }),
    })
    .then((response) => response.json())
    .then((session) => {
        return stripe.redirectToCheckout({ sessionId: session.id });
    })
    .then((result) => {
        if (result.error) {
            alert(result.error.message);
        }
    })
    .catch((error) => {
        console.error('Error:', error);
    });
}
