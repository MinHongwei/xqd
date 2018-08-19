import React, { Component } from 'react';
import { Chart, Geom, Axis, Tooltip, Legend } from 'bizcharts';
import DataSet from '@antv/data-set';
import styles from '../Less.less';
/**
 * @author 闵宏维
 * ps.可以自行新建并重写，但是拒绝做任何更改，欢迎反应bug  qq：2959000390，
 */
// 堆叠柱状图
export default class BarStack extends Component {
  handleRoot = (n) => {
    this.root = n;
  };

  handleRef = (n) => {
    this.node = n;
  };
  // clickInfo = () => {
  //   Modal.info({
  //     title: '请选中柱状图有颜色部分',
  //     // content: (
  //     //   <div>
  //     //     <p>some messages...some messages...</p>
  //     //     <p>some messages...some messages...</p>
  //     //   </div>
  //     // ),
  //     onOk() {},
  //   });
  // }
  // data 格式  如：  { type:'综检站', '杭州': 5, '宁波': 4,
  //  '温州': 4, '嘉兴': 4, '湖州': 1, '绍兴': 4, '金华': 5, '衢州': 2, '舟山': 1, '台州': 3, '丽水': 2 },
  // { type:'环检站', '杭州': 18, '宁波': 14, '温州': 14, '嘉兴': 12,
  //  '湖州': 14, '绍兴': 14, '金华': 12, '衢州': 15, '舟山': 12, '台州': 11, '丽水': 12 },
  // { type:'遥感监测点', '杭州': 69, '宁波': 60, '温州' :53, '嘉兴': 45,
  //  '湖州': 49, '绍兴': 45, '金华': 55, '衢州': 29, '舟山': 23, '台州': 16, '丽水': 17 },

  render() {
    const { data, rawData, fields = [], title, onPlotClickLock = false,
      forceFit = true, height = 295, padding,
      visibleLegend = false, titleLegend, positionLegend } = this.props;
    const ds = new DataSet();
    const dv = ds.createView().source(data);
    dv.transform({
      type: 'fold', // 'bin.histogram', //fold
      fields,
      binWidth: 1,
      key: 'key', // key字段
      value: 'keyValue', // value字段
    });

    return (
      <div className={styles.chart} style={{ height }} ref={this.handleRoot}>
        <div ref={this.handleRef}>
          {title && <h4 style={{ marginBottom: 20 }}>{title}</h4>}
          <Chart
            onPlotClick={(ev) => {
              if (onPlotClickLock) {
                if (ev.data) {
                  this.props.handleOnPlotClick(ev.data, rawData);
                      }
                    }
                }}
            height={title && visibleLegend === false ? height - 41 : height}
            forceFit={forceFit}
            padding={padding || 'auto'}
            data={dv}
          >
            <Axis name="key" />
            <Axis name="keyValue" />
            <Tooltip />
            <Legend position={positionLegend} title={titleLegend} visible={visibleLegend} />
            <Geom type="intervalStack" position="key*keyValue" color="type" />
          </Chart>
        </div>
      </div>
    );
  }
}
