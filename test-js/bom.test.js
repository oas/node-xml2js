import xml2js from "../lib/xml2js";
import {assert, describe, it} from 'vitest';

describe('bom.test', () => {
	it('test decoded BOM', async () => {
		const demo = '\uFEFF<xml><foo>bar</foo></xml>';
		xml2js.parseString(demo, function (err, res) {
			assert.strictEqual(err, null);
			assert.strictEqual(res.xml.foo[0], "bar");
		});
	});
});
