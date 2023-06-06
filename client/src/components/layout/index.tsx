import { CSSProperties } from 'react';
import { ConfigProvider, Layout } from 'antd';
import { Outlet } from 'react-router-dom';

import Navbar from '../navbar';
import { useTheme } from '../../context';
import { getTheme } from '../../utils/theme';

const { Header, Footer, Content } = Layout;

const layoutStyle: CSSProperties = {
  display: 'flex',
  flexDirection: 'column',
  minHeight: '100vh'
};

const headerStyle: CSSProperties = {
  display: 'flex',
  textAlign: 'center',
  height: 64,
  paddingInline: 50,
  lineHeight: '64px',
  background: 'rgba(0, 0, 0, 0.05)'
};

const contentStyle: CSSProperties = {
  flexGrow: 1,
  minHeight: 120,
  textAlign: 'center',
  lineHeight: '120px',
  paddingTop: 50
};

const footerStyle: CSSProperties = {
  textAlign: 'center',
  background: 'rgba(0, 0, 0, 0.05)'
};

const PageLayout = () => {
  const { theme } = useTheme();

  return (
    <ConfigProvider theme={getTheme(theme)}>
      <Layout style={layoutStyle}>
        <Header style={headerStyle}>
          <Navbar />
        </Header>
        <Content style={contentStyle}>
          <Outlet />
        </Content>
        <Footer style={footerStyle}>Footer</Footer>
      </Layout>
    </ConfigProvider>
  );
};

export default PageLayout;
