import baseConfig from './baseConfig.json';

type AppConfigType = typeof baseConfig;

export const appConfig: AppConfigType = {
  ...baseConfig
};
