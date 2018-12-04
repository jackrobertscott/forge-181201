const electron = require('electron');
const queryString = require('query-string');

const { ipcMain, BrowserWindow } = electron;

/**
 * Create a window to load github auth.
 */
function createAuthWindow(authUrl) {
  const window = new BrowserWindow({
    width: 800,
    height: 600,
    backgroundColor: '#fafbfc',
    titleBarStyle: 'hiddenInset',
    show: false,
  });
  window.loadURL(authUrl);
  window.show();
  return window;
}

/**
 * Handle the changed url.
 */
function handleCallback(url, authWindow, senderWindow) {
  if (
    url.startsWith('https://useforge.co') ||
    url.startsWith('http://localhost:3000')
  ) {
    const { query: { code, error } = {} } = queryString.parseUrl(url);
    if (code) {
      senderWindow.send('authGitHubCode', code);
    }
    if (error) {
      senderWindow.send('authGitHubError', error);
    }
    authWindow.destroy();
  }
}

/**
 * This listens for a "dismiss" event sent from the app.
 */
ipcMain.on('authGitHub', ({ sender }, authUrl) => {
  const senderWindow = sender;
  const authWindow = createAuthWindow(authUrl);
  authWindow.webContents.on('will-navigate', (_, url) =>
    handleCallback(url, authWindow, senderWindow)
  );
  authWindow.webContents.session.webRequest.onBeforeRedirect(
    ({ redirectURL }) => handleCallback(redirectURL, authWindow, senderWindow)
  );
});
