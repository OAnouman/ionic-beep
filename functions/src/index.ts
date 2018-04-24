import * as functions from 'firebase-functions';
import * as admin from 'firebase-admin';

// // Start writing Firebase Functions
// // https://firebase.google.com/docs/functions/typescript
//
// export const helloWorld = functions.https.onRequest((request, response) => {
//  response.send("Hello from Firebase!");
// });


admin.initializeApp(functions.config().firebase);

export const addUsersMessage = functions.database.ref(`messages/{messageId}`).onWrite(event => {

    const messageKey = event.after.key;
    const messageValue = event.after.val();

    admin.database().ref(`user-messages/${messageValue.userFromId}/${messageValue.userToId}`).child(messageKey).set(1);
    admin.database().ref(`user-messages/${messageValue.userToId}/${messageValue.userFromId}`).child(messageKey).set(1);

})

export const generateLastMessage = functions.database.ref('messages/{messageId}').onWrite(event => {

    const messageKey: string = event.after.key;
    const messageValue = event.after.val();

    admin.database().ref(`last-messages/${messageValue.userFromId}/${messageValue.userToId}`).child('key').set(`${messageKey}`);

    admin.database().ref(`last-messages/${messageValue.userToId}/${messageValue.userFromId}`).child('key').set(`${messageKey}`);

})