import React, { Component } from 'react';
import { Chart, Geom, Axis, Tooltip } from 'bizcharts';
import styles from '../Less.less';
/**
 * @author 闵宏维
 * ps.可以自行新建并重写，但是拒绝做任何更改，欢迎反应bug  qq：2959000390，
 */
// 柱状图
// data 数据格式 [{ xaxis: '无数据', yaxis: 0 }]。
export default class Bar extends Component {
  handleRoot = (n) => {
    this.root = n;
  };

  handleRef = (n) => {
    this.node = n;
  };
  handleVal = (val, salesAliasUnit) => {
    if (val > 9999) {
      return `${(val / 10000).toFixed(2)}${salesAliasUnit}`;
    } else {
      // const salesTemp = salesAliasUnit.toString().subString(0, 1);
      return `${val}`;
    }
  }
  render() {
    const { data, title, height = 295, padding, forceFit = true,
      salesAlias, salesAliasUnitLuck = false, salesAliasUnit } = this.props;
    const cols = {
      yaxis: {
        // tickInterval: 10,
        alias: salesAlias, // 数据字段的别名
        formatter: (val) => {
          if (salesAliasUnitLuck) {
            return `${this.handleVal(val, salesAliasUnit)}`;
          }
          return val;
        },
      },
    };
    return (
      <div className={styles.chart} style={{ height }} ref={this.handleRoot}>
        <div ref={this.handleRef}>
          {title && <h4 style={{ marginBottom: 12 }}>{title}</h4>}
          <Chart
            height={title ? height - 11 : height}
            forceFit={forceFit}
            padding={padding || 'auto'}
            data={data}
            scale={cols}
          >
            <Axis name="xaxis" />
            <Axis name="yaxis" />
            <Tooltip crosshairs={{ type: 'y' }} />
            <Geom type="interval" position="xaxis*yaxis" />
          </Chart>
        </div>
      </div>
    );
  }
}
