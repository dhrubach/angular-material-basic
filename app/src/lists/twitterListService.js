/**
 * Created by Dhruba on 06-Jul-15.
 */
(function() {
    'use strict';

    angular
        .module('twitterListApp')
        .service('TwitterListService', TwitterListService);

    function TwitterListService() {
        var contract = {
            'twitterListNames': twitterListNames,
            'twitterListStreams': twitterListStreams
        };

        return contract;

        function twitterListNames() {
            return [
                {
                    'name': 'JobMarket',
                    'id': 1,
                    'description': 'Recruitment agencies, Job Sites in Australia',
                    'members': 9
                },
                {
                    'name': 'SoftwareDevelopment',
                    'id': 2,
                    'description': 'This list covers software dev, agile methodoligies, ' +
                                    'project management, .NET development, etc',
                    'members': 85
                },
                {
                    'name': 'Bloggers',
                    'id': 3,
                    'description': 'News stream about technology in current media',
                    'members': 46
                },
                {
                    'name': 'Microsoft',
                    'id': 4,
                    'description': 'Everything .NET, WP8, Windows 10, Azure, Surface, etc',
                    'members': 57
                },
                {
                    'name': 'CurrentAffairs',
                    'id': 5,
                    'description': 'Feed from media houses',
                    'members': 35
                }
            ];
        }

        function twitterListStreams() {
            return [
                {
                    'listId': '1',
                    'twittStream': [
                        'This is a one page Material Design HTML template based off the MaterializeCSS framework. ' +
                        'The template includes styles for several sections including work, team, ' +
                        'and a nice big header.',
                        'This is a one page Material Design HTML template based off the MaterializeCSS framework. ' +
                        'The template includes styles for several sections including work, team, ' +
                        'and a nice big header.',
                        'This is a one page Material Design HTML template based off the MaterializeCSS framework. ' +
                        'The template includes styles for several sections including work, team, ' +
                        'and a nice big header.'
                    ]
                },
                {
                    'listId': '2',
                    'twittStream': [
                        'For dark text on a light background, the most important text has an opacity of 87%. ' +
                        'Secondary text, which is lower in the visual hierarchy, has an opacity of 54%. ' +
                        'Text hints, like those in text fields and labels, and disabled text have even lower ' +
                        'visual prominence wit',
                        'For dark text on a light background, the most important text has an opacity of 87%. ' +
                        'Secondary text, which is lower in the visual hierarchy, has an opacity of 54%. ' +
                        'Text hints, like those in text fields and labels, and disabled text have even lower ' +
                        'visual prominence wit',
                        'For dark text on a light background, the most important text has an opacity of 87%. ' +
                        'Secondary text, which is lower in the visual hierarchy, has an opacity of 54%. ' +
                        'Text hints, like those in text fields and labels, and disabled text have even lower ' +
                        'visual prominence wit'
                    ]
                },
                {
                    'listId': '3',
                    'twittStream': [
                        'Clear, accurate, and concise text makes interfaces more usable and builds trust. ' +
                        'Strive to write text that is understandable by anyone, anywhere, ' +
                        'regardless of their culture or language.',
                        'Clear, accurate, and concise text makes interfaces more usable and builds trust. ' +
                        'Strive to write text that is understandable by anyone, anywhere, ' +
                        'regardless of their culture or language.',
                        'Clear, accurate, and concise text makes interfaces more usable and builds trust. ' +
                        'Strive to write text that is understandable by anyone, anywhere, ' +
                        'regardless of their culture or language.'
                    ]
                },
                {
                    'listId': '4',
                    'twittStream': [
                        'React’s unique strength is bringing to JavaScript development some of the benefits ' +
                        'previously exclusive to more radically functional languages ',
                        'React’s unique strength is bringing to JavaScript development some of the benefits ' +
                        'previously exclusive to more radically functional languages ',
                        'React’s unique strength is bringing to JavaScript development some of the benefits ' +
                        'previously exclusive to more radically functional languages ',
                        'React’s unique strength is bringing to JavaScript development some of the benefits ' +
                        'previously exclusive to more radically functional languages ',
                        'React’s unique strength is bringing to JavaScript development some of the benefits ' +
                        'previously exclusive to more radically functional languages '
                    ]
                },
                {
                    'listId': '5',
                    'twittStream': [
                        'We did most of the heavy lifting for you to provide a default stylings that incorporate ' +
                        'our c custom components. Additionally, we refined animations and transitions to provide ' +
                        'a smoother experience for developers',
                        'We did most of the heavy lifting for you to provide a default stylings that incorporate ' +
                        'our c custom components. Additionally, we refined animations and transitions to provide ' +
                        'a smoother experience for developers',
                        'We did most of the heavy lifting for you to provide a default stylings that incorporate ' +
                        'our c custom components. Additionally, we refined animations and transitions to provide ' +
                        'a smoother experience for developers',
                        'We did most of the heavy lifting for you to provide a default stylings that incorporate ' +
                        'our c custom components. Additionally, we refined animations and transitions to provide ' +
                        'a smoother experience for developers'
                    ]
                }
            ];
        }
    }
})();
