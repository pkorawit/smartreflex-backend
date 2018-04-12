// Initialize Firebase
var config = {
    apiKey: "AIzaSyC084zG4lwkrp4G-C6sK_smmXo9DBN2I-Q",
    authDomain: "smartreflex-2018.firebaseapp.com",
    databaseURL: "https://smartreflex-2018.firebaseio.com",
    projectId: "smartreflex-2018",
    storageBucket: "smartreflex-2018.appspot.com",
    messagingSenderId: "445800935420"
};

firebase.initializeApp(config);
var db = firebase.firestore();

// SmartReflex back-end data retrieval
var SmartReflex = {

    //Get all user collections
    getAllUser: function(){
        var deferred = new $.Deferred();
        var devices = [];
        db.collection("users").get().then((querySnapshot) => {
            querySnapshot.forEach((doc) => {
                devices.push(doc.data());
            });
            deferred.resolve(devices);
        });
    
        return deferred.promise();
    },

    //Get a user by id
    getUser: function(userid){
        var deferred = new $.Deferred();
        var docRef = db.collection("users").doc(userid);
    
        docRef.get().then(function(doc) {
            if (doc.exists) {
                deferred.resolve("Done", doc.data());
            } else {
                deferred.resolve("No such a user: " + userid, null);
            }
        }).catch(function(error) {
            deferred.resolve("Error getting user: " + userid, error);
            return null;
        });
    
        return deferred.promise();
    },

    //Get all devices collection
    getAllDevice: function(){
        var deferred = new $.Deferred();
        var devices = [];
        db.collection("devices").get().then((querySnapshot) => {
            querySnapshot.forEach((doc) => {
                devices.push(doc.data());
            });
            deferred.resolve(devices);
        });
    
        return deferred.promise();
    },

    //Get a device by id
    getDevice: function(deviceid){
        var deferred = new $.Deferred();
        var docRef = db.collection("devices").doc(deviceid);
    
        docRef.get().then(function(doc) {
            if (doc.exists) {
                deferred.resolve("Done", doc.data());
            } else {
                deferred.resolve("No such a device: " + deviceid, null);
            }
        }).catch(function(error) {
            deferred.resolve("Error getting devices: " + deviceid, error);
            return null;
        });
    
        return deferred.promise();
    },
};
