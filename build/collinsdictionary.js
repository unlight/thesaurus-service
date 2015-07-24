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

//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImNvbGxpbnNkaWN0aW9uYXJ5LnRzIl0sIm5hbWVzIjpbIkNvbGxpbnNEaWN0aW9uYXJ5IiwiQ29sbGluc0RpY3Rpb25hcnkuY29uc3RydWN0b3IiLCJDb2xsaW5zRGljdGlvbmFyeS5zb3VyY2UiXSwibWFwcGluZ3MiOiJBQUFBLGlEQUFpRDs7Ozs7OztBQUVqRCxJQUFPLFdBQVcsV0FBVyxlQUFlLENBQUMsQ0FBQztBQUU5QztJQUFnQ0EscUNBQVdBO0lBTTFDQSwyQkFBWUEsT0FBT0E7UUFDbEJDLGtCQUFNQSxPQUFPQSxDQUFDQSxDQUFDQTtRQUxOQSxVQUFLQSxHQUFHQSxnRUFBZ0VBLENBQUNBO1FBQ3pFQSxzQkFBaUJBLEdBQUdBLFdBQVdBLENBQUNBO1FBQ2hDQSxrQkFBYUEsR0FBR0EsNkJBQTZCQSxDQUFDQTtJQUl4REEsQ0FBQ0E7SUFFREQsc0JBQWNBLHFDQUFNQTthQUFwQkE7WUFDQ0UsTUFBTUEsQ0FBQ0EsbUJBQW1CQSxDQUFDQTtRQUM1QkEsQ0FBQ0E7OztPQUFBRjtJQUNGQSx3QkFBQ0E7QUFBREEsQ0FiQSxBQWFDQSxFQWIrQixXQUFXLEVBYTFDO0FBRUQsQUFBMkIsaUJBQWxCLGlCQUFpQixDQUFDIiwiZmlsZSI6ImNvbGxpbnNkaWN0aW9uYXJ5LmpzIiwic291cmNlc0NvbnRlbnQiOlsiLy8vIDxyZWZlcmVuY2UgcGF0aD1cIi4uL3R5cGluZ3Mvbm9kZS9ub2RlLmQudHNcIi8+XHJcblxyXG5pbXBvcnQgQmlnaHVnZWxhYnMgPSByZXF1aXJlKFwiLi9iaWdodWdlbGFic1wiKTtcclxuXHJcbmNsYXNzIENvbGxpbnNEaWN0aW9uYXJ5IGV4dGVuZHMgQmlnaHVnZWxhYnMge1xyXG5cclxuXHRwcm90ZWN0ZWQgX2Jhc2UgPSBcImh0dHA6Ly93d3cuY29sbGluc2RpY3Rpb25hcnkuY29tL2RpY3Rpb25hcnkvZW5nbGlzaC10aGVzYXVydXMvXCI7XHJcblx0cHJvdGVjdGVkIF9jYXRlZ29yeVNlbGVjdG9yID0gXCJoNCA+IHNwYW5cIjtcclxuXHRwcm90ZWN0ZWQgX3dvcmRTZWxlY3RvciA9IFwib2wuc2Vuc2VfbGlzdCBhLnhyX3JlZl9saW5rXCI7XHJcblxyXG5cdGNvbnN0cnVjdG9yKG9wdGlvbnMpIHtcclxuXHRcdHN1cGVyKG9wdGlvbnMpO1xyXG5cdH1cclxuXHJcblx0cHJvdGVjdGVkIGdldCBzb3VyY2UoKSB7XHJcblx0XHRyZXR1cm4gXCJjb2xsaW5zZGljdGlvbmFyeVwiO1xyXG5cdH1cclxufVxyXG5cclxuZXhwb3J0ID0gQ29sbGluc0RpY3Rpb25hcnk7Il0sInNvdXJjZVJvb3QiOiIvc291cmNlLyJ9