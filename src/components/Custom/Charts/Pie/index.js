import React, { Component } from 'react';
import { Chart, Geom, Tooltip, Coord, Label, Legend } from 'bizcharts';
import DataSet from '@antv/data-set';
import styles from '../Less.less';
/**
 * 饼图
 * @author 闵宏维
 * ps.可以自行新建并重写，但是拒绝做任何更改，欢迎反应bug  qq：2959000390，
 */
// 基础饼图
// 数据格式 data:? Array<{ type: String, value: Number }>;
export default class Pie extends Component {
  handleRoot = (n) => {
    this.root = n;
  };

  handleRef = (n) => {
    this.node = n;
  };
  render() {
    // props 还得提供data
    const { data, radius = 1, title, height = 200, forceFit = true, padding, offsetLabel = -20,
      visibleLegend = false, select = true, titleLegend, positionLegend, titleMargin = '0 0 14 0' } = this.props;
    const { DataView } = DataSet;
    const dv = new DataView();
    dv.source(data).transform({
      type: 'percent',
      field: 'value',
      dimension: 'type',
      as: 'percent',
    });
    const cols = {
      percent: {
        formatter: (val) => {
          const valr = `${(val * 100).toFixed(2)}%`;
          return valr;
        },
      },
    };
    // padding={[ 80, 100, 80, 80 ]} forceFit
    //  height={window.innerHeight}
    return (
      <div className={styles.chart} style={{ height }} ref={this.handleRoot}>
        <div ref={this.handleRef}>
          {title && <h4 style={{ margin: titleMargin }}>{title}</h4>}
          <Chart
            height={visibleLegend ? height + 41 : height}
            // width={width}
            forceFit={forceFit}
            padding={padding || 'auto'}
            animate
            data={dv}
            scale={cols}
          >
            <Coord type="theta" radius={radius} />
            <Tooltip showTitle={false} />
            <Legend position={positionLegend} title={titleLegend} visible={visibleLegend} />
            <Geom
              type="intervalStack"
              position="percent"
              color="type"
              tooltip={['type*percent', (item, percent) => {
               const percentr = `${(percent * 100).toFixed(2)}%`;
                  return {
                    name: item,
                    value: percentr,
                  };
                }]}
              style={{ lineWidth: 1, stroke: '#fff' }}
              select={select}
            >
              <Label content="type" offset={offsetLabel} />
              {/* offset={-10}  */}
            </Geom>
          </Chart>
        </div>
      </div>
    );
  }
}
