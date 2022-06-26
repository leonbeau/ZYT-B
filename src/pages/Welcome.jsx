import React from 'react';
import { PageContainer } from '@ant-design/pro-layout';
import { Button, Space } from 'antd';
import { useIntl } from 'umi';
import './Welcome.less';
import WelcomeSvg from '../assets/welcome.svg'
import WelcomePanel from './WelcomePanel';
export default () => {
  const intl = useIntl();
  const titleArr = ['媒体数据总成', '企业数据总览', '所有企业技术方向分布', '第三方平台账号(总览)', '集团企业分布领域', '涉及领域', '集团企业所在园区',]
  const panel1Data = [{ name: '移动端 (APP)', value: 362 }, { name: '新闻网站', value: 98 }, { name: '各大媒体号 (境内)', value: 154 }, { name: '各大平台号 (境外)', value: 11 },]
  const panel2Data = [{ name: '集团直接投资企业', value: 45 }, { name: '集团旗下基金代投企业', value: 98 }, { name: '集团各大园区入驻企业', value: 99 }, { name: '补充的集团外科技型企业', value: 246 },]
  const panel3Data = [[ '5G (39)', '大数据 (98)', '云计算 (108)', '区块链 (65)', '人工智能 (76)'], ['智能硬件 (18)', '机器新闻 (98)', '机器翻译 (39)', '智能销售 (98)', 'AR,VR娱乐 (39)', '国际传播平台 (39)', '政务新媒体平台 (39)', '自媒体聚合平台(39)', '智能融媒体平台 (29)', '智能金融数据平台 (98)', '新闻内容可视化与视频化 (98)']]
  const renderTitle = (title) => (
    <div className="panel-title">
      <span className='left'>{title}</span>
      <span className='right'>更多</span>
    </div>
  )
  // 第一个第二个的图
  const toRenderText = (name, value) => {
    return (
      <div className="panel-text">
        <span className='left'>{name}</span>
        <span className='is-center'> ----------------------- </span>
        <span className='right'>{value}</span>
      </div>
    )
  }

  const renderContent = (index) => {
    if (index === 0 || index === 1) {
      return (
        <div padd>
          {panel1Data.map((item, index) => {
            return toRenderText(item.name, item.value)
          })}
        </div>
      )
    }
    if (index === 2) {
      return (
        <>
          <div style={{ padding: '0 15px 0 15px' }}>
            <div style={{ padding: '25px 0 15px 0'}}>分布领域</div>
            <div>
              {panel3Data && panel3Data[0].map((item, index) => (
                <span style={{ margin: '0 12px 12px 0', display: 'inline-block'}}>
                  <Button style={{ color: '#00a7bc'}}>{item}</Button>
                </span>
              ))}
            </div>
          </div>
          <div style={{ padding: '0 15px 0 15px' }}>
            <div style={{ padding: '0 0 15px 0'}}>企业技术智媒体应用场景</div>
             <div>
              {panel3Data && panel3Data[1].map((item, index) => (
                <span style={{ margin: '0 12px 12px 0', display: 'inline-block'}}>
                  <Button style={{ color: '#00a7bc'}}>{item}</Button>
                </span>
              ))}
            </div>
          </div>
        </>
      )
    }
  }
  return (
    <PageContainer>
      <div className='welcome-container' style={{ display: 'grid', gridTemplateColumns: 'repeat(3, 33.33%)', }}>
        {titleArr.map((item, index) => {
          return (
          // eslint-disable-next-line react/jsx-key
          <div className={`panel-${index + 1}`}>
            {renderTitle(item)}
            <div className='panel-content'>
              {renderContent(index)}
            </div>
          </div>
          )
        })}
      </div>
    </PageContainer>
  );
};
