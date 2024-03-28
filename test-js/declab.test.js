import xml2js from "../lib/xml2js";
import {assert, describe, it} from 'vitest';

const builder = new xml2js.Builder({
	attrkey: "_",
	indexkey: "@",
	charkey: "#",
	indexing: true
});

const parser = new xml2js.Parser({
	attrkey: "_",
	indexkey: "@",
	charkey: "#",
	explicitArray: true,
});

describe('declab.test', () => {
	it('should keep order of tags', async () => {
		const expected =
			"<?xml version=\"1.0\" encoding=\"UTF-8\" standalone=\"yes\"?>\n" +
			"<xml>\n" +
			"  <foo>1</foo>\n" +
			"  <foo>3</foo>\n" +
			"  <bar>2</bar>\n" +
			"</xml>";
		const obj = await parser.parseStringPromise(expected);
		const actual = builder.buildObject(obj);

		assert.strictEqual(actual, expected);
	});
});
