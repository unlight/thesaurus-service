/// <reference path="../typings/tape/tape.d.ts" />
/// <reference path="../typings/node/node.d.ts" />
var test = require("tape");
var merge2 = require('merge2');
var inherits = require("util").inherits;

var merge2 = require("streammerge");

var Readable = require("stream").Readable;
inherits(CharsStream, Readable);

function CharsStream(options) {
	Readable.call(this);
	this.timeout = options.timeout || 100;
	this.count = options.count || 1;
}

CharsStream.prototype._read = (function () {
	var c = "a".charCodeAt(0);
	return function () {
		var letter = String.fromCharCode(c++);
		var isEnd = (c > "d".charCodeAt(0));
		if (isEnd) {
			this.push(null);
			return;
		}
		var self = this;
		setTimeout(function () {
			var o = new Array(~~self.count + 1).join(letter);
			self.push(o);
		}, ~~(Math.random() * self.timeout));
	};
})();

test("merge streams", function (t) {
	debugger;
	var s1 = new CharsStream({count: 1});
	var s2 = new CharsStream({count: 2});
	var s = merge2(s1, s2);
	s.on("data", function (chunk) {
		console.log(chunk.toString());
	});
	s.on("end", t.end);
	s.on("queueDrain", function() {
		t.end();
	});
})

