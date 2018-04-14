$(function(){

    SmartReflex.getUser("piyada@smartreflex.info").then(function(message, user) {
        console.log(message);
        console.log(user);
    });    

    SmartReflex.getScore("piyada@smartreflex.info").then(function(message, user) {
        console.log(message);
        console.log(user);
    });    
    
    SmartReflex.getAllDevice().then(function(devices) {
        console.log(devices);
    }); 

});

