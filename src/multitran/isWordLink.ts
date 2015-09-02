import {parse as parseUrl, Url} from "url";

export function isWordLink(href): boolean {
	var result: boolean = false;
	var components = parseUrl(href, true);
	var query = components.query;
	if (query.s1) {
		result = true;
		if (query.ifp || query.a) {
			result = false;
		}
	}
	return result;
}