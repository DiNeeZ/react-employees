import { CSSProperties } from 'react';
import { Card } from 'antd';

const cardBodyStyles: CSSProperties = {
  width: '30rem',
  textAlign: 'left'
};

const headerTitleStyles: CSSProperties = {
  fontWeight: 500,
  textTransform: 'uppercase',
  fontSize: 20
};

type Props = {
  children: string | JSX.Element | JSX.Element[];
};

const FormWrapper = ({ children }: Props) => {
  return (
    <Card
      title={<h2 style={headerTitleStyles}>Войдите</h2>}
      bodyStyle={cardBodyStyles}
      bordered={false}>
      {children}
    </Card>
  );
};

export default FormWrapper;
