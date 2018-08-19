import React, { Component } from 'react';
import { Chart, Geom, Axis, Tooltip, Legend } from 'bizcharts';
import DataSet from '@antv/data-set';
import styles from '../Less.less';
/**
 * @author 闵宏维
 * ps.可以自行新建并重写，但是拒绝做任何更改，欢迎反应bug  qq：2959000390，
 */
export default class GroupBar extends Component {
  handleRoot = (n) => {
    this.root = n;
  };
  handleRef = (n) => {
    this.node = n;
  };

  render() { // 数据格式     { label: '丽水', '字段1': 1170, '字段12': 2123, '字段13': 2123 },
    const { data, height = 355, fields, rawData, onPlotClickLock = false, colsDef,
      visibleLegend = true, title, padding, titleLegend, positionLegend, valueLuck = false,
      forceFit = true } = this.props;
      // const keys = Object.keys(data[0]);
      // keys.splice(0, 1); 去掉第一个为 lable key
      // const fields = keys;
      // 注意 上面得到fields的代码顺序不能乱、
    const ds = new DataSet();
    const dv = ds.createView().source(data);
    dv.transform({
      type: 'fold',
      fields, // 展开字段集
      key: 'type', // key字段
      value: 'value', // value字段
    });
    const cols = {
      value: {
        formatter: (val) => {
          const valr = `${(val * 100).toFixed(2)} %`;
          return valr;
        },
      },
    };
    return (
      <div className={styles.chart} style={{ height }} ref={this.handleRoot}>
        <div ref={this.handleRef}>
          {title && <h4 style={{ marginBottom: 20 }}>{title}</h4>}
          <Chart
            scale={valueLuck ? cols : colsDef || {}}
            onPlotClick={(ev) => {
            if (onPlotClickLock) { // (this.props.handleOnPlotClick)
            if (ev.data) {
              // console.log('选中了-->', ev.data);
              this.props.handleOnPlotClick(ev.data, rawData);
                  }
                }
            }}
            height={title && visibleLegend === false ? height - 41 : height}
            padding={padding || 'auto'}
            data={dv}
            forceFit={forceFit}
          >
            {/* <Coord transpose scale={[1,-1]} /> */}
            <Axis name="label" />
            <Axis name="value" />
            {/* position="left" */}
            <Tooltip />
            <Geom
              type="interval"
              position="label*value"
              color="type"
              adjust={[{
                type: 'dodge',
                marginRatio: 1 / 32,
              }]}
            >
              <Legend position={positionLegend} title={titleLegend} visible={visibleLegend} />
            </Geom>
          </Chart>
        </div>
      </div>
    );
  }
}
