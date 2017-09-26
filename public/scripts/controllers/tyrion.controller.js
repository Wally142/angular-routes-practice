myApp.controller('TyrionController', function (ThingService) {
    console.log('Tyrion Lannister!');

    var vm = this;

    vm.redItems =ThingService.redThings


});