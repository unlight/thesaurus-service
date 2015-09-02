/// <reference path="../typings/node/node.d.ts"/>
var merge2 = require("merge2");
var Altervistaorg = require("./altervistaorg");
var Bighugelabs = require("./bighugelabs");
var CollinsDictionary = require("./collinsdictionary");
var Thesauruscom = require("./thesauruscom");
var Multitran = require("./multitran");
function stream(q) {
    var stream = merge2([
        new Bighugelabs(q),
        new Altervistaorg(q),
        new CollinsDictionary(q),
        new Thesauruscom(q),
        new Multitran(q)
    ]);
    return stream;
}
exports.stream = stream;
;
