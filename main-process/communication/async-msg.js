const ipc = require('electron').ipcMain

ipc.on('asynchronous-message', function (event, arg) {
  // main progress 主动向某个render progress 发生消息
  // mainWindow = new BrowserWindow({});
  // mainWindow.webContents.send('global-shortcut', 0);
  event.sender.send('asynchronous-reply', 'pong')
})
