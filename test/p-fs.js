'use strict'

const pfs = require('../src/app/modules/p-fs.js')
const fs = require('fs')
const path = require('path')

const testFolderTemplate = path.join(__dirname, 'expected-')

const testFolder = fs.mkdtempSync(testFolderTemplate)

console.log('Testing in', testFolder)

exports.testSave = function(test) {
	test.expect(2)

	let file = path.join(testFolder, 'first.md')

	pfs.save(file, '# first')
	.then((saved_file) => {
		test.equals(saved_file, file);

		fs.open(saved_file, 'r', function(error, fd) {

		    test.equals(error, null, 'File exists')
		    test.done()

		});

		
	})
	.catch(console.log)		
};


exports.testSelectBasePath = function(test) {
	test.expect(1)

	let folderName = path.join(testFolder, 'newBase');

	fs.mkdirSync(folderName)

	pfs.selectBasePath(folderName)
	.then((newBasePath) => {

		let indexFileName = path.join(newBasePath, 'index.md')

		fs.stat(indexFileName, (err) => {

			test.equals(err, null, 'Index file exists')
			test.done()

		})

	}).catch(console.log)
}