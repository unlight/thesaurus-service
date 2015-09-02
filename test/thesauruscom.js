/// <reference path="../typings/tape/tape.d.ts"/>
var test = require("tape");

test("thesaurus.com", function (t) {

	var Stream = require("./../dist/thesauruscom.js");

	test("call should be ok", function (t) {
		var stream = new Stream("stream");
		stream.on("data", function (data) {
			t.ok(typeof data === "object");
		});
		stream.on("end", t.end);
	});

	t.end();

});