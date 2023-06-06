import { useNavigate } from 'react-router-dom';
import { Menu as AntMenu, Grid } from 'antd';
import { HomeOutlined, LoginOutlined, UserOutlined } from '@ant-design/icons';
import { Paths } from '../../paths';

const { useBreakpoint } = Grid;

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
      style={{ background: 'transparent' }}
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
