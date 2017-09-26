myApp.controller('SonicController', function (ThingService) {
    console.log('Sonic!', ThingService.blueThings);
    
    var vm = this;
    
    vm.blueStuff = ThingService.blueThings;
    vm.redItems = ThingService.redThings;
    vm.countObj = ThingService.countObj;

    vm.clickUpdate = function (){
        console.log('click worked');
        ThingService.incCounter();
    }

});