module.exports.createItems = ({ app, getWindow, showWindow }) => [
  {
    label: 'Open',
    accelerator: 'CmdOrCtrl+Shift+D',
    click: showWindow,
  },
  {
    type: 'separator',
  },
  {
    label: 'Inspect',
    accelerator: 'CmdOrCtrl+Alt+I',
    click: () => {
      const window = getWindow();
      if (window) {
        window.toggleDevTools();
      }
    },
  },
  {
    label: 'Reload',
    accelerator: 'CmdOrCtrl+R',
    click: () => {
      app.relaunch();
      app.exit();
    },
  },
  {
    label: 'Quit',
    accelerator: 'CmdOrCtrl+Q',
    click: () => {
      app.exit();
    },
  },
];
