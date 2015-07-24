/// <reference path="../typings/node/node.d.ts"/>
/// <reference path="../typings/request/request.d.ts"/>

import {Readable, ReadableOptions} from "stream";
import * as request from "request";
import Bighugelabs = require("./bighugelabs");
var trumpet = require("trumpet");
var format = require("formatstring");

class Thesauruscom extends Bighugelabs {
	
	protected _base = "http://www.thesaurus.com/browse/";
	protected _wordSelector = ".relevancy-list .text";

	constructor(options) {
		super(options);
	}
	
	startReading() {
		var url = this.getRequestUrl();
		var tr = trumpet();
		var blackList = ["rhymes with"];
		var doEmit = true;
		var category: string = null;

		tr.selectAll(this._wordSelector, (element) => {
			element.createReadStream().on("data", (chunk) => {
				var word = chunk.toString();
				var category = "relevancy";
				this.push({ word, category, source: this.source });
			});
		});

		tr.on("end", () => this.push(null));

		request(url).pipe(tr);
		this.startReading = () => { };
	}


	protected get source() {
		return "thesauruscom";
	}


};

export = Thesauruscom;