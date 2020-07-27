const assert = require('assert');

// You can import and use all API from the 'vscode' module
// as well as import your extension to test it
const vscode = require('vscode');
const myExtension = require('../../extension');

suite('Extension Test Suite', () => {
	vscode.window.showInformationMessage('Start all tests.');

	test('Sample test', () => {
		assert.equal(-1, [1, 2, 3].indexOf(5));
		assert.equal(-1, [1, 2, 3].indexOf(0));
	});
	test('URI', () => {
		console.log("myExtension %O",myExtension);
		myExtension.activate();
		const asset = myExtension.resolveAsset("xxx", "yy");
		
		var blah = (async () => {
			const result = await asset;
			//expect(result).to.equal('promise resolved'); 
			console.log("XXXX" + result);
		});
		blah();

		console.log("asset");
		assert.equal(-1, [1, 2, 3].indexOf(5));
		assert.equal(-1, [1, 2, 3].indexOf(0));
	});

	https://github.com/microsoft/vscode-extension-samples/blob/master/lsp-log-streaming-sample/client/src/test/helper.ts

});
