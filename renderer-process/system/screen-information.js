const electronScreen = require('electron').screen

const screenInfoBtn = document.getElementById('screen-info')
// getPrimaryDisplay 获取桌面大小size  可操作桌面大小workArea
const size = electronScreen.getPrimaryDisplay().size

screenInfoBtn.addEventListener('click', function () {
  const message = `Your screen is: ${size.width}px x ${size.height}px`
  document.getElementById('got-screen-info').innerHTML = message
})
