/// <reference path="../typings/node/node.d.ts"/>

import {ServerResponse} from "http";
import {Readable, ReadableOptions} from "stream";
var trumpet = require("trumpet");
var request = require("request");

export = function(options): Readable {
	if (typeof options === "string") {
		options = { query: options };
	}
	var {query, lazy = false} = options;
	var stream = new Readable({ objectMode: true });
	var base: string = "https://words.bighugelabs.com/";
	var url = base + query;
	var tr = trumpet();
	var blackList = ["rhymes with"];
	var doEmit = true;
	var category: string = null;

	tr.selectAll("h3", (anchor) => {
		anchor.createReadStream().on("data", (chunk) => {
			category = chunk.toString();
			doEmit = blackList.indexOf(category) == -1;
		});
	});

	tr.selectAll("h3 + ul.words a", (anchor) => {
		anchor.createReadStream().on("data", (chunk) => {
			var word = chunk.toString();
			stream.push({ word, category });
		});
	});

	tr.on("end", () => stream.push(null));

	var startReading = () => {
		request(url).pipe(tr);
		startReading = () => { };
	};

	if (!lazy) {
		startReading();
	}

	stream._read = function() {
		startReading();
	};

	return stream;
};