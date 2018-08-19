import React, { Component } from 'react';
import { Chart, Geom, Tooltip, Coord, Label, Legend, Guide } from 'bizcharts';
import DataSet from '@antv/data-set';
import styles from '../Less.less';

const { Html } = Guide;
/**
 * @author 闵宏维
 * ps.可以自行新建并重写，但是拒绝做任何更改，欢迎反应bug  qq：2959000390，
 */
export default class RingFigure extends Component {
  handleRoot = (n) => {
    this.root = n;
  };

  handleRef = (n) => {
    this.node = n;
  };
  // this.props.handleTest
  render() {
    const { data, title, height = 200, forceFit = true, padding, htmlCodeCenter, offsetLabel = 20,
      visibleLegend = false, select = true, titleLegend, positionLegend } = this.props;
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
          const valr = `${(val * 100).toFixed(2)} %`;
          return valr;
        },
      },
    };
    return (
      <div className={styles.chart} style={{ height }} ref={this.handleRoot}>
        <div ref={this.handleRef}>
          {title && <h4 style={{ marginBottom: 8 }}>{title}</h4>}
          <Chart
          //   onPlotClick={ev => {
          //  // if (onPlotClickLock) {
          //     if(ev.data) {
          //       console.log('选中了-->', ev.data);
          //       // this.props.test(ev.data);
          //         // dispatch({
          //         //   type: `${nameSpace}/fetch`,
          //         //     payload: ev.data,
          //         //   });
          //         // }
          //       }
          //     }}
            scale={cols}
            height={visibleLegend ? height + 41 : height}
            // container='mountNode'
            animate
            padding={padding || 'auto'}
            data={dv}
            forceFit={forceFit}
          >
            {/* <Coord type='polar' innerRadius={0.2} /> */}
            <Coord
              type="theta"
              radius="0.75"
              innerRadius="0.6"
            />
            <Tooltip
              showTitle={false}
              itemTpl='<li><span style="background-color:{color};" class="g2-tooltip-marker"></span>{name}: {value}</li>'
            />
            <Legend position={positionLegend} title={titleLegend} visible={visibleLegend} />
            <Guide>
              <Html
                position={['50%', '50%']}
                html={htmlCodeCenter}
                alignX="middle"
                alignY="middle"
              />
            </Guide>
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
              // position="value"
              // style={{lineWidth: 1,stroke: '#fff'}}
              // tooltip={['type*value',(type, value) => {
              //   const percentr = `${(value).toFixed(2)  }%`;
              //     return {
              //       name: type,
              //       value: percentr,
              //     };
              //   }]}
              select={select}
            >
              <Label content="type" offset={offsetLabel} />
            </Geom>
          </Chart>
        </div>
      </div>
    );
  }
}
