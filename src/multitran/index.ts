/// <reference path="../../typings/node/node.d.ts"/>
/// <reference path="../../typings/request/request.d.ts"/>

import {ServerResponse} from "http";
import {Readable, ReadableOptions} from "stream";
import {ChunkWord} from "./../chunkword";
import * as request from "request";
var format = require("formatstring");
var trumpet = require("trumpet");
var iconv = require("iconv-lite");
import {isWordLink} from "./isWordLink";
import {createRequest} from "./createRequest";

class Multitran extends Readable {

	protected _query: string;
	protected _maxRequests: number;

	constructor(options: any) {
		super({ objectMode: true });
		if (typeof options === "string") {
			options = { query: options };
		}
		var {query, lazy = false, maxRequests = 10} = options;
		this._query = query;
		this._maxRequests = maxRequests;

		if (!lazy) {
			this.startReading();
		}
	}

	startReading() {

		var templateUrl: string = "http://www.multitran.ru/c/m.exe?s={query}";
		var url = format(templateUrl, { query: this._query });
		var tr = trumpet();
		var count: number = 0;

		tr.selectAll("tr td a[href]", (element) => {
			if (count > this._maxRequests) return;
			var href: string = element.getAttribute("href");
			if (!isWordLink(href)) return;
			var trm = trumpet();

			trm.selectAll("tr td a[href]", (element) => {
				var relativeLink: string = element.getAttribute("href");
				if (!isWordLink(relativeLink)) return;
				var readStream = element.createReadStream();
				readStream.on("data", (chunk: Buffer) => {
					var word = iconv.decode(chunk, "cp1251");
					var data: ChunkWord = <ChunkWord>{ word, source: this.source };
					this.push(data);
				});
			});

			trm.on("end", () => {
				if (--count === 0) {
					this.push(null);
				}
			});

			createRequest("http://www.multitran.ru/c/" + href).pipe(trm);
			count++;
		});

		createRequest(url).pipe(tr);

		this.startReading = () => { };
	}

	_read() {
		this.startReading();
		return null;
	}

	protected get source() {
		return "multitran";
	}
}

export = Multitran;