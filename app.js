var admin = require('firebase-admin');
var u1 = require('./data/user1.json');
var u2 = require('./data/user2.json');
var u3 = require('./data/user3.json');

var serviceAccount = require('./keys/smartreflex-e1e0cc2d1c1c.json');

admin.initializeApp({
    credential: admin.credential.cert(serviceAccount)
  });
  
var db = admin.firestore();

db.collection('users').doc('waree@smartreflex.info').set(u1);
db.collection('users').doc('somjai@smartreflex.info').set(u2);
db.collection('users').doc('piyada@smartreflex.info').set(u3);

console.log('Finished');