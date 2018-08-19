import React, { Component } from 'react';
import Print from 'rc-print/lib';
import { routerRedux } from 'dva/router';
import { Button, Card, Affix, Row } from 'antd';
import XIcon from '../XIcon';

import styles from './index.less';
/**
 * @author 闵宏维
 * ps.欢迎反应bug  qq：2959000390，
 */
export default class print extends Component {
  state = {
    top: 15,
  };

  render() {
    const {
      buttonBackShow = true,
      browserShow = false,
      printComponent,
      title,
      dispatch,
      backHref = '/',
    } = this.props;
    const goBackEmission = () => {
      dispatch(routerRedux.push(backHref));
    };
    return (
      <div>
        <Card>
          <Affix offsetTop={this.state.top} className={styles.affix}>
            <Row>
              <Button
              // type="primary"
                onClick={() => {
                this.refs.print.onPrint(); // eslint-disable-line
              }}
              >
                <XIcon icon="#icon-dayin" styleicon={styles.icon} />{' '}
              打 印
              </Button>
            </Row>
            <Row>
              {buttonBackShow && <Button onClick={goBackEmission}>返 回</Button>}
            </Row>
          </Affix>
          <Print
            ref="print" // eslint-disable-line
            isIframe={browserShow} // 弹出新窗口
            bodyStyle
            title={title}
          >
            <div>{printComponent}</div>
          </Print>
        </Card>
      </div>
    );
  }
}
