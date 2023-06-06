import { useState, CSSProperties } from 'react';
import { Link } from 'react-router-dom';
import { Drawer, Button, Grid, Typography } from 'antd';
import { MenuOutlined, CloseCircleFilled } from '@ant-design/icons';

import { useTheme } from '../../context';
import { ReactComponent as LogoIcon } from '../../../public/logo.svg';
import Menu from './menu';
import ThemeSwitcher from '../theme-switcher';
import { Paths } from '../../paths';

const { useBreakpoint } = Grid;

const navbarStyle: CSSProperties = {
  flexGrow: 1,
  display: 'flex',
  justifyContent: 'space-between',
  alignItems: 'center'
};

const logoStyle: CSSProperties = {
  fontFamily: 'var(--logo-font-family)',
  fontSize: 24
};

const mobileSwitcherStyle: CSSProperties = {
  display: 'flex',
  justifyContent: 'flex-end',
  marginBottom: 20
};

const Navbar = () => {
  const [visible, setVisible] = useState(false);
  const { md } = useBreakpoint();
  const { theme, setTheme } = useTheme();

  const toogleTheme = () => {
    setTheme(theme === 'light' ? 'dark' : 'light');
  };

  return (
    <nav style={navbarStyle}>
      <Link style={{ display: 'flex', alignItems: 'center', gap: 20 }} to={Paths.home}>
        <LogoIcon style={{ width: 40 }} />
        <Typography.Text style={logoStyle}>Employees</Typography.Text>
      </Link>

      <div style={{ display: md ? 'flex' : 'none', alignItems: 'center', gap: 20 }}>
        <Menu />
        <ThemeSwitcher toogleTheme={toogleTheme} theme={theme} />
      </div>

      <Button
        shape='circle'
        style={{ display: md ? 'none' : 'block' }}
        onClick={() => setVisible(true)}>
        <MenuOutlined />
      </Button>
      <Drawer
        title={<h1>Navigation</h1>}
        destroyOnClose={true}
        placement='right'
        closable={true}
        onClose={() => setVisible(false)}
        closeIcon={<CloseCircleFilled style={{ fontSize: 24 }} />}
        visible={visible}>
        <div style={mobileSwitcherStyle}>
          <ThemeSwitcher toogleTheme={toogleTheme} theme={theme} />
        </div>
        <Menu closeDrawer={() => setVisible(false)} />
      </Drawer>
    </nav>
  );
};

export default Navbar;
