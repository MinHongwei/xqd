import React, { Component } from 'react';
import { Chart, Geom, Axis, Tooltip, Legend } from 'bizcharts';
// import DataSet from '@antv/data-set';

import styles from '../Less.less';
/**
 * @author 闵宏维
 * ps.可以自行新建并重写，但是拒绝做任何更改，欢迎反应bug  qq：2959000390，
 */

// const colorMap = {
//   'Asia': G2.Global.colors[0],
//   'Americas': G2.Global.colors[1],
//   'Europe': G2.Global.colors[2],
//   'Oceania': G2.Global.colors[3],
// };
// point 气泡图
export default class PointBubble extends Component {
  handleRoot = (n) => {
    this.root = n;
  };

  handleRef = (n) => {
    this.node = n;
  };
  /**
   * data 格式
   * [{
        "type": "Americas",
        "smalltype": "Uruguay",
        "yaxis": 76.384,
        "xaxis": 10611.46299,
        "circlesize": 3447496
      }, {
        "type": "Asia",
        "smalltype": "Japan",
        "yaxis": 82.603,
        "xaxis": 31656.06806,
        "circlesize": 127467972
      }]
   */
  render() {
    //  cols data LegendNameHaddlen circleSize 用这个图 必须提供的字段
    const { cols, data, title, height = 400, forceFit = true,
      padding, formatterLuck = false, LegendNameHaddlen = 'circlesize',
      circleSize = 'circlesize' } = this.props;
    // console.log('data', data);
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
            <Tooltip showTitle={false} />
            <Axis
              name="xaxis"
              label={{
                formatter: (value) => {
                  if (formatterLuck) {
                  if (value > 1000) {
                    return `${(value / 1000).toFixed(0)} k`;
                  } else {
                    return value;
                  }
                }
                }, // 格式化x坐标轴的显示
              }}
            />
            <Legend name={LegendNameHaddlen} visible={false} />
            <Geom
              type="point"
              position="xaxis*yaxis"//  x - y
              // color={['type', val => {
              //   return colorMap[val];
              //   }]}
              color="type"
              tooltip="smalltype*circlesize*xaxis*yaxis"
              opacity={0.65}
              shape="circle"
              size={[circleSize, [4, 65]]}
              style={['type', {
                lineWidth: 1,
                strokeOpacity: 1,
                fillOpacity: 0.3,
                opacity: 0.65,
              }]}
            />
          </Chart>
        </div>
      </div>
    );
  }
}
