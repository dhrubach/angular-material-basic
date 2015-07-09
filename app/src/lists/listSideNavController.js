/**
 * Created by Dhruba on 06-Jul-15.
 */
(function () {
    'use strict';

    angular
        .module('twitterListApp')
        .controller('ListSideNavController', ListSideNavController);

    ListSideNavController.$inject = ['TwitterListService'];

    function ListSideNavController(TwitterListService) {

        var vm = this;
        vm.listNames = [];

        activate();

        function activate() {
            vm.listNames = TwitterListService.twitterListNames();
        }
    }
})();
