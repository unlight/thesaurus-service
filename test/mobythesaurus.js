/// <reference path="../typings/tape/tape.d.ts" />
var test = require("tape");

test("mobythesaurus", function (t) {

	var Stream = require("./../dist/mobythesaurus.js");

	test("stream is ok", function (t) {
		t.ok(typeof Stream === "function");

		var isReadableStream = require("is-readable-stream");
		var s = new Stream({ query: "user", lazy: true });

		t.ok(isReadableStream(s));
		t.end();
	});

	var stream = new Stream("dummy");
	stream.on("data", function (d) {
		console.log(d);
	});

	stream.on("end", t.end);

});