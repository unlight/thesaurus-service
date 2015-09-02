/// <reference path="../typings/node/node.d.ts"/>
var __extends = this.__extends || function (d, b) {
    for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p];
    function __() { this.constructor = d; }
    __.prototype = b.prototype;
    d.prototype = new __();
};
var Bighugelabs = require("./bighugelabs");
var CollinsDictionary = (function (_super) {
    __extends(CollinsDictionary, _super);
    function CollinsDictionary(options) {
        _super.call(this, options);
        this._base = "http://www.collinsdictionary.com/dictionary/english-thesaurus/";
        this._categorySelector = "h4 > span";
        this._wordSelector = "ol.sense_list a.xr_ref_link";
    }
    Object.defineProperty(CollinsDictionary.prototype, "source", {
        get: function () {
            return "collinsdictionary";
        },
        enumerable: true,
        configurable: true
    });
    return CollinsDictionary;
})(Bighugelabs);
module.exports = CollinsDictionary;
