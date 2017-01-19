const ipc = require('electron').ipcMain

ipc.on('asynchronous-message', function (event, arg) {
  // main progress 主动向某个render progress 发生消息
  // mainWindow = new BrowserWindow({});
  // webContent 才能发送消息
  // mainWindow.webContents.send('global-shortcut', 0);
  // win = BrowserWindow.fromWebContents(event.sender)
  event.sender.send('asynchronous-reply', 'pong')
})
