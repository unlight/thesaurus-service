/// <reference path="../typings/node/node.d.ts"/>
var merge2 = require("merge2");
var Altervistaorg = require("./altervistaorg");
var Bighugelabs = require("./bighugelabs");
var CollinsDictionary = require("./collinsdictionary");
var Thesauruscom = require("./thesauruscom");
var Multitran = require("./multitran");
var Mobythesaurus = require("./mobythesaurus");
var EService = require("./eservice");
var issetbit = require("issetbit");
function stream(q) {
    var stream = merge2([
        new Bighugelabs(q),
        new Altervistaorg(q),
        new CollinsDictionary(q),
        new Thesauruscom(q),
        new Multitran(q),
        new Mobythesaurus(q)
    ]);
    return stream;
}
exports.stream = stream;
;
function createStream(q, mask) {
    var services = [];
    if (issetbit(mask, EService.Bighugelabs))
        services.push(new Bighugelabs(q));
    if (issetbit(mask, EService.Altervistaorg))
        services.push(new Altervistaorg(q));
    if (issetbit(mask, EService.CollinsDictionary))
        services.push(new CollinsDictionary(q));
    if (issetbit(mask, EService.Thesauruscom))
        services.push(new Thesauruscom(q));
    if (issetbit(mask, EService.Multitran))
        services.push(new Multitran(q));
    if (issetbit(mask, EService.Mobythesaurus))
        services.push(new Mobythesaurus(q));
    var stream = merge2(services);
    return stream;
}
exports.createStream = createStream;
