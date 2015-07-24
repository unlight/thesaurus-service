/// <reference path="../typings/tape/tape.d.ts" />
var test = require("tape");

test("bighugelabs and similar service", function (t) {

	var Stream = require("./../build/bighugelabs.js");
	var Collinsdictionary = require("./../build/collinsdictionary.js");
	
	test("stream is ok", function(t) {
		t.ok(typeof Stream === "function");
	
		var isReadableStream = require("is-readable-stream");
		var s1 = new Stream({ query: "user", lazy: false });
	
	   t.ok(isReadableStream(s1));
		t.end();
	});

	test("bighugelabs call", function (t) {
		var stream = new Stream("stream");
		stream.on("data", function (data) {
			t.ok(typeof data === "object");
		});
		stream.on("end", function () {
			t.end();
		});
	});


	test("collins dictionary call", function (t) {
		var stream = new Collinsdictionary("stream");
		stream.on("data", function (data) {
			t.ok(typeof data === "object");
		});
		stream.on("end", function () {
			t.end();
		});

	});
	
	t.end();

});