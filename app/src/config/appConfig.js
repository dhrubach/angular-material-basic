/**
 * Created by Dhruba on 05-Jul-15.
 */
(function() {
    'use strict';

    angular
        .module('twitterListApp')
        .config(function($mdThemingProvider) {
        $mdThemingProvider.theme('default')
            .primaryPalette('teal')
            .accentPalette('light-green')
            .backgroundPalette('grey');
    });
})();
