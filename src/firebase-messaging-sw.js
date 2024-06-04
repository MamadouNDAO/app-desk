/*importScripts('https://www.gstatic.com/firebasejs/12.4.7/firebase-app.js');
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
const messaging = firebase.messaging();*/

importScripts('https://www.gstatic.com/firebasejs/8.4.1/firebase-app.js');

importScripts('https://www.gstatic.com/firebasejs/8.4.1/firebase-messaging.js');



self.onnotificationclick = function(event) {

  // console.log('On notification click: ', event.notification.tag);

  event.notification.close();



  // This looks to see if the current is already open and

  // focuses if it is

  event.waitUntil(clients.matchAll({

    type: "window"

  }).then(function(clientList) {

    for (var i = 0; i < clientList.length; i++) {

      var client = clientList[i];

      // if (client.url == '/index' && 'focus' in client)

      return client.focus();

    }

    if (clients.openWindow)

      return clients.openWindow('/');

  }));

};

firebase.initializeApp({
  apiKey: "AIzaSyDekvlmOioCd56ZY9h_zFc29LW75ZXSGM0",
  authDomain: "le-themis.firebaseapp.com",
  projectId: "le-themis",
  storageBucket: "le-themis.appspot.com",
  messagingSenderId: "766720294167",
  appId: "1:766720294167:web:89da2aca9e00ab9d34cb52",
  measurementId: "G-ZF5H5ZCSYT"
});


/*firebase.initializeApp({
  apiKey: "AIzaSyDuTu2EHZ9i7frC8tGpFdhxFUSNDxJTGtU",
  authDomain: "themis-desk.firebaseapp.com",
  projectId: "themis-desk",
  storageBucket: "themis-desk.appspot.com",
  messagingSenderId: "912455344226",
  appId: "1:912455344226:web:ab8056b5657898078d313b",
  measurementId: "1:912455344226:web:ab8056b5657898078d313b"
});*/



const messaging = firebase.messaging();
