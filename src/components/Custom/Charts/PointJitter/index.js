import React, { Component } from 'react';
import { Chart, Geom, Axis, Tooltip, Legend } from 'bizcharts';
// import DataSet from '@antv/data-set';
import styles from '../Less.less';
/**
 * @author 闵宏维
 * ps.可以自行新建并重写，但是拒绝做任何更改，欢迎反应bug  qq：2959000390，
 */
// 扰动点图
export default class PointJitter extends Component {
  handleRoot = (n) => {
    this.root = n;
  };

  handleRef = (n) => {
    this.node = n;
  };
  render() {
    const { data, cols, height = 398, title, padding, forceFit = true, visibleLegend = false,
      titleLegend, positionLegend } = this.props;
    return (
      <div className={styles.chart} style={{ height }} ref={this.handleRoot}>
        <div ref={this.handleRef}>
          {title && <h4 style={{ marginBottom: 8 }}>{title}</h4>}
          <Chart
            height={height}
            data={data}
            padding={padding || 'auto'}
            scale={cols}
            forceFit={forceFit}
          >
            <Tooltip crosshairs={{ type: 'cross' }} />
            <Axis name="yaxis" grid={null} />
            <Axis
              name="xaxis"
              tickLine={null}
              subTickCount={1}
              subTickLine={{
            lineWidth: 1,
            stroke: '#BFBFBF',
            length: 4,
          }}
              grid={{
            align: 'center', // 网格顶点从两个刻度中间开始
            lineStyle: {
              stroke: '#E9E9E9',
              lineWidth: 1,
              lineDash: [3, 3],
            },
          }}
            />
            {/* <Legend reversed /> */}
            <Legend
              reversed
              position={positionLegend}
              title={titleLegend}
              visible={visibleLegend}
            />
            <Geom
              type="point"
              position="xaxis*yaxis"
              color="type"
              opacity={0.65}
              shape="circle"
              size={4}
              adjust="jitter"
            />
          </Chart>
        </div>
      </div>
    );
  }
}
