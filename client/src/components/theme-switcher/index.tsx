import { FC, CSSProperties } from 'react';
import { ReactComponent as SunIcon } from '../../assets/sun.svg';
import { ReactComponent as MoonIcon } from '../../assets/moon.svg';
import { Switch } from 'antd';

interface SwitcherProps {
  theme: string;
  toogleTheme: () => void;
}

const moonStyles: CSSProperties = {
  transform: 'translate(-5px, 2px)'
};

const sunStyles: CSSProperties = {
  transform: 'translate(6px, -1px)'
};

const ThemeSwitcher: FC<SwitcherProps> = ({ theme, toogleTheme }) => {
  return (
    <Switch
      onChange={toogleTheme}
      checkedChildren={<MoonIcon width={16} height={18} style={moonStyles} />}
      unCheckedChildren={<SunIcon width={18} height={20} style={sunStyles} />}
      checked={theme === 'dark'}
    />
  );
};

export default ThemeSwitcher;
