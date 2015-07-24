/// <reference path="../typings/node/node.d.ts"/>

import Bighugelabs = require("./bighugelabs");

class CollinsDictionary extends Bighugelabs {

	protected _base = "http://www.collinsdictionary.com/dictionary/english-thesaurus/";
	protected _categorySelector = "h4 > span";
	protected _wordSelector = "ol.sense_list a.xr_ref_link";

	constructor(options) {
		super(options);
	}

	protected get source() {
		return "collinsdictionary";
	}
}

export = CollinsDictionary;