myApp.service('HighFiveService', function (){
    console.log('In High Fives');

    var self = this;

    self.setNumber = function () {
        return Math.ceil(Math.random() * 10);
    }
    
    

});