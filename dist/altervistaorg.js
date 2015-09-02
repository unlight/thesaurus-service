/// <reference path="../typings/node/node.d.ts"/>
/// <reference path="../typings/request/request.d.ts"/>
var __extends = this.__extends || function (d, b) {
    for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p];
    function __() { this.constructor = d; }
    __.prototype = b.prototype;
    d.prototype = new __();
};
var stream_1 = require("stream");
var request = require("request");
var format = require("formatstring");
var source = "altervistaorg";
var Altervista = (function (_super) {
    __extends(Altervista, _super);
    function Altervista(options) {
        var _this = this;
        _super.call(this, { objectMode: true });
        if (typeof options === "string") {
            options = { query: options };
        }
        var query = options.query;
        var templateUrl = "http://thesaurus.altervista.org/service.php?word={word}&language=en_US&output=json&key={key}";
        // todo: to config
        // todo: make option lazy
        var url = format(templateUrl, {
            word: query,
            key: "txXYFyF4UgFiNsFY3oB7"
        });
        request(url, function (error, response, body) {
            var jsonResponse = JSON.parse(body).response;
            jsonResponse.forEach(_this._parseList, _this);
            _this.push(null);
        });
    }
    Altervista.prototype._read = function (count) {
    };
    Altervista.prototype._parseList = function (item) {
        var category = this._parseCategory(item.list.category);
        var array = item.list.synonyms.split("|");
        for (var index = 0; index < array.length; index++) {
            var word = array[index];
            var data = { word: word, category: category, source: source };
            this.push(data);
        }
    };
    Altervista.prototype._parseCategory = function (category) {
        var result = category.slice(1, -1);
        return result;
    };
    return Altervista;
})(stream_1.Readable);
;
module.exports = Altervista;
