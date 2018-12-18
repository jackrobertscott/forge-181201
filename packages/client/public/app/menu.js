module.exports.createItems = ({ app, getWindow, showWindow }) => [
  {
    label: 'Open',
    accelerator: 'CommandOrControl+Shift+D',
    click: showWindow,
  },
  {
    type: 'separator',
  },
  {
    label: 'Inspect',
    accelerator: 'Alt+CommandOrControl+I',
    click: () => {
      const window = getWindow();
      if (window) {
        window.toggleDevTools();
      }
    },
  },
  {
    label: 'Reload',
    accelerator: 'CommandOrControl+R',
    click: () => {
      app.relaunch();
      app.exit();
    },
  },
  {
    label: 'Quit',
    accelerator: 'CommandOrControl+Q',
    click: () => {
      app.quit();
    },
  },
];
