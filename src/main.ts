/// <reference path="../typings/node/node.d.ts"/>

var merge2 = require("merge2");

import Altervistaorg = require("./altervistaorg");
import Bighugelabs = require("./bighugelabs");
import CollinsDictionary = require("./collinsdictionary");
import Thesauruscom = require("./thesauruscom");

function stream(q: string) {

	var stream = merge2([
		new Bighugelabs(q),
		new Altervistaorg(q),
		new CollinsDictionary(q),
		new Thesauruscom(q),
	]);

	return stream;
};

export {stream};