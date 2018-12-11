const electron = require('electron');
const isDev = require('electron-is-dev');
const url = require('url');
const path = require('path');
const Sentry = require('@sentry/electron');
const { autoUpdater } = require('electron-updater');
const { createItems } = require('./app/menu');
const enableKeyboard = require('./app/keyboard');
const enableShortcuts = require('./app/shortcuts');
const config = require('./app/config');

const { app, BrowserWindow, ipcMain, Tray, Menu } = electron;
const isMac = process.platform === 'darwin';
const isWin = process.platform && process.platform.indexOf('win') !== -1;

/**
 * Configure error reporting.
 */
if (!isDev) {
  Sentry.init({
    dsn: 'https://d0b3058a07a143e8b2e80c1eae7299e7@sentry.io/1304463',
  });
}

/**
 * Global reference of main window will prevent it
 * from being destroyed when variable garbage collection
 * is performed.
 */
let window;
let tray;

/**
 * Focus the window into the correct position.
 */
function openAndCenterWindow() {
  const { screen } = electron;
  const { x, y } = screen.getCursorScreenPoint();
  const { workArea } = screen.getDisplayNearestPoint({ x, y });
  const currentPosition = window.getPosition();
  const isInDisplay =
    currentPosition[0] >= workArea.x &&
    currentPosition[0] <= workArea.x + workArea.width &&
    currentPosition[1] >= workArea.y &&
    currentPosition[1] <= workArea.y + workArea.height;
  if (isInDisplay && window.isVisible()) {
    window.hide();
  } else {
    if (!isInDisplay) {
      const windowSize = window.getSize();
      const fromLeft = Math.round(
        workArea.x + (workArea.width - windowSize[0]) / 2
      );
      const fromTop = Math.round(
        workArea.y + (workArea.height - windowSize[1]) / 2
      );
      window.setPosition(fromLeft, fromTop);
    }
    window.show();
    window.focus();
    window.webContents.send('focused');
  }
}

/**
 * Create the main application window.
 */
function createWindow() {
  window = new BrowserWindow({
    width: 1000,
    height: isWin ? 585 : 530,
    backgroundColor: '#000',
    titleBarStyle: 'hiddenInset',
    title: 'Forge',
    show: false,
  });
  const appUrl = isDev
    ? 'http://localhost:3000'
    : url.format({
        pathname: path.join(__dirname, '../build/index.html'),
        protocol: 'file:',
        slashes: true,
      });
  window.loadURL(appUrl);
  window.on('closed', () => {
    window = null;
  });
}

/**
 * Determine if there is already an existing window to
 * focus on or if we need to create a new window.
 */
function createOrFocusWindow(override) {
  if (typeof override === 'boolean' && !override) {
    if (window) {
      window.hide();
    }
  } else {
    if (!window) {
      createWindow();
    }
    openAndCenterWindow();
  }
}

/**
 * Create the tray to go in notification icons panel.
 */
function createTray() {
  const menu = Menu.buildFromTemplate(
    createItems({
      app,
      getWindow: () => window,
      showWindow: createOrFocusWindow,
    })
  );
  tray = new Tray(path.join(__dirname, './assets/electron/TrayTemplate.png'));
  tray.setToolTip('Forge');
  tray.setContextMenu(menu);
  return tray;
}

/**
 * Send the app a message when ready to update.
 */
function enableUpdateEvents() {
  autoUpdater.on(
    'update-available',
    () =>
      window &&
      window.webContents.send('update', {
        type: 'available',
      })
  );
  autoUpdater.on(
    'update-downloaded',
    () =>
      window &&
      window.webContents.send('update', {
        type: 'downloaded',
      })
  );
  autoUpdater.checkForUpdatesAndNotify();
}

/**
 * This listens for a "dismiss" event sent from the app.
 */
ipcMain.on('dismiss', () => window && window.hide());

/**
 * The relaunch call can be found on the error screen.
 */
ipcMain.on('relaunch', () => {
  app.relaunch();
  app.exit();
});

/**
 * Quit and update the app when it's ready.
 */
ipcMain.on('quitAndUpdate', () => autoUpdater.quitAndInstall());

/**
 * Execute tasks once the react application has loaded.
 */
ipcMain.on('ready', () => {
  if (!isDev) {
    enableUpdateEvents();
  }
  if (window) {
    window.webContents.send('settings', {
      platform: process.platform,
    });
  }
});

/**
 * When the electron process has finished initializing
 * we can begin to add windows.
 */
app.on('ready', () => {
  createTray();
  createWindow();
  enableKeyboard();
  enableShortcuts({ createOrFocusWindow });
  if (config.openOnStart) {
    openAndCenterWindow();
  }
});

/**
 * When the user clicks the dock icon to open or focus the app.
 */
if (isMac) {
  app.on('activate', createOrFocusWindow);
}

/**
 * Hide the app from the dock.
 */
if (isMac && config.hideDockOnStart) {
  app.dock.hide();
}

/**
 * Get app to open when user logs in.
 */
if (isMac || isWin) {
  app.setLoginItemSettings({
    openAtLogin: true,
  });
}
