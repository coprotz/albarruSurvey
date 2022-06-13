const functions = require("firebase-functions");
const admin = require("firebase-admin");
admin.initializeApp(functions.config().firebase);


exports.addAdminRole = functions.https.onCall((data, context) => {
    return admin.auth().getUserByEmail(data.email).then((user) => {
        return admin.auth().setCustomUserClaims(user.uid, {
            admin: true,
        });
    }).then(() => {
        return {
            message: `success! ${data.email} has been made an admin`,
        };
    }).catch((err) => {
        return err;
    });
});


exports.createStripeCheckout = functions.https.onCall(async (data, context) => {
    const stripe = require("stripe")(functions.config().stripe.secret_key);
    const session = await stripe.checkout.sessions.create(data);
    return {
        id: session.id,
    };
});

const createNotification = ((notification) => {
    return admin.firestore().collection("notifications")
        .add(notification)
        .then((doc) => console.log("notification added", doc));
});


exports.stripeWebhook = functions.https.onRequest(async (req, res) => {
    const stripe = require("stripe")(functions.config().stripe.token);
    let event;

    try {
        const whSec = functions.config().stripe.payments_webhook_secret;

        event = stripe.webhooks.constructEvent(
            req.rawBody,
            req.headers["stripe-signature"],
            whSec,
        );
    } catch (error) {
        console.error("Webhook signature verification failed");
        return res.sendStatus(400);
    }

    const dataObject = event.data.object;

    await admin.firestore().collection("subscriptions")
        .doc().set({
        checkoutSessionId: dataObject.id,
        status: dataObject.payment_status,
        surveyId: dataObject.metadata.id,
        user: dataObject.metadata.user,
        userId: dataObject.metadata.userId,
        paid_amount: Number(dataObject.metadata.paid_amount),
        time: admin.firestore.FieldValue.serverTimestamp(),
    });
    return res.sendStatus(200);
});

exports.createSurvey = functions.firestore
    .document("surveys/{id}").onCreate((doc) => {
        const survey = doc.data();
        const notification = {
            content: "created a survey",
            user: `${survey.name}`,
            time: admin.firestore.FieldValue.serverTimestamp(),
        };

    return createNotification(notification);
});


exports.paidBill = functions.firestore
    .document("subscriptions/{id}").onCreate((doc) => {
        const subscribe = doc.data();
        const notification = {
            content: "paid a bill",
            user: `${subscribe.user}`,
            time: admin.firestore.FieldValue.serverTimestamp(),
        };
    return createNotification(notification);
});

exports.userJoined = functions.auth.user().onCreate((user) => {
    return admin.firestore().collection("users")
        .doc(user.uid).get().then((doc) => {
            const newUser = doc.data();
            const notification = {
                content: "Joined",
                user: `${newUser.username}`,
                time: admin.firestore.FieldValue.serverTimestamp(),
            };
            return createNotification(notification);
        });
});
