import { CSSProperties } from 'react';
import { useNavigate } from 'react-router-dom';
import { Menu as AntMenu, Grid } from 'antd';
import { HomeOutlined, LoginOutlined, UserOutlined } from '@ant-design/icons';
import { Paths } from '../../paths';

const { useBreakpoint } = Grid;

const menuStyle: CSSProperties = {
  backgroundColor: 'var(--secondary-color)',
  color: 'var(--white-color)'
};

type PropType = {
  closeDrawer?: () => void;
};

const Menu = ({ closeDrawer }: PropType) => {
  const navigate = useNavigate();
  const { md } = useBreakpoint();

  const handleClick = (key: string) => {
    navigate(key);
    if (closeDrawer) {
      closeDrawer();
    }
  };

  return (
    <AntMenu
      theme='dark'
      style={menuStyle}
      onClick={({ key }) => handleClick(key)}
      mode={md ? 'horizontal' : 'inline'}
      items={[
        { label: 'Home', key: Paths.home, icon: <HomeOutlined /> },
        { label: 'Login', key: Paths.login, icon: <LoginOutlined /> },
        { label: 'Register', key: Paths.register, icon: <UserOutlined /> }
      ]}
    />
  );
};

export default Menu;
