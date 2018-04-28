const { app, BrowserWindow } = require('electron');

path = require('path');
url = require('url');

let win;

function createWindow() {
	win = new BrowserWindow({
		width: 600,
		height: 600,
		backgroundColor: '#ffffff',
		icon: 'file://{__dirname}/dist/assets/images/logo/logo.png'
	});
	
	//win.loadURL('file://{__dirname}/dist/index.html');

	/*win.loadURL(url.format({
      //__dirname is the current working dir
      pathname: path.join(__dirname, 'dist', 'index.html'),
      protocol: 'file:',
      slashes: true
  }));*/

  win.loadURL("http://localhost:4200/")

	win.webContents.openDevTools();
	//Event when the window is closed.
	win.on('closed', function () {
		win = null;
	});

}

//Create the window on electron initialization.
app.on('ready', createWindow);

//Quit when all windows are closed.
app.on('window-all-closed', function () {

	//On macOS specific close process.
	if (process.platform != 'darwin') {
		app.quit();
	}
});

app.on('activate', function () {
	//macOS specific close process.
	if (win == null) {
		createWindow();
	}
});