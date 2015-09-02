var url_1 = require("url");
function isWordLink(href) {
    var result = false;
    var components = url_1.parse(href, true);
    var query = components.query;
    if (query.s1) {
        result = true;
        if (query.ifp || query.a) {
            result = false;
        }
    }
    return result;
}
exports.isWordLink = isWordLink;
