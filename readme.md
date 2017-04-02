thesaurus-service
=================

[![Greenkeeper badge](https://badges.greenkeeper.io/unlight/thesaurus-service.svg)](https://greenkeeper.io/)
Provides synonym for word, uses remote sites (words.bighugelabs.com, thesaurus.altervista.org, thesaurus.com, etc.)

USAGE
-----
```js
var ts = require("thesaurus-service");
var streamTs = ts.stream("development"); // streamTs is a Readable stream
streamTs.on("data", function(data) {
	console.log(data.word); // evolutiong, rowthgrowing, maturation, ontogeny, ...
});
```

CHANGELOG
---------
1.0 (24 Jul 2015)
- First release

1.1 (2 Sep 2015)
- Added multitran.ru
- Added moby-thesaurus.org

1.2 (10 Sep 2015)
- Fixed readme usage section
- Fixed altervista (added error handler)