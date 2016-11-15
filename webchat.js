var OAuth = require('wechat-oauth');
var client = new OAuth('wxed859de883f38aaf', '4ccde00743e66d348555668152712568');
var url = client.getAuthorizeURL('localhost:3000', 'state', 'snsapi_userinfo');

console.error(url);