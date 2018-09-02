//'use strict';

module.exports = function(List) {
    var app = require('../../server/server');

  // All Lists
  List.myLists = function(options,cb) {
    List.find({where:{owner:"Serin"}}, cb);
    const token = options && options.accessToken;
        const userId = token && token.userId;
        const user = userId ? 'user#' + userId : '<anonymous>';
        var User = app.models.User;
        var out;
        out = List.find({where:{owner:"Serin"}});
        console.log(out);

};
  List.remoteMethod('myLists', {
    accepts:{arg: 'req', type: 'object', http: {source: 'req'}},
    returns: {arg: 'lists', type: 'array'},
    http: {path:'/mylists', verb: 'get'}
  });
                                                          
};
