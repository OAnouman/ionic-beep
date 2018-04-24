import * as functions from 'firebase-functions';
import * as admin from 'firebase-admin';

// // Start writing Firebase Functions
// // https://firebase.google.com/docs/functions/typescript
//
// export const helloWorld = functions.https.onRequest((request, response) => {
//  response.send("Hello from Firebase!");
// });


const FIREBASE_CREDENTIALS = {

    apiKey: "AIzaSyCS2Ie2VbrrVvFS7g27u7MuvPNXFBDfnAE",

    authDomain: "beep-abfa7.firebaseapp.com",

    databaseURL: "https://beep-abfa7.firebaseio.com",

    projectId: "beep-abfa7",

    storageBucket: "beep-abfa7.appspot.com",

    messagingSenderId: "417271727991"

}

const initConfig = () => {

    admin.initializeApp(FIREBASE_CREDENTIALS)

}

initConfig();

export const addUsersMessage = functions.database.ref(`messages/{messageId}`).onWrite(event => {

    const messageKey = event.after.key;
    const messageValue = event.after.val();

    admin.database().ref(`user-messages/${messageValue.userFromId}/${messageValue.userToId}`).child(messageKey).set(1);
    admin.database().ref(`user-messages/${messageValue.userToId}/${messageValue.userFromId}`).child(messageKey).set(1);

})