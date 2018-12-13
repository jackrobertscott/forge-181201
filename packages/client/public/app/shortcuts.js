const electron = require('electron');

const { globalShortcut, ipcMain } = electron;

module.exports = ({ createOrFocusWindow }) => {
  const defaultShortcuts = {
    exit: 'CommandOrControl+Q',
    open: 'CommandOrControl+D',
  };
  const shortcuts = Object.assign({}, defaultShortcuts);
  function updateShortcuts() {
    globalShortcut.unregisterAll();
    globalShortcut.register(
      shortcuts.open || defaultShortcuts.open,
      createOrFocusWindow
    );
    globalShortcut.register(shortcuts.exit, () => createOrFocusWindow(false));
  }
  ipcMain.on('updateShortcuts', (_, updates) => {
    Object.assign(shortcuts, updates || {});
    updateShortcuts();
  });
  updateShortcuts();
};
