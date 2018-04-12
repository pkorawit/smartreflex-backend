$(function(){

    SmartReflex.getUser("piyada@smartreflex.info").then(function(message, user) {
        console.log(message);
        console.log(user);
    });    

    SmartReflex.getAllUser().then(function(users) {
        console.log(users);
    });   

    SmartReflex.getDevice("h10").then(function(message, device) {
        console.log(message);
        console.log(device);
    });  
    
    SmartReflex.getAllDevice().then(function(devices) {
        console.log(devices);
    }); 

});

