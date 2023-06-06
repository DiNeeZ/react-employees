import { CSSProperties } from 'react';
import { Form, Row, Space, Typography } from 'antd';
import CustomInput from '../../components/custom-input';
import PasswordInput from '../../components/password-input';
import FormWrapper from '../../components/form-wrapper';
import { CustomButton } from '../../components/custom-button';
import { Link } from 'react-router-dom';
import { Paths } from '../../paths';

const rowStyles: CSSProperties = {
  marginTop: 50,
  display: 'flex',
  flexDirection: 'column',
  gap: 50
};

const Login = () => {
  return (
    <Row justify='center' align='middle' style={rowStyles}>
      <Typography.Title>Login Page</Typography.Title>
      <FormWrapper>
        <Form onFinish={() => null}>
          <CustomInput name='email' placeholder='Enter your email' type='email' />
          <PasswordInput name='password' placeholder='Enter a password' />
          <div style={{ marginTop: 48 }}>
            <CustomButton type='primary' htmlType='submit'>
              Войти
            </CustomButton>
          </div>
        </Form>
        <Space direction='vertical' size='large'>
          <Typography>
            Нет аккаунта? <Link to={Paths.register}>Зарегистрируйтесь</Link>
          </Typography>
        </Space>
      </FormWrapper>
    </Row>
  );
};

export default Login;
