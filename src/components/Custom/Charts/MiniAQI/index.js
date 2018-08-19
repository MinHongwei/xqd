import React from 'react';
import { Tooltip } from 'antd';

import styles from './index.less';

const MiniAQI = ({ AQIvalue, color = 'rgb(19, 194, 194)', strokeWidth }) => (
  <div className={styles.miniAqi}>
    <Tooltip title={` ${AQIvalue} `}>
      <div className={styles.AQIvalue} style={{ left: AQIvalue ? `${AQIvalue / 5}%` : null }}>
        <span style={{ backgroundColor: color || null }} />
        <span style={{ backgroundColor: color || null }} />
      </div>
    </Tooltip>
    <div className={styles.progressWrap}>
      <div
        className={styles.progress}
        style={{
          backgroundColor: 'white',
          width: '100%',
          height: strokeWidth || null,
        }}
      >
        <div
          style={{
            float: 'left',
            backgroundColor: '#03E402',
            width: '10%',
            height: strokeWidth || null,
          }}
        />
        <div
          style={{
            float: 'left',
            backgroundColor: '#FFFF00',
            width: '10%',
            height: strokeWidth || null,
          }}
        />
        <div
          style={{
            float: 'left',
            backgroundColor: '#FE7E03',
            width: '10%',
            height: strokeWidth || null,
          }}
        />
        <div
          style={{
            float: 'left',
            backgroundColor: '#FE0000',
            width: '10%',
            height: strokeWidth || null,
          }}
        />
        <div
          style={{
            float: 'left',
            backgroundColor: '#97004A',
            width: '20%',
            height: strokeWidth || null,
          }}
        />
        <div
          style={{
            float: 'left',
            backgroundColor: '#7B0322',
            width: '40%',
            height: strokeWidth || null,
          }}
        />
      </div>
    </div>
  </div>
);

export default MiniAQI;
