// electron主进程文件
import path from 'node:path';
import { BrowserWindow, app, ipcMain } from 'electron';
import { CustomScheme } from '../plugins/CustomScheme';

app.whenReady().then(() => {
  const win = new BrowserWindow({
    height: 750,
    width: 1180,
    minHeight: 580,
    minWidth: 880,
    maxHeight: 880,
    maxWidth: 1380,
    titleBarStyle: 'default',
    // frame: false, // 隐藏默认边框
    icon: path.join(__dirname, 'favicon.ico'),
    webPreferences: {
      nodeIntegration: true, // 启用Node.js集成（可以在渲染进程中使用node的api 为了安全，默认关闭false）
      contextIsolation: false, // 禁用上下文隔离（关闭渲染进程的沙箱）
      webSecurity: false // 禁用web安全策略（关闭跨域检查）
    }
  });
  win.webContents.openDevTools();
  ipcMain.on('openFlyCar', (event, message) => {
    console.log('electron主进程打印方法：openFlyCar-----消息---', message);
    event.sender.send('flyCarResponse', `已收到消息${message}`);
  });
  setTimeout(() => {
    win.webContents.send('message', { message: '主进程传递子进程消息初始化' });
  }, 5000);
  // if (process.platform === 'darwin') {
  //   app.dock.setIcon(path.join(__dirname, './dist/favicon.ico'))
  // }
  console.log('process.argv', process.argv);
  if (process.argv[2]) {
    // 开发环境
    console.log('开发环境-------');
    win.loadURL(process.argv[2]);
  } else {
    // 生产打包环境
    // win.loadFile('index.html');
    // 最新打包路径配置
    console.log('生产打包环境-------');
    CustomScheme.registerScheme();
    win.loadURL(`app://index.html`);
  }
});
