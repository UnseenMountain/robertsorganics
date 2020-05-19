import * as firebase from 'firebase'
let database

export const init = () => {
    let config = {
        apiKey: "AIzaSyD3jlJLoYr-g9nIU0pe7u1KziIVyOiDN1c",
        authDomain: "newsletter-app-3fc1a.firebaseapp.com",
        databaseURL: "https://newsletter-app-3fc1a.firebaseio.com",
        projectId: "newsletter-app-3fc1a",
        storageBucket: "newsletter-app-3fc1a.appspot.com",
        messagingSenderId: "971494388481",
    }
    firebase.initializeApp(config)
    database = firebase.database()
}