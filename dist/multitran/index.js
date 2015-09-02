/// <reference path="../../typings/node/node.d.ts"/>
/// <reference path="../../typings/request/request.d.ts"/>
var __extends = this.__extends || function (d, b) {
    for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p];
    function __() { this.constructor = d; }
    __.prototype = b.prototype;
    d.prototype = new __();
};
var stream_1 = require("stream");
var format = require("formatstring");
var trumpet = require("trumpet");
var iconv = require("iconv-lite");
var isWordLink_1 = require("./isWordLink");
var createRequest_1 = require("./createRequest");
var Multitran = (function (_super) {
    __extends(Multitran, _super);
    function Multitran(options) {
        _super.call(this, { objectMode: true });
        if (typeof options === "string") {
            options = { query: options };
        }
        var query = options.query, _a = options.lazy, lazy = _a === void 0 ? false : _a, _b = options.maxRequests, maxRequests = _b === void 0 ? 10 : _b;
        this._query = query;
        this._maxRequests = maxRequests;
        if (!lazy) {
            this.startReading();
        }
    }
    Multitran.prototype.startReading = function () {
        var _this = this;
        var templateUrl = "http://www.multitran.ru/c/m.exe?s={query}";
        var url = format(templateUrl, { query: this._query });
        var tr = trumpet();
        var count = 0;
        tr.selectAll("tr td a[href]", function (element) {
            if (count > _this._maxRequests)
                return;
            var href = element.getAttribute("href");
            if (!isWordLink_1.isWordLink(href))
                return;
            var trm = trumpet();
            trm.selectAll("tr td a[href]", function (element) {
                var relativeLink = element.getAttribute("href");
                if (!isWordLink_1.isWordLink(relativeLink))
                    return;
                var readStream = element.createReadStream();
                readStream.on("data", function (chunk) {
                    var word = iconv.decode(chunk, "cp1251");
                    var data = { word: word, source: _this.source };
                    _this.push(data);
                });
            });
            trm.on("end", function () {
                if (--count === 0) {
                    _this.push(null);
                }
            });
            createRequest_1.createRequest("http://www.multitran.ru/c/" + href).pipe(trm);
            count++;
        });
        createRequest_1.createRequest(url).pipe(tr);
        this.startReading = function () { };
    };
    Multitran.prototype._read = function () {
        this.startReading();
        return null;
    };
    Object.defineProperty(Multitran.prototype, "source", {
        get: function () {
            return "multitran";
        },
        enumerable: true,
        configurable: true
    });
    return Multitran;
})(stream_1.Readable);
module.exports = Multitran;
