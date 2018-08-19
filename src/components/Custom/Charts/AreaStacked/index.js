import React, { Component } from 'react';
import { Chart, Geom, Axis, Tooltip, Legend } from 'bizcharts';
// import DataSet from '@antv/data-set';
import styles from '../Less.less';

// const { DataView } = DataSet;
// 面积图
// 数据格式
// const data = [
//   {type: 'Asia', xaxis: '1750年1月1日', yaxis: 502},
//   {type: 'Asia', xaxis: '1800年1月1日', yaxis: 635},
//   {type: 'Asia', xaxis: '1850年1月1日', yaxis: 809},
//   {type: 'Asia', xaxis: '1900年1月1日', yaxis: 5268},
//   {type: 'Asia', xaxis: '1950年1月1日', yaxis: 4400},
//   {type: 'Asia', xaxis: '2000年1月1日', yaxis: 3634},
//   {type: 'Asia', xaxis: '2050年1月1日', yaxis: 947},
//   {type: 'Africa', xaxis: '1750年1月1日', yaxis: 106},
//   {type: 'Africa', xaxis: '1800年1月1日', yaxis: 107},
//   {type: 'Africa', xaxis: '1850年1月1日', yaxis: 111},
//   {type: 'Africa', xaxis: '1900年1月1日', yaxis: 1766},
//   {type: 'Africa', xaxis: '1950年1月1日', yaxis: 221},
//   {type: 'Africa', xaxis: '2000年1月1日', yaxis: 767},
//   {type: 'Africa', xaxis: '2050年1月1日', yaxis: 133},
//   {type: 'Europe', xaxis: '1750年1月1日', yaxis: 163},
//   {type: 'Europe', xaxis: '1800年1月1日', yaxis: 203},
//   {type: 'Europe', xaxis: '1850年1月1日', yaxis: 276},
//   {type: 'Europe', xaxis: '1900年1月1日', yaxis: 628},
//   {type: 'Europe', xaxis: '1950年1月1日', yaxis: 547},
//   {type: 'Europe', xaxis: '2000年1月1日', yaxis: 729},
//   {type: 'Europe', xaxis: '2050年1月1日', yaxis: 408},
//   {type: 'Oceania', xaxis: '1750年1月1日', yaxis: 200},
//   {type: 'Oceania', xaxis: '1800年1月1日', yaxis: 200},
//   {type: 'Oceania', xaxis: '1850年1月1日', yaxis: 200},
//   {type: 'Oceania', xaxis: '1900年1月1日', yaxis: 460},
//   {type: 'Oceania', xaxis: '1950年1月1日', yaxis: 230},
//   {type: 'Oceania', xaxis: '2000年1月1日', yaxis: 300},
//   {type: 'Oceania', xaxis: '2050年1月1日', yaxis: 300},
// ];

/**
 * @author 闵宏维
 * ps.可以自行新建并重写，但是拒绝做任何更改，欢迎反应bug  qq：2959000390，
 */
export default class AreaStacked extends Component {
  handleRoot = (n) => {
    this.root = n;
  };

  handleRef = (n) => {
    this.node = n;
  };
  render() {
    const { data, title, height = 400, forceFit = true, padding,
      visibleLegend = false, titleLegend, positionLegend } = this.props;
    // console.log('data', data);
    // const ds = new DataSet();
    // const dv = ds.createView().source(data);
    // const cols = {
    //   xaxis: {
    //     type: 'linear',
    //     tickInterval: 50,
    //   },
    // }
    return (
      <div className={styles.chart} style={{ height }} ref={this.handleRoot}>
        <div ref={this.handleRef}>
          {title && <h4 style={{ marginBottom: 8 }}>{title}</h4>}
          <Chart
            height={height}
            data={data}
            padding={padding || 'auto'}
            // scale={cols}
            forceFit={forceFit}
          >
            <Axis name="xaxis" />
            <Axis name="yaxis" />
            <Legend position={positionLegend} title={titleLegend} visible={visibleLegend} />
            <Tooltip crosshairs={{ type: 'line' }} />
            <Geom type="area" position="xaxis*yaxis" color="type" />
            <Geom type="line" position="xaxis*yaxis" size={2} color="type" />
          </Chart>
        </div>
      </div>
    );
  }
}
