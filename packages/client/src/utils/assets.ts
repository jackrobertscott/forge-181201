import config from '../config';

export const loadAsset = (localPath: string) => {
  return `${config.assetPath}/${localPath}`;
};
