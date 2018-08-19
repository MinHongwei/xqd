import React, { Component } from 'react';
import { Chart, Geom, Axis, Tooltip, Legend, Coord } from 'bizcharts';
import DataSet from '@antv/data-set';
import styles from '../Less.less';
/**
 * @author 闵宏维
 * ps.可以自行新建并重写，但是拒绝做任何更改，欢迎反应bug  qq：2959000390，
 */
export default class GroupBarRight extends Component {
  handleRoot = (n) => {
    this.root = n;
  };
  handleRef = (n) => {
    this.node = n;
  };

  render() {
    const { data, height = 355, fields, onPlotClickLock = false, salesAlias,
      salesAliasUnit = '', visibleLegend = true, title, padding, titleLegend,
      positionLegend, forceFit = true } = this.props;

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
        // tickInterval: 10,
        alias: salesAlias, // 数据字段的别名
        formatter: (val) => {
          // return this.handleVal(val, salesAliasUnit);
          return `${val} ${salesAliasUnit}`;
        },
      },
    };
    return (
      <div className={styles.chart} style={{ height }} ref={this.handleRoot}>
        <div ref={this.handleRef}>
          {title && <h4 style={{ marginBottom: 20 }}>{title}</h4>}
          <Chart
            onPlotClick={(ev) => {
            if (onPlotClickLock) {
            if (ev.data) {
                this.props.handleTest(ev.data);
                  }
                }
            }}
            scale={cols}
            height={title && visibleLegend === false ? height - 41 : height}
            padding={padding || 'auto'}
            data={dv}
            forceFit={forceFit}
          >
            {/* <Coord transpose scale={[1,-1]} /> */}
            <Axis name="label" />
            <Axis name="value" />
            {/* position="left" */}
            <Coord transpose />
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
