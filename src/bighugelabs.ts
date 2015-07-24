/// <reference path="../typings/node/node.d.ts"/>

import {ServerResponse} from "http";
import {Readable, ReadableOptions} from "stream";
var trumpet = require("trumpet");
var request = require("request");

class Bighugelabs extends Readable {

	protected _base: string = "https://words.bighugelabs.com/";
	protected _categorySelector: string = "h3";
	protected _wordSelector: string = "h3 + ul.words a";
	protected _query;

	constructor(options) {
		super({ objectMode: true });
		if (typeof options === "string") {
			options = { query: options };
		}
		var {query, lazy = false} = options;
		this._query = query;

		if (!lazy) {
			process.nextTick(() => this.startReading());
		}
	}

	getRequestUrl() {
		var url = this._base + this._query;
		return url;
	}

	protected get source() {
		return "bighugelabs";
	}

	startReading() {
		var url = this.getRequestUrl();
		var tr = trumpet();
		var blackList = ["rhymes with"];
		var doEmit = true;
		var category: string = null;

		tr.selectAll(this._categorySelector, (element) => {
			element.createReadStream().on("data", (chunk) => {
				category = chunk.toString();
				doEmit = blackList.indexOf(category) == -1;
			});
		});

		tr.selectAll(this._wordSelector, (element) => {
			element.createReadStream().on("data", (chunk) => {
				var word = chunk.toString();
				this.push({ word, category, source: this.source });
			});
		});

		tr.on("end", () => this.push(null));

		request(url).pipe(tr);
		this.startReading = () => { };
	}

	_read() {
		this.startReading();
		return null;
	}
}

export = Bighugelabs;