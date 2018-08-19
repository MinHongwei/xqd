import React, { Component } from 'react';

import './iconfont'; // 该路径非本人可以进行更改
import styles from './index.less';
/**
 * @author 闵宏维
 * ps.欢迎反应bug  qq：2959000390，
 */
export default class XIcon extends Component {
  render() {
    const { icon, className = styles.icon } = this.props;
    return (
      <svg className={className} aria-hidden="true">
        <use xlinkHref={icon} />
      </svg>
    );
  }
}
