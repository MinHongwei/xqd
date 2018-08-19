import React, { Component } from 'react';
import { Chart, Geom, Axis, Tooltip, Coord, Legend } from 'bizcharts';
import styles from '../Less.less';
/**
 * @author 闵宏维
 * ps.可以自行新建并重写，但是拒绝做任何更改，欢迎反应bug  qq：2959000390，
 */
// [{ xaxis: `${elem.year} 年`, type: '新增', yaxis: elem.newc }]
export default class BarStackRight extends Component {
  handleRoot = (n) => {
    this.root = n;
  };

  handleRef = (n) => {
    this.node = n;
  };
  render() {
    const {
      data, // 格式 { xaxis: '', type: '', yaxis: '' }
      //  dispatch, nameSpace,
      title, forceFit = true, height = 400, padding,
      visibleLegend = false, titleLegend, positionLegend } = this.props;
    return (
      <div className={styles.chart} style={{ height }} ref={this.handleRoot}>
        <div ref={this.handleRef}>
          {title && <h4 style={{ marginBottom: 20 }}>{title}</h4>}
          <Chart height={height} data={data} padding={padding || 'auto'} forceFit={forceFit}>
            <Coord transpose />
            <Axis name="xaxis" label={{ offset: 12 }} />
            <Axis name="yaxis" />
            <Tooltip />
            <Legend position={positionLegend} title={titleLegend} visible={visibleLegend} />
            <Geom type="intervalStack" position="xaxis*yaxis" color="type" />
          </Chart>
        </div>
      </div>
    );
  }
}
