import React, { Component } from 'react';
import QRCode from 'qrcode.react';
import { Row, Col } from 'antd';

import styles from './index.less';

export default class print extends Component {
  render() {

    return (
      <div>
        <Row className={styles.header}>
          <Col span={24}>
            <h1>qrcode.</h1>
          </Col>
        </Row>
        <Row className={styles.showcase}>
          <div>
            <QRCode size={128 * 1.2} value="http://www.xunqiandu.com" />
          </div>
        </Row>
      </div>
    );
  }
}
