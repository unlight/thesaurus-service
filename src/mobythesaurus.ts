/// <reference path="../typings/node/node.d.ts"/>

import Bighugelabs = require("./bighugelabs");

class Mobythesaurus extends Bighugelabs {

	protected _base = "http://moby-thesaurus.org/search?q=";
	protected _wordSelector = "ul.results li a[href]";

	constructor(options) {
		super(options);
	}

	protected get source() {
		return "mobythesaurus";
	}
}

export = Mobythesaurus;