import { theme as antTheme } from 'antd';

const { defaultAlgorithm, darkAlgorithm } = antTheme;

export const getTheme = (theme: string) => {
  const algorithm = theme === 'dark' ? darkAlgorithm : defaultAlgorithm;
  const colorBgBase = theme === 'dark' ? '#151b29' : '#eef3ff';
  return {
    algorithm,
    token: {
      colorPrimary: '#6451ce',
      colorBgBase,
      colorInfo: '#6451ce'
    }
  };
};
