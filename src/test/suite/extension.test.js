const assert = require('assert');

const vscode = require('vscode');
const myExtension = require('../../extension');

suite('Extension Test Suite', () => {
	vscode.window.showInformationMessage('Start all tests.');

	//@note Check if this is going to work on Windows only? I think there's some platform specific bits in the 
	test('RelativeFilePathWindows1', async () => {
		const asset = myExtension.resolveAsset("c:\\eoin\\assets\\Kitchen_set\\Kitchen_set\\Kitchen_set.usd", "./assets/Kitchen/Kitchen.usd");
		const result = await asset;
		const expectedResult = "c:\\eoin\\assets\\Kitchen_set\\Kitchen_set\\Kitchen_set.usd";
		assert.equal(result, encodeURI(expectedResult));
	});
});
