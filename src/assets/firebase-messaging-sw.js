importScripts('https://www.gstatic.com/firebasejs/12.4.7/firebase-app.js');
importScripts('https://www.gstatic.com/firebasejs/12.4.7/firebase-messaging.js');

firebase.initializeApp({
apiKey: "AIzaSyDuTu2EHZ9i7frC8tGpFdhxFUSNDxJTGtU",
authDomain: "themis-desk.firebaseapp.com",
projectId: "themis-desk",
storageBucket: "themis-desk.appspot.com",
messagingSenderId: "912455344226",
appId: "1:912455344226:web:ab8056b5657898078d313b",
measurementId: "1:912455344226:web:ab8056b5657898078d313b"
});
const messaging = firebase.messaging();
