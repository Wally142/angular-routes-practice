myApp.controller('SpidermanController', function (HighFiveService) {
    console.log('Spiderman!');

    var vm = this;

    vm.successCount = 0;
    vm.totalCount = 0;
    vm.skillLevel = HighFiveService.setNumber();
    console.log('Skill level: ', vm.skillLevel);
    vm.highFive = function () {
        var quality = HighFiveService.setNumber();
        console.log('quality: ', quality);
        if (quality >= vm.skillLevel) {
            vm.successCount++;
        }
        vm.totalCount++;
    };
});



