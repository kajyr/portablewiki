'use strict'

let pfs = require('../src/app/modules/p-fs.js')
let fs = require('fs')


exports.save = function(test) {

	pfs.save('expected/first.md', '# first')
	.then((file) => {
		test.equals(3, 3);
		test.done();


	})
	
			
};