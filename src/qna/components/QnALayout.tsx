import React from 'react';
import {IdProvider} from '../../common/apis/contexts/useIdContext';

interface QnALayoutProps {
  component: React.ComponentType<any>;
  [key: string]: any;
}

const QnALayout: React.FC<QnALayoutProps> = ({
  component: Component,
  ...props
}) => {
  return (
    <IdProvider>
      <Component {...props} />
    </IdProvider>
  );
};

export default QnALayout;
