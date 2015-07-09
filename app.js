/**
 * Created by Dhruba on 05-Jul-15.
 */
var liveServer = require('live-server');

var params = {
    'port': 8080,
    'host': '0.0.0.0',
    'root': './app'
};

liveServer.start(params);
