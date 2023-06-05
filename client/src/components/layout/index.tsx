import { CSSProperties } from 'react';
import { Layout } from 'antd';
import { Outlet } from 'react-router-dom';

import Navbar from '../navbar';

const { Header, Footer, Content } = Layout;

const layoutStyle: CSSProperties = {
  display: 'flex',
  flexDirection: 'column',
  minHeight: '100vh'
};

const headerStyle: CSSProperties = {
  textAlign: 'center',
  color: 'var(--primary-color-text)',
  height: 64,
  paddingInline: 50,
  lineHeight: '64px',
  backgroundColor: 'var(--secondary-color)'
};

const contentStyle: CSSProperties = {
  textAlign: 'center',
  flexGrow: 1,
  minHeight: 120,
  lineHeight: '120px',
  color: 'var(--primary-color-text)',
  backgroundColor: 'var(--primary-color)'
};

const footerStyle: CSSProperties = {
  textAlign: 'center',
  color: 'var(--secondary-color)',
  backgroundColor: 'var(--accent-color)'
};

const PageLayout = () => {
  return (
    <Layout style={layoutStyle}>
      <Header style={headerStyle}>
        <Navbar />
      </Header>
      <Content style={contentStyle}>
        <Outlet />
      </Content>
      <Footer style={footerStyle}>Footer</Footer>
    </Layout>
  );
};

export default PageLayout;
