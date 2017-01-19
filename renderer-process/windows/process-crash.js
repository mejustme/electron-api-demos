// GUI-related modules (such as dialog, menu etc.) are only available in the main process
// 可以通过 remote.xxx 来获取,main 环境上下文才有的模块、方法 本质都是在main 中执行返回给render的，通信被黑盒
// 只要可枚举类型才能被remote 访问，本质深度拷贝，故render 中修改对象，main中不变
// http://electron.atom.io/docs/api/remote/
// 相反的 我们可以通过 win.webContents.executeJavascript 在main progress 中运行 render 环境的代码

const BrowserWindow = require('electron').remote.BrowserWindow
const dialog = require('electron').remote.dialog

const path = require('path')

const processCrashBtn = document.getElementById('process-crash')

processCrashBtn.addEventListener('click', function (event) {
  const crashWinPath = path.join('file://', __dirname, '../../sections/windows/process-crash.html')
  let win = new BrowserWindow({ width: 400, height: 320 })

  win.webContents.on('crashed', function () {
    const options = {
      type: 'info',
      title: 'Renderer Process Crashed',
      message: 'This process has crashed.',
      buttons: ['Reload', 'Close']
    }
    dialog.showMessageBox(options, function (index) {
      if (index === 0) win.reload()
      else win.close()
    })
  })

  win.on('close', function () { win = null })
  win.loadURL(crashWinPath)
  win.show()
})
