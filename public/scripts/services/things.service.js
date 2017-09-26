myApp.service('ThingService', function (){
    console.log('In ThingService');

    var self = this;
    self.blueThings = ['blueberries', 'blue men group', 'smurf','blue moon', 'sky'];
    self.redThings = ['raspberries','tomatoes', 'corvette', 'clown nose', 'cherries'];

    self.countObj = {count: 0};

    self.incCounter = function (){
        self.countObj.count++;
        console.log('count', self.countObj.count);
    }

});