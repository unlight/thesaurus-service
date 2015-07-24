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

//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInRoZXNhdXJ1c2NvbS50cyJdLCJuYW1lcyI6WyJUaGVzYXVydXNjb20iLCJUaGVzYXVydXNjb20uY29uc3RydWN0b3IiLCJUaGVzYXVydXNjb20uc3RhcnRSZWFkaW5nIiwiVGhlc2F1cnVzY29tLnNvdXJjZSJdLCJtYXBwaW5ncyI6IkFBQUEsaURBQWlEO0FBQ2pELHVEQUF1RDs7Ozs7OztBQUd2RCxJQUFZLE9BQU8sV0FBTSxTQUFTLENBQUMsQ0FBQTtBQUNuQyxJQUFPLFdBQVcsV0FBVyxlQUFlLENBQUMsQ0FBQztBQUM5QyxJQUFJLE9BQU8sR0FBRyxPQUFPLENBQUMsU0FBUyxDQUFDLENBQUM7QUFDakMsSUFBSSxNQUFNLEdBQUcsT0FBTyxDQUFDLGNBQWMsQ0FBQyxDQUFDO0FBRXJDO0lBQTJCQSxnQ0FBV0E7SUFLckNBLHNCQUFZQSxPQUFPQTtRQUNsQkMsa0JBQU1BLE9BQU9BLENBQUNBLENBQUNBO1FBSk5BLFVBQUtBLEdBQUdBLGtDQUFrQ0EsQ0FBQ0E7UUFDM0NBLGtCQUFhQSxHQUFHQSx1QkFBdUJBLENBQUNBO0lBSWxEQSxDQUFDQTtJQUVERCxtQ0FBWUEsR0FBWkE7UUFBQUUsaUJBbUJDQTtRQWxCQUEsSUFBSUEsR0FBR0EsR0FBR0EsSUFBSUEsQ0FBQ0EsYUFBYUEsRUFBRUEsQ0FBQ0E7UUFDL0JBLElBQUlBLEVBQUVBLEdBQUdBLE9BQU9BLEVBQUVBLENBQUNBO1FBQ25CQSxJQUFJQSxTQUFTQSxHQUFHQSxDQUFDQSxhQUFhQSxDQUFDQSxDQUFDQTtRQUNoQ0EsSUFBSUEsTUFBTUEsR0FBR0EsSUFBSUEsQ0FBQ0E7UUFDbEJBLElBQUlBLFFBQVFBLEdBQVdBLElBQUlBLENBQUNBO1FBRTVCQSxFQUFFQSxDQUFDQSxTQUFTQSxDQUFDQSxJQUFJQSxDQUFDQSxhQUFhQSxFQUFFQSxVQUFDQSxPQUFPQTtZQUN4Q0EsT0FBT0EsQ0FBQ0EsZ0JBQWdCQSxFQUFFQSxDQUFDQSxFQUFFQSxDQUFDQSxNQUFNQSxFQUFFQSxVQUFDQSxLQUFLQTtnQkFDM0NBLElBQUlBLElBQUlBLEdBQUdBLEtBQUtBLENBQUNBLFFBQVFBLEVBQUVBLENBQUNBO2dCQUM1QkEsSUFBSUEsUUFBUUEsR0FBR0EsV0FBV0EsQ0FBQ0E7Z0JBQzNCQSxLQUFJQSxDQUFDQSxJQUFJQSxDQUFDQSxFQUFFQSxJQUFJQSxNQUFBQSxFQUFFQSxRQUFRQSxVQUFBQSxFQUFFQSxNQUFNQSxFQUFFQSxLQUFJQSxDQUFDQSxNQUFNQSxFQUFFQSxDQUFDQSxDQUFDQTtZQUNwREEsQ0FBQ0EsQ0FBQ0EsQ0FBQ0E7UUFDSkEsQ0FBQ0EsQ0FBQ0EsQ0FBQ0E7UUFFSEEsRUFBRUEsQ0FBQ0EsRUFBRUEsQ0FBQ0EsS0FBS0EsRUFBRUEsY0FBTUEsT0FBQUEsS0FBSUEsQ0FBQ0EsSUFBSUEsQ0FBQ0EsSUFBSUEsQ0FBQ0EsRUFBZkEsQ0FBZUEsQ0FBQ0EsQ0FBQ0E7UUFFcENBLE9BQU9BLENBQUNBLEdBQUdBLENBQUNBLENBQUNBLElBQUlBLENBQUNBLEVBQUVBLENBQUNBLENBQUNBO1FBQ3RCQSxJQUFJQSxDQUFDQSxZQUFZQSxHQUFHQSxjQUFRQSxDQUFDQSxDQUFDQTtJQUMvQkEsQ0FBQ0E7SUFHREYsc0JBQWNBLGdDQUFNQTthQUFwQkE7WUFDQ0csTUFBTUEsQ0FBQ0EsY0FBY0EsQ0FBQ0E7UUFDdkJBLENBQUNBOzs7T0FBQUg7SUFHRkEsbUJBQUNBO0FBQURBLENBcENBLEFBb0NDQSxFQXBDMEIsV0FBVyxFQW9DckM7QUFBQSxDQUFDO0FBRUYsQUFBc0IsaUJBQWIsWUFBWSxDQUFDIiwiZmlsZSI6InRoZXNhdXJ1c2NvbS5qcyIsInNvdXJjZXNDb250ZW50IjpbIi8vLyA8cmVmZXJlbmNlIHBhdGg9XCIuLi90eXBpbmdzL25vZGUvbm9kZS5kLnRzXCIvPlxuLy8vIDxyZWZlcmVuY2UgcGF0aD1cIi4uL3R5cGluZ3MvcmVxdWVzdC9yZXF1ZXN0LmQudHNcIi8+XG5cbmltcG9ydCB7UmVhZGFibGUsIFJlYWRhYmxlT3B0aW9uc30gZnJvbSBcInN0cmVhbVwiO1xuaW1wb3J0ICogYXMgcmVxdWVzdCBmcm9tIFwicmVxdWVzdFwiO1xuaW1wb3J0IEJpZ2h1Z2VsYWJzID0gcmVxdWlyZShcIi4vYmlnaHVnZWxhYnNcIik7XG52YXIgdHJ1bXBldCA9IHJlcXVpcmUoXCJ0cnVtcGV0XCIpO1xudmFyIGZvcm1hdCA9IHJlcXVpcmUoXCJmb3JtYXRzdHJpbmdcIik7XG5cbmNsYXNzIFRoZXNhdXJ1c2NvbSBleHRlbmRzIEJpZ2h1Z2VsYWJzIHtcblx0XG5cdHByb3RlY3RlZCBfYmFzZSA9IFwiaHR0cDovL3d3dy50aGVzYXVydXMuY29tL2Jyb3dzZS9cIjtcblx0cHJvdGVjdGVkIF93b3JkU2VsZWN0b3IgPSBcIi5yZWxldmFuY3ktbGlzdCAudGV4dFwiO1xuXG5cdGNvbnN0cnVjdG9yKG9wdGlvbnMpIHtcblx0XHRzdXBlcihvcHRpb25zKTtcblx0fVxuXHRcblx0c3RhcnRSZWFkaW5nKCkge1xuXHRcdHZhciB1cmwgPSB0aGlzLmdldFJlcXVlc3RVcmwoKTtcblx0XHR2YXIgdHIgPSB0cnVtcGV0KCk7XG5cdFx0dmFyIGJsYWNrTGlzdCA9IFtcInJoeW1lcyB3aXRoXCJdO1xuXHRcdHZhciBkb0VtaXQgPSB0cnVlO1xuXHRcdHZhciBjYXRlZ29yeTogc3RyaW5nID0gbnVsbDtcblxuXHRcdHRyLnNlbGVjdEFsbCh0aGlzLl93b3JkU2VsZWN0b3IsIChlbGVtZW50KSA9PiB7XG5cdFx0XHRlbGVtZW50LmNyZWF0ZVJlYWRTdHJlYW0oKS5vbihcImRhdGFcIiwgKGNodW5rKSA9PiB7XG5cdFx0XHRcdHZhciB3b3JkID0gY2h1bmsudG9TdHJpbmcoKTtcblx0XHRcdFx0dmFyIGNhdGVnb3J5ID0gXCJyZWxldmFuY3lcIjtcblx0XHRcdFx0dGhpcy5wdXNoKHsgd29yZCwgY2F0ZWdvcnksIHNvdXJjZTogdGhpcy5zb3VyY2UgfSk7XG5cdFx0XHR9KTtcblx0XHR9KTtcblxuXHRcdHRyLm9uKFwiZW5kXCIsICgpID0+IHRoaXMucHVzaChudWxsKSk7XG5cblx0XHRyZXF1ZXN0KHVybCkucGlwZSh0cik7XG5cdFx0dGhpcy5zdGFydFJlYWRpbmcgPSAoKSA9PiB7IH07XG5cdH1cblxuXG5cdHByb3RlY3RlZCBnZXQgc291cmNlKCkge1xuXHRcdHJldHVybiBcInRoZXNhdXJ1c2NvbVwiO1xuXHR9XG5cblxufTtcblxuZXhwb3J0ID0gVGhlc2F1cnVzY29tOyJdLCJzb3VyY2VSb290IjoiL3NvdXJjZS8ifQ==