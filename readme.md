thesaurus-service
=================
Provides synonym for word, uses remote sites (words.bighugelabs.com, thesaurus.altervista.org, thesaurus.com, etc.)

USAGE
-----
```js
var ts = require("thesaurus-service");
var streamTs = ts("development"); // streamTs is Readable stream
streamTs.on("data", function(data) {
	console.log("word", data.word); // evolutiong, rowthgrowing, maturation, ontogeny, ...
});
```

TODO
----
- Add http://www.multitran.ru
- Add http://moby-thesaurus.org/search?q=word

CHANGELOG
---------
1.0.0 (24 Jul 2015)
- First release