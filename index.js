const electron= require('electron')

function createWindow() {
    let win = new electron.BrowserWindow({width: 300, height: 200})
    win.loadFile('index.html')
}

electron.app.on("ready", createWindow);
electron.app.on("window-all-closed", () => {electron.app.quit()});

console.log('node version ' + process.versions.node);
console.log('chrome version ' + process.versions.chrome);
console.log('node electron ' + process.versions.electron);
