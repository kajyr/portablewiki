'use strict';

const fs = require('fs');

module.exports = {

	save: function(file, contents) {
		return new Promise(function(resolve, reject) {
			console.log(contents);
			fs.writeFile(file, contents, 'utf8', (err) => {
				if (err) return reject(err);
				resolve(file);
			});

		});
	}

	
}