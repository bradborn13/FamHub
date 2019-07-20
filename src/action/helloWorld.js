const electron = require('electron');
const path = require('path');
const BrowserWindow = electron.remote.BrowserWindow;

const notifyBtn = document.getElementById('notifyBtn');
notifyBtn.addEventListener('click', (event) => {
    const modalPath = path.join('file://', __dirname, 'login.vue');
    let win = new BrowserWindow({
        width: 400,
        height: 200
    })
    win.on('close', function () {
        win = null
    });
    win.loadUrl(modalPath);
    win.show();
});