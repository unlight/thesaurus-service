/// <reference path="../../typings/node/node.d.ts"/>
/// <reference path="../../typings/request/request.d.ts"/>
var request = require("request");
var format = require("formatstring");
function createRequest(url) {
    var result = request({
        url: url,
        headers: {
            "User-Agent": "Mozilla/5.0 (Windows NT 6.3)"
        }
    });
    return result;
}
exports.createRequest = createRequest;
