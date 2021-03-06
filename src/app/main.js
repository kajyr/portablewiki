'use strict';

const electron = require('electron');
const util = require('util');

const pfs = require('./modules/p-fs.js');
const storage = require('basic-json-storage');

// Module to control application life.
const app = electron.app;

// Module to create native browser window.
const BrowserWindow = electron.BrowserWindow;



const ipcMain = electron.ipcMain;
const dialog = electron.dialog;

const dbPath = app.getPath('userData') + '/preferences.db';
const userdata = storage(dbPath);

// Keep a global reference of the window object, if you don't, the window will
// be closed automatically when the JavaScript object is garbage collected.
let mainWindow;

function createWindow () {
  userdata.get('WindowDimensions', {width: 800, height: 600})
  .then(function(windim) {
    // Create the browser window.
    mainWindow = new BrowserWindow(windim);

    // and load the index.html of the app.

    mainWindow.loadURL('file://' + __dirname + '/../index.html');

    // Open the DevTools.
    mainWindow.webContents.openDevTools();

    // Emitted when the window is closed.
    mainWindow.on('closed', function() {
      // Dereference the window object, usually you would store windows
      // in an array if your app supports multi windows, this is the time
      // when you should delete the corresponding element.
      mainWindow = null;
    });
  })
}

// This method will be called when Electron has finished
// initialization and is ready to create browser windows.
app.on('ready', createWindow);

// Quit when all windows are closed.
app.on('window-all-closed', function () {
  // On OS X it is common for applications and their menu bar
  // to stay active until the user quits explicitly with Cmd + Q
  if (process.platform !== 'darwin') {
    app.quit();
  }
});

app.on('activate', function () {
  // On OS X it's common to re-create a window in the app when the
  // dock icon is clicked and there are no other windows open.
  if (mainWindow === null) {
    createWindow();
  }
});

ipcMain.on('asynchronous-message', function(event, arg) {
  console.log(arg);  // prints "ping"
  event.sender.send('asynchronous-reply', 'pong: ' + arg);
});

ipcMain.on('base-path-get', function(event, arg) {
  userdata.get('base-path', './wiki').then(function(folder) {
    console.log('get', folder);
    event.sender.send('base-path-selected', folder);
  })
});

ipcMain.on('base-path-select', function(event, arg) {
  let folder = dialog.showOpenDialog({ properties: ['openDirectory' ]});
  if (folder === undefined) { return; }

  folder = folder[0];

  pfs.selectBasePath(folder)
  .then((newBase) => {
    return userdata.set('base-path', newBase)
  })
  .then((basePath) => {
    event.sender.send('base-path-selected', basePath);
  })

});

ipcMain.on('page-save', function(event, data) {
  pfs.save(data.page, data.contents).then(function(savedPath) {
    event.sender.send('page-saved', savedPath);
  });
});
