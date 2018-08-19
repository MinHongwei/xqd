import React, { Component } from 'react';
import { Chart, Geom, Tooltip, Coord, Legend } from 'bizcharts';
import DataSet from '@antv/data-set';
/**
 * @author 闵宏维
 * ps.可以自行新建并重写，但是拒绝做任何更改，欢迎反应bug  qq：2959000390，
 */

const data = [{ item: '事例一', count: 40 }, { item: '事例二', count: 21 }, { item: '事例三', count: 17 }, { item: '事例四', count: 13 }, { item: '事例五', count: 9 }];


export default class PieC extends Component {
  render() {
    const { DataView } = DataSet;
    const dv = new DataView();
    dv.source(data).transform({
      type: 'percent',
      field: 'count',
      dimension: 'item',
      as: 'percent',
    });
    // const cols = {
    //     'sales': {
    //       // tickInterval: 10,
    //       alias: salesAlias, // 数据字段的别名
    //       formatter: (val) => {
    //         // return this.handleVal(val, salesAliasUnit);
    //         return  `${val} ${salesAliasUnit}`;
    //       },
    //     },
    //   };
    return (
      <Chart height={window.innerHeight} container="mountNode" data={data} forceFit>
        <Coord type="polar" innerRadius={0.2} />
        <Tooltip
          showTitle={false}
          itemTpl='<li><span style="background-color:{color};" class="g2-tooltip-marker"></span>{name}: {value}</li>'
        />
        <Legend
          position="right"
          offsetY={-(window.innerHeight / 2) + 180}
          offsetX={-160}
        />
        <Coord
          type="theta"
          radius="0.75"
          innerRadius="0.6"
        />
        <Geom
          type="interval"
          color="item"
          position="item*count"
          style={{ lineWidth: 1, stroke: '#fff' }}
          tooltip={['item*count', (item, percent) => {
            percent = `${(percent * 100).toFixed(2)  }%`; // eslint-disable-line
              return {
                name: item,
                value: percent,
              };
            }]}
          // percent: {
          //   formatter: function formatter(val) {
          //     val = val * 100 + '%';
          //     return val;
          //   }
          // }
        />
      </Chart>
    );
  }
}
