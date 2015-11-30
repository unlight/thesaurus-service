/// <reference path="../typings/node/node.d.ts"/>

var merge2 = require("merge2");

import Altervistaorg = require("./altervistaorg");
import Bighugelabs = require("./bighugelabs");
import CollinsDictionary = require("./collinsdictionary");
import Thesauruscom = require("./thesauruscom");
import Multitran = require("./multitran");
import Mobythesaurus = require("./mobythesaurus");
import EService = require("./eservice");
import issetbit = require("issetbit");

export function stream(q: string) {

	var stream = merge2([
		new Bighugelabs(q),
		new Altervistaorg(q),
		new CollinsDictionary(q),
		new Thesauruscom(q),
		new Multitran(q),
		new Mobythesaurus(q)
	]);

	return stream;
};

export function createStream(q: string, mask: number) {
	var services = [];
	if (issetbit(mask, EService.Bighugelabs)) services.push(new Bighugelabs(q)); 
	if (issetbit(mask, EService.Altervistaorg)) services.push(new Altervistaorg(q)); 
	if (issetbit(mask, EService.CollinsDictionary)) services.push(new CollinsDictionary(q)); 
	if (issetbit(mask, EService.Thesauruscom)) services.push(new Thesauruscom(q)); 
	if (issetbit(mask, EService.Multitran)) services.push(new Multitran(q)); 
	if (issetbit(mask, EService.Mobythesaurus)) services.push(new Mobythesaurus(q)); 
	var stream = merge2(services);
	return stream;
}