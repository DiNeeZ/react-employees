import { useState, CSSProperties } from 'react';
import { Link } from 'react-router-dom';
import { Drawer, Button, Grid } from 'antd';
import { MenuOutlined, CloseCircleFilled } from '@ant-design/icons';

import { ReactComponent as LogoIcon } from '../../../public/logo.svg';
import Menu from './menu';
import { Paths } from '../../paths';

const { useBreakpoint } = Grid;

const navbarStyle: CSSProperties = {
  display: 'flex',
  justifyContent: 'space-between',
  alignItems: 'center'
};

const Navbar = () => {
  const [visible, setVisible] = useState(false);
  const { md } = useBreakpoint();

  return (
    <nav style={navbarStyle}>
      <Link style={{ display: 'flex', alignItems: 'center', gap: 20 }} to={Paths.home}>
        <LogoIcon style={{ width: 40 }} />
        <span>LOGO</span>
      </Link>
      <div style={{ display: md ? 'block' : 'none' }}>
        <Menu />
      </div>
      <Button
        shape='circle'
        style={{ display: md ? 'none' : 'block' }}
        onClick={() => setVisible(true)}>
        <MenuOutlined />
      </Button>
      <Drawer
        title='Navigation'
        bodyStyle={{
          backgroundColor: 'var(--secondary-color)'
        }}
        destroyOnClose={true}
        placement='right'
        closable={true}
        onClose={() => setVisible(false)}
        closeIcon={<CloseCircleFilled style={{ fontSize: 24, color: 'var(--accent-color)' }} />}
        visible={visible}>
        <Menu closeDrawer={() => setVisible(false)} />
      </Drawer>
    </nav>
  );
};

export default Navbar;
