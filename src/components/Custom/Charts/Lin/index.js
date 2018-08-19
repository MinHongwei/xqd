import React, { Component } from 'react';
import { Chart, Geom, Axis, Tooltip, Legend } from 'bizcharts';
import DataSet from '@antv/data-set';
import styles from '../Less.less';

/**
 * @author 闵宏维
 * ps.可以自行新建并重写，但是拒绝做任何更改，欢迎反应bug  qq：2959000390，
 */
// Line chart 折线图
export default class Lin extends Component {
  handleRoot = (n) => {
    this.root = n;
  };

  handleRef = (n) => {
    this.node = n;
  };
  render() {
    const { title, data, cols, fields, height = 355, padding, forceFit = true,
      positionLegend, titleLegend, visibleLegend } = this.props;
    const ds = new DataSet();
    const dv = ds.createView().source(data);
    dv.transform({
      type: 'fold',
      fields, // 展开字段集
      key: 'key', // key字段
      value: 'keyValue', // value字段
    });


    return (
      <div className={styles.chart} style={{ height }} ref={this.handleRoot}>
        <div ref={this.handleRef}>
          {title && <h4 style={{ marginBottom: 20 }}>{title}</h4>}
          <Chart
            height={title ? height - 41 : height}
            data={dv}
            scale={cols}
            padding={padding || 'auto'}
            forceFit={forceFit}
          >
            <Axis name="xaxis" />
            <Axis name="keyValue" />
            {/* label={{formatter: val => `${val}°C`}} */}
            <Tooltip crosshairs={{ type: 'y' }} />
            <Legend position={positionLegend} title={titleLegend} visible={visibleLegend} />
            <Geom type="line" position="xaxis*keyValue" size={2} color="key" />
            <Geom type="point" position="xaxis*keyValue" size={4} shape="circle" color="key" style={{ stroke: '#fff', lineWidth: 1 }} />
          </Chart>
        </div>
      </div>
    );
  }
}
