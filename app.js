var admin = require('firebase-admin');
var users = require('./data/users.json');
var fitscores = require('./data/fitscores.json');
var devices = require('./data/devices.json');

var serviceAccount = require('./keys/smartreflex-e1e0cc2d1c1c.json');

admin.initializeApp({
    credential: admin.credential.cert(serviceAccount)
  });
  
var db = admin.firestore();

for(var i=0;i<3;i++){
  db.collection('users').doc(users[i].profile.userid).set(users[i]);
  db.collection('fitscores').doc(fitscores[i].userid).set(fitscores[i]);
  db.collection('devices').doc(devices[i].deviceid).set(devices[i]);
}

console.log('Finished');