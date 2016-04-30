'use strict'

const pfs = require('../src/app/modules/p-fs.js')
const fs = require('fs')


exports.testSave = function(test) {
	let file = './test/expected/first.md'
	pfs.save(file, '# first')
	.then((saved_file) => {
		test.equals(saved_file, file);

		fs.open(saved_file, 'r', function(error, fd) {

		    test.equals(error, null, 'File exists');
		    test.done();

		});

		
	})
	.catch(console.log)
	
			
};