import { CSSProperties } from 'react';
import { Form, Input } from 'antd';

type Props = {
  name: string;
  placeholder: string;
  type?: string;
};

const formItemStyles: CSSProperties = {
  display: 'flex',
  flexDirection: 'column'
};

const CustomInput = ({ name, placeholder, type = 'text' }: Props) => {
  return (
    <Form.Item
      name={name}
      colon={false}
      rules={[{ required: true, message: 'Обязательное поле' }]}
      shouldUpdate={true}
      style={formItemStyles}>
      <Input placeholder={placeholder} type={type} size='large' />
    </Form.Item>
  );
};

export default CustomInput;
