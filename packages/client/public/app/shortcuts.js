const electron = require('electron');

const { globalShortcut, ipcMain } = electron;

/**
 * Note that these "global" shortcuts are global
 * and will overwrite other shortcuts.
 */
module.exports = ({ createOrFocusWindow }) => {
  const defaultShortcuts = {
    open: 'CommandOrControl+Shift+D',
  };
  const shortcuts = Object.assign({}, defaultShortcuts);
  function updateShortcuts() {
    globalShortcut.unregisterAll();
    globalShortcut.register(
      shortcuts.open || defaultShortcuts.open,
      createOrFocusWindow
    );
  }
  ipcMain.on('updateShortcuts', (_, updates) => {
    Object.assign(shortcuts, updates || {});
    updateShortcuts();
  });
  updateShortcuts();
};
