myApp.controller('SpidermanController', function () {
    console.log('Spiderman!');

    var vm = this;
    vm.description = false;
    vm.showPowers = function(){
        vm.description = !vm.description;
    }

});