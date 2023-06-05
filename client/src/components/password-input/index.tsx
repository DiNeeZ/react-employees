import { Form, Input } from 'antd';
import { NamePath } from 'antd/es/form/interface';

type Props = {
  name: string;
  placeholder: string;
  dependencies?: NamePath[];
};

const PasswordInput = ({ name, placeholder, dependencies }: Props) => {
  return (
    <Form.Item name={name} dependencies={dependencies} hasFeedback rules={[{}]}>
      <Input.Password placeholder={placeholder} />
    </Form.Item>
  );
};

export default PasswordInput;
