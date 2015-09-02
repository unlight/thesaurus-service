/// <reference path="../../typings/node/node.d.ts"/>
/// <reference path="../../typings/request/request.d.ts"/>

import * as request from "request";
var format = require("formatstring");

export function createRequest(url: string) : request.Request {
	var result = request({
		url: url,
		headers: {
			"User-Agent": "Mozilla/5.0 (Windows NT 6.3)"
		}
	});
	return result;
}