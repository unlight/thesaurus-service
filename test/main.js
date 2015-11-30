/// <reference path="../typings/tape/tape.d.ts" />
/// <reference path="../typings/node/node.d.ts" />
var test = require("tape");
var main = require("./../");
var stream = main.stream;
var createStream = main.createStream; 

test("main test", function (t) {

	t.equal("function", typeof stream);

	var s = stream("dummy");

	t.ok(s);
	s.on("data", function (d) {
		t.ok(d, [d.word, d.source]);
	});
	s.on("end", t.end);
});

test.only("create stream by mask", function (t) {
	var s = createStream("dummy", 8);
	s.on("data", function (d) {
		t.ok(d.source === "thesauruscom", d.word);
	});
	s.on("end", t.end);
});