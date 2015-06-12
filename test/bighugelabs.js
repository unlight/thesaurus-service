/// <reference path="../typings/mocha/mocha.d.ts"/>
var assert = require("assert");
var request = require("request");
var stream = require("stream");
var s = new stream.Writable();
var oldEmit = s.emit.bind(s);
s.emit = function () {
	console.log(arguments);
	oldEmit();
	return true;
};

describe("bighugelabs service", function () {

	this.timeout(5000);
	var Stream = require("./../build/bighugelabs.js");

	it("should be a function", function () {
      assert.ok(typeof Stream === "function");
	});

	it("should be a readable stream with constructor", function () {
		var isReadableStream = require("is-readable-stream");
		var s1 = new Stream({ query: "user", lazy: false });
      assert.ok(isReadableStream(s1));
	});

	it("should be a readable stream with call", function () {
		var isReadableStream = require("is-readable-stream");
		var s2 = Stream({ query: "person", lazy: false });
      assert.ok(isReadableStream(s2));
	});

	it("call should be ok", function (done) {
		var stream = new Stream("stream");
		stream.on("data", function (data) {
			assert.ok(typeof data === "object");
		});
		stream.on("end", function () {
			done();
		});
	});

});