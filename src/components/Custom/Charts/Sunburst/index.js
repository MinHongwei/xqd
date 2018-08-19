import React, { Component } from 'react';
import { Chart, Geom, Tooltip, Coord, Label, View } from 'bizcharts';
// import { Chart, Geom, Axis, Tooltip, Coord, Label, Legend, View, Guide, Shape } from 'bizcharts';
import DataSet from '@antv/data-set';
import styles from '../Less.less';
/**
 * 多层饼图
 * @author 闵宏维
 * ps.可以自行新建并重写，但是拒绝做任何更改，欢迎反应bug  qq：2959000390，
 */
// 多层饼图
export default class Sunburst extends Component {
  handleRoot = (n) => {
    this.root = n;
  };

  handleRef = (n) => {
    this.node = n;
  };
  //   { value: 52844, type: '客车', name: '微型' },
  //   { value: 1175090, type: '客车', name: '小型' },
  //   { value: 16467, type: '客车', name: '大型' },
  //   { value: 199, type: '货车', name: '微型' },
  //   { value: 59857, type: '货车', name: '轻型' },
  //   { value: 8666, type: '货车', name: '中型' },
  //   { value: 8584, type: '货车', name: '重型' }, 格式
  render() {
    const { data, title, height = 360, select = true, padding,
      forceFit = true, offset = -10 } = this.props;
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
    const dv1 = new DataView();
    dv1.source(data).transform({
      type: 'percent',
      field: 'value',
      dimension: 'name',
      as: 'percent',
    });
    //  padding={[ 80, 100, 80, 80 ]}padding={padding}
    return (
      <div className={styles.chart} style={{ height }} ref={this.handleRoot}>
        <div ref={this.handleRef}>
          {title && <h4 style={{ marginBottom: 8 }}>{title}</h4>}
          <Chart height={height} forceFit={forceFit} padding={padding || 'auto'} data={dv} scale={cols}>
            <Coord type="theta" radius={0.5} />
            <Tooltip
              showTitle={false}
              itemTpl='<li><span style="background-color:{color};" class="g2-tooltip-marker"></span>{name}: {value}</li>'
            />
            <Geom
              type="intervalStack"
              position="percent"
              color="type"
              tooltip={['type*percent', (item, percent) => {
            percent = `${(percent * 100).toFixed(2)  }%`;// eslint-disable-line
            return {
              name: item,
              value: percent,
            };
          }]}
              style={{ lineWidth: 1, stroke: '#fff' }}
              select={select}
            >
              <Label content="type" offset={-10} />
            </Geom>
            <View data={dv1} scale={cols} >
              <Coord type="theta" radius={0.75} innerRadius={0.5 / 0.75} />
              <Geom
                type="intervalStack"
                position="percent"
                color={['name', ['#BAE7FF', '#7FC9FE', '#71E3E3', '#ABF5F5', '#8EE0A1', '#BAF5C4']]}
                tooltip={['name*percent', (item, percent) => {
                percent = `${(percent * 100).toFixed(2)  }%`; // eslint-disable-line
                  return {
                    name: item,
                    value: percent,
                  };
                }]}
                style={{ lineWidth: 1, stroke: '#fff' }}
                select={select}
              >
                <Label content="name" offset={offset} />
              </Geom>
            </View>
          </Chart>
        </div>
      </div>
    );
  }
}
