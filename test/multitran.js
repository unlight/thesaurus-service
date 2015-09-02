/// <reference path="../typings/tape/tape.d.ts"/>
var test = require("tape");

test("multitran", function (t) {

	var Stream = require("./../build/multitran");

	t.assert(typeof Stream === "function", "should be a function");

	test("should request to somewhere", { timeout: 30000 }, function (t) {
		var s = new Stream({ query: "dummy" , maxRequests: 1});
		s.on("data", function (data) {
			t.ok(data);
		});
		s.on("end", t.end);
	});

	t.end();
});