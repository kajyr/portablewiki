'use strict';

const electron = require('electron');

const PouchDB = require('pouchdb');

const app = electron.app;

const db = new PouchDB(app.getPath('userData') + '/preferences.db');

module.exports = {

	set: function(pref, value) {
		return this._rawGet(pref, value)
		.then(function(doc) {
			doc.value = value;
			return db.put(doc);
		});
	},

	_rawGet: function(pref, def) {
		return db.get(pref).catch(function(err) {
			if (err.status === 404) { return {
				_id: pref,
				value: def
			}; }
			return err;
		})
	},

	get: function(pref, def) {
		return this._rawGet(pref, def).then((doc) => doc.value)
	}
}