'use strict'

let pfs = require('../src/app/modules/p-fs.js')
let fs = require('fs')


exports.save = function(test) {
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