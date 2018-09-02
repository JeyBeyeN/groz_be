'use strict';
var loopback = require('loopback');


module.exports = function(Item) {
   

    Item.greet = function(msg, cb,options) {
        const token = options && options.accessToken;
        const userId = token && token.userId;
        const user = userId ? 'user#' + userId : '<anonymous>';
        cb(null, 'Greetings... ' + msg+user);
      }
  
      Item.remoteMethod('greet', {
        accepts: {arg: 'msg', type: 'string'},
        returns: {arg: 'greeting', type: 'string'}
      });

};
