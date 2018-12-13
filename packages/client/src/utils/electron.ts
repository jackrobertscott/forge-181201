export const runElectron = (
  withElectron: (electron: any) => void,
  withoutElectron?: () => void
) => {
  let electron;
  try {
    electron = (window as any).require('electron');
  } catch (error) {
    electron = null;
  }
  if (electron) {
    return withElectron && withElectron(electron);
  }
  return withoutElectron && withoutElectron();
};
