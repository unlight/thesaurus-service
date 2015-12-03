/// <reference path="../typings/node/node.d.ts"/>
var __extends = (this && this.__extends) || function (d, b) {
    for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p];
    function __() { this.constructor = d; }
    d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
};
var Bighugelabs = require("./bighugelabs");
var Mobythesaurus = (function (_super) {
    __extends(Mobythesaurus, _super);
    function Mobythesaurus(options) {
        _super.call(this, options);
        this._base = "http://moby-thesaurus.org/search?q=";
        this._wordSelector = "ul.results li a[href]";
    }
    Object.defineProperty(Mobythesaurus.prototype, "source", {
        get: function () {
            return "mobythesaurus";
        },
        enumerable: true,
        configurable: true
    });
    return Mobythesaurus;
})(Bighugelabs);
module.exports = Mobythesaurus;
