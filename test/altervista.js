/// <reference path="../typings/tape/tape.d.ts"/>
var test = require("tape");

test("thesaurus.altervista.org service", function (t) {

	var Stream = require("./../build/altervistaorg.js");

	test("should be a function", function (t) {
      t.ok(typeof Stream === "function");
		t.end();
	});

	test("call should be ok", function (t) {
		var stream = new Stream("stream");
		stream.on("data", function (data) {
			t.ok(typeof data === "object");
		});
		stream.on("end", t.end);
	});

	t.end();

});