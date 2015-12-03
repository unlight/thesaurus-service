/// <reference path="../typings/node/node.d.ts"/>
var __extends = (this && this.__extends) || function (d, b) {
    for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p];
    function __() { this.constructor = d; }
    d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
};
var stream_1 = require("stream");
var trumpet = require("trumpet");
var request = require("request");
var Bighugelabs = (function (_super) {
    __extends(Bighugelabs, _super);
    function Bighugelabs(options) {
        var _this = this;
        _super.call(this, { objectMode: true });
        this._base = "https://words.bighugelabs.com/";
        this._categorySelector = "h3";
        this._wordSelector = "h3 + ul.words a";
        if (typeof options === "string") {
            options = { query: options };
        }
        var query = options.query, _a = options.lazy, lazy = _a === void 0 ? false : _a;
        this._query = query;
        if (!lazy) {
            process.nextTick(function () { return _this.startReading(); });
        }
    }
    Bighugelabs.prototype.getRequestUrl = function () {
        var url = this._base + this._query;
        return url;
    };
    Object.defineProperty(Bighugelabs.prototype, "source", {
        get: function () {
            return "bighugelabs";
        },
        enumerable: true,
        configurable: true
    });
    Bighugelabs.prototype.startReading = function () {
        var _this = this;
        var url = this.getRequestUrl();
        var tr = trumpet();
        var blackList = ["rhymes with"];
        var doEmit = true;
        var category = null;
        tr.selectAll(this._categorySelector, function (element) {
            element.createReadStream().on("data", function (chunk) {
                category = chunk.toString();
                doEmit = blackList.indexOf(category) == -1;
            });
        });
        tr.selectAll(this._wordSelector, function (element) {
            element.createReadStream().on("data", function (chunk) {
                var word = chunk.toString();
                _this.push({ word: word, category: category, source: _this.source });
            });
        });
        tr.on("end", function () { return _this.push(null); });
        request(url).pipe(tr);
        this.startReading = function () { };
    };
    Bighugelabs.prototype._read = function () {
        this.startReading();
        return null;
    };
    return Bighugelabs;
})(stream_1.Readable);
module.exports = Bighugelabs;
