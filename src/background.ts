"use strict";
import { app, protocol, BrowserWindow, Menu } from "electron";
import {
  createProtocol,
  installVueDevtools
} from "vue-cli-plugin-electron-builder/lib";
const isDevelopment = process.env.NODE_ENV !== "production";
const shell = require("electron").shell;
// Keep a global reference of the window object, if you don't, the window will
// be closed automatically when the JavaScript object is garbage collected.
let win;

// Scheme must be registered before the app is ready
protocol.registerSchemesAsPrivileged([
  {
    scheme: "app",
    privileges: {
      secure: true,
      standard: true
    }
  }
]);

function createWindow() {
  // Create the browser window.
  win = new BrowserWindow({
    width: 800,
    height: 600,
    webPreferences: {
      nodeIntegration: true
    }
  });

  if (process.env.WEBPACK_DEV_SERVER_URL) {
    // Load the url of the dev server if in development mode

    win.loadURL(process.env.WEBPACK_DEV_SERVER_URL);
    if (!process.env.IS_TEST) win.webContents.openDevTools();
  } else {
    createProtocol("app");
    // Load the index.html when not in development
    win.loadURL("app://./index.html");
  }

  win.on("closed", () => {
    win = null;
  });
  var menu = Menu.buildFromTemplate([
    {
      label: "Menu",
      submenu: [
        {
          label: "Login",
          click() {
            this.$router.push("/login");
          }
        },
        {
          type: "separator"
        },
        {
          label: "Acasa",
          click() {
            shell.openExternal(
              "https://www.google.com/maps/@45.7592243,21.2397588,3a,75y,13.22h,87.46t/data=!3m6!1e1!3m4!1sMEzXO18f41PIeTh43ng__A!2e0!7i13312!8i6656"
            );
          }
        },
        {
          label: "Acasa la mamaia",
          click() {
            shell.openExternal(
              "https://www.google.com/maps/@47.1088378,26.3386362,3a,76y,358.86h,82.63t/data=!3m9!1e1!3m7!1sVKHuX30yMLJIMieh8Vfi1A!2e0!7i13312!8i6656!9m2!1b1!2i40"
            );
          }
        },
        {
          label: "Folders"
        },
        {
          type: "separator"
        },
        {
          label: "Exit",
          click() {
            app.quit();
          }
        }
      ]
    },
    {
      label: "Help",
      submenu: [
        {
          label: "Menu Docs",
          click() {
            shell.openExternal("https://electronjs.org/docs/api/menu");
          }
        }
      ]
    }
  ]);
  Menu.setApplicationMenu(menu);
}

// Quit when all windows are closed.
app.on("window-all-closed", () => {
  // On macOS it is common for applications and their menu bar
  // to stay active until the user quits explicitly with Cmd + Q
  if (process.platform !== "darwin") {
    app.quit();
  }
});

app.on("activate", () => {
  // On macOS it's common to re-create a window in the app when the
  // dock icon is clicked and there are no other windows open.
  if (win === null) {
    createWindow();
  }
});

// This method will be called when Electron has finished
// initialization and is ready to create browser windows.
// Some APIs can only be used after this event occurs.
app.on("ready", async () => {
  if (isDevelopment && !process.env.IS_TEST) {
    // Install Vue Devtools
    try {
      await installVueDevtools();
    } catch (e) {
      console.error("Vue Devtools failed to install:", e.toString());
    }
  }
  createWindow();
  // let top = new BrowserWindow();

  // let child = new BrowserWindow({
  //   parent: top,
  //   modal: true,
  //   show: false
  // });
  // child.loadURL("https://github.com");
  // child.once("ready-to-show", () => {
  //   child.show();
  // });
});

// Exit cleanly on request from parent process in development mode.
if (isDevelopment) {
  if (process.platform === "win32") {
    process.on("message", data => {
      if (data === "graceful-exit") {
        app.quit();
      }
    });
  } else {
    process.on("SIGTERM", () => {
      app.quit();
    });
  }
}
