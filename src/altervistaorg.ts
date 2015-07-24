/// <reference path="../typings/node/node.d.ts"/>
/// <reference path="../typings/request/request.d.ts"/>

import {Readable, ReadableOptions} from "stream";
import * as request from "request";
var format = require("formatstring");
const source = "altervistaorg";

interface IResponseElement {
	list: { category: string, synonyms: string };
}


class Altervista extends Readable {

	constructor(options: any) {
		super({ objectMode: true });
		if (typeof options === "string") {
			options = { query: options };
		}
		var {query} = options;
		var templateUrl: string = "http://thesaurus.altervista.org/service.php?word={word}&language=en_US&output=json&key={key}";
		// todo: to config
		// todo: make option lazy
		var url: string = format(templateUrl, {
			word: query,
			key: "txXYFyF4UgFiNsFY3oB7"
		});

		request(url, (error, response, body) => {
			var jsonResponse: Array<IResponseElement> = JSON.parse(body).response;
			jsonResponse.forEach(this._parseList, this);
			this.push(null);
		});
	}

	_read(count: number) {
	}

	private _parseList(item: IResponseElement): void {
		var category = this._parseCategory(item.list.category);
		var array: Array<string> = item.list.synonyms.split("|");
		for (var index = 0; index < array.length; index++) {
			var word = array[index];
			var data = { word, category, source};
			this.push(data);
		}
	}

	private _parseCategory(category: string): string {
		var result = category.slice(1, -1);
		return result;
	}
};

export = Altervista;