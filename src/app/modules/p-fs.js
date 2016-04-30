'use strict';

const fs = require('fs');
const path = require('path');

module.exports = {

	save: function(file, contents) {
		return new Promise(function(resolve, reject) {
			fs.writeFile(file, contents, 'utf8', (err) => {
				if (err) return reject(err);
				resolve(file);
			});

		});
	},

	/*
		Selects a new root folder for your own wiki.
		If the first file does not exists, it will be created.
	*/
	selectBasePath: (folder) => {
		return new Promise(function(resolve, reject) {
			let indexFileName = path.join(folder, 'index.md')
			fs.writeFile(indexFileName, '# Welcome', { flag: 'wx' }, (err) => {
				resolve(folder)
			});
		});
	}

	
}