import {
  LockOutlined,
  UserOutlined,
} from '@ant-design/icons';
import { Alert, } from 'antd';
import React, { useState } from 'react';
import ProForm, { ProFormCheckbox, ProFormText } from '@ant-design/pro-form';
import { useIntl, FormattedMessage } from 'umi';
import styles from './index.less';
import { connect } from 'umi';

const LoginMessage = ({ content }) => (
  <Alert
    style={{
      marginBottom: 24,
    }}
    message={content}
    type="error"
    showIcon
  />
);

const Login = (props) => {
  const { userLogin = {}, submitting } = props;
  const { status, type: loginType } = userLogin;
  const [type] = useState('account');
  const intl = useIntl();

  const handleSubmit = (values) => {
    const { dispatch } = props;
    dispatch({
      type: 'login/login',
      payload: { ...values, type },
    });
  };

  return (
    <div className={styles.container}>
      <div className={styles.topheader}>
        GDV
      </div>

      <div className={styles.content}>
        <div className={styles.top}>
          <div className={styles.desc}>
            <div className={styles.left}>
              <div className={styles.content}>
                <span>新媒体技术生态</span>
                <hr />
                <span>数据分析生态</span>
              </div>
            </div>
            <div className={styles.right}>
              <div className={styles.header}>欢迎使用</div>
              <div className={styles.formContainer}>
              <ProForm
                initialValues={{
                  autoLogin: true,
                }}
                submitter={{
                  render: (_, dom) => dom.pop(),
                  submitButtonProps: {
                    loading: submitting,
                    size: 'large',
                    style: {
                      width: '100%',
                    },
                  },
                }}
                onFinish={(values) => {
                  handleSubmit(values);
                  return Promise.resolve();
                }}
              >

                {status === 'error' && loginType === 'account' && !submitting && (
                  <LoginMessage
                    content={intl.formatMessage({
                      id: 'pages.login.accountLogin.errorMessage',
                      defaultMessage: '账户或密码错误（admin/ant.design)',
                    })}
                  />
                )}
                {type === 'account' && (
                  <>
                    <ProFormText
                      name="userName"
                      fieldProps={{
                        size: 'large',
                        prefix: <UserOutlined className={styles.prefixIcon} />,
                      }}
                      placeholder={intl.formatMessage({
                        id: 'pages.login.username.placeholder',
                        defaultMessage: '用户名: admin or user',
                      })}
                      rules={[
                        {
                          required: true,
                          message: (
                            <FormattedMessage
                              id="pages.login.username.required"
                              defaultMessage="请输入用户名!"
                            />
                          ),
                        },
                      ]}
                    />
                    <ProFormText.Password
                      name="password"
                      fieldProps={{
                        size: 'large',
                        prefix: <LockOutlined className={styles.prefixIcon} />,
                      }}
                      placeholder={intl.formatMessage({
                        id: 'pages.login.password.placeholder',
                        defaultMessage: '密码: ant.design',
                      })}
                      rules={[
                        {
                          required: true,
                          message: (
                            <FormattedMessage
                              id="pages.login.password.required"
                              defaultMessage="请输入密码！"
                            />
                          ),
                        },
                      ]}
                    />
                  </>
                )}

                {status === 'error' && loginType === 'mobile' && !submitting && (
                  <LoginMessage content="验证码错误" />
                )}
                <div
                  style={{
                    marginBottom: 24,
                  }}
                >
                  <ProFormCheckbox noStyle name="autoLogin">
                    <FormattedMessage id="pages.login.rememberMe" defaultMessage="自动登录" />
                  </ProFormCheckbox>
                  <a
                    style={{
                      float: 'right',
                    }}
                  >
                    <FormattedMessage id="pages.login.forgotPassword" defaultMessage="忘记密码" />
                  </a>
                </div>
              </ProForm>
              </div>
            </div>
          </div>
        </div>

      </div>
      <div className={styles.footer}>
        版权信息：CTCOM版权所有
      </div>
    </div>
  );
};

export default connect(({ login, loading }) => ({
  userLogin: login,
  submitting: loading.effects['login/login'],
}))(Login);
