/// <reference path="../typings/node/node.d.ts"/>
/// <reference path="../typings/request/request.d.ts"/>
var __extends = this.__extends || function (d, b) {
    for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p];
    function __() { this.constructor = d; }
    __.prototype = b.prototype;
    d.prototype = new __();
};
var request = require("request");
var Bighugelabs = require("./bighugelabs");
var trumpet = require("trumpet");
var format = require("formatstring");
var Thesauruscom = (function (_super) {
    __extends(Thesauruscom, _super);
    function Thesauruscom(options) {
        _super.call(this, options);
        this._base = "http://www.thesaurus.com/browse/";
        this._wordSelector = ".relevancy-list .text";
    }
    Thesauruscom.prototype.startReading = function () {
        var _this = this;
        var url = this.getRequestUrl();
        var tr = trumpet();
        var blackList = ["rhymes with"];
        var doEmit = true;
        var category = null;
        tr.selectAll(this._wordSelector, function (element) {
            element.createReadStream().on("data", function (chunk) {
                var word = chunk.toString();
                var category = "relevancy";
                _this.push({ word: word, category: category, source: _this.source });
            });
        });
        tr.on("end", function () { return _this.push(null); });
        request(url).pipe(tr);
        this.startReading = function () { };
    };
    Object.defineProperty(Thesauruscom.prototype, "source", {
        get: function () {
            return "thesauruscom";
        },
        enumerable: true,
        configurable: true
    });
    return Thesauruscom;
})(Bighugelabs);
;
module.exports = Thesauruscom;
