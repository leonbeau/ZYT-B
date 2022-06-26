import React from 'react';
import { PageContainer } from '@ant-design/pro-layout';
import { Card, Alert } from 'antd';
import { useIntl } from 'umi';
import './Welcome.less';
import WelcomeSvg from '../assets/welcome.svg'
export default props => {
  const intl = useIntl();
  return (
    <div>
      <div>
        {props.title}
      </div>
    </div>
  );
};