/**
 * Created by Dhruba on 08-Jul-15.
 */
(function() {
    'use strict';

    angular
        .module('twitterListApp')
        .controller('ListMainContentController', ListMainContentController);

    ListMainContentController.$inject = ['TwitterListService'];

    function ListMainContentController(TwitterListService) {

        var vm = this;
        var allTwitterListStreams = [];
        var allTwitterAvailableLists = [];

        vm.twitListPerStream = [];
        vm.getTwitListTitle = getTwitListTitle;

        activate();

        function activate() {
            allTwitterAvailableLists = TwitterListService.twitterListNames();
            allTwitterListStreams = TwitterListService.twitterListStreams();
            _.forEach(allTwitterAvailableLists, function(val) {
                vm.twitListPerStream.push(getTwitListPerStream(val.id));
            })
        }

        function getTwitListPerStream(index) {
            var arrTwits = [];
            var singleListStream = _.find(allTwitterListStreams, 'listId', index.toString());
            if(singleListStream) {
                _.forEach(singleListStream.twittStream, function (val) {
                    arrTwits.push({
                        'text': val
                    });
                });
            }
            return arrTwits;
        }

        function getTwitListTitle(index) {
            var list = _.find(allTwitterAvailableLists, 'id', index);
            return list ? list.name : 'No title available';
        }
    }
})();
