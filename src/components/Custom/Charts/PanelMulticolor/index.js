import React from 'react';
import { Chart, Geom, Axis, Coord, Guide, Shape } from 'BizCharts';
import styles from '../Less.less';

const { Arc, Html } = Guide;
//  *  仪表盘（多色）
// function creatData() {
//   const data = [];
//   let val = Math.random() * 10;
//   val = val.toFixed(1);
//   data.push({ value: (val * 1) });
//   return data;
// }

// let data = creatData();

const defaultFormatter = (val) => {
  switch (val) {
    case '2':
      return '差';
    case '4':
      return '中';
    case '6':
      return '良';
    case '8':
      return '优';
    default:
      return '';
  }
};
const defaultFormatterRe = (val) => {
  switch (val) {
    case '2':
      return '优';
    case '4':
      return '良';
    case '6':
      return '中';
    case '8':
      return '差';
    default:
      return '';
  }
};
/**
 * @author 闵宏维
 * ps.可以自行新建并重写，但是拒绝做任何更改，欢迎反应bug  qq：2959000390，
 */
export default class PanelMulticolor extends React.Component {
  constructor() {
    super();
    this.state = {
      lineWidth: 25,
    };
  }
  handleRoot = (n) => {
    this.root = n;
  };

  handleRef = (n) => {
    this.node = n;
  };
  // 指针颜色
  handleGetPointerColor = (val, color) => {
    if (val >= 0 && val <= 2) {
      return color[0];
    } else if (val > 2 && val <= 4) {
      return color[1];
    } else if (val > 4 && val <= 6) {
      return color[2];
    } else if (val > 6 && val <= 8) {
      return color[3];
    } else if (val > 8 && val <= 10) {
      return color[4];
    } else {
      return 'rgba(0, 0, 0, 0.09)';
    }
  }
  render() { // [0, 0, 200, 0]
    const { data, title, HtmlPositin = ['50%', '85%'], titleStyle = { marginBottom: 8 },
      titleSmall, height, padding = 'auto', forceFit = true, width, callbackFormatterLuck = false,
      color = callbackFormatterLuck ? ['#F5222D', '#FFBF00', '#fadb14', '#73d13d', '#389e0d'].reverse()
        : ['#F5222D', '#FFBF00', '#fadb14', '#73d13d', '#389e0d'] } = this.props;
    const { lineWidth } = this.state;
    const val = data[0].value; // 只需要一条数据中的value字段 放入多条，直接取第一条 index = 0；

    // 自定义Shape 部分
    Shape.registerShape('point', 'pointer', {
      drawShape(cfg, group) {
        let point = cfg.points[0]; // 获取第一个标记点
        point = this.parsePoint(point);
        const center = this.parsePoint({ // 获取极坐标系下画布中心点
          x: 0,
          y: 0,
        });
        // 绘制指针
        group.addShape('line', {
          attrs: {
            x1: center.x,
            y1: center.y,
            x2: point.x,
            y2: point.y,
            stroke: cfg.color,
            lineWidth: 5,
            lineCap: 'round',
          },
        });
        return group.addShape('circle', {
          attrs: {
            x: center.x,
            y: center.y,
            r: 12,
            stroke: cfg.color,
            lineWidth: 4.5,
            fill: '#fff',
          },
        });
      },
    });
    const cols = {
      value: {
        type: 'linear',
        min: 0,
        max: 10,
        tickCount: 6,
        nice: true,
      },
    };
    return (
      <div className={styles.chart} style={{ height }} ref={this.handleRoot}>
        <div ref={this.handleRef}>
          {title && <h4 style={titleStyle}>{title}</h4>}
          <Chart
            height={height || window.innerHeight}
            width={forceFit === false ? width || window.innerWidth : window.innerWidth}
            data={data}
            scale={cols}
            padding={padding}
            forceFit={forceFit}
          >
            <Coord
              type="polar"
              startAngle={(-9 / 8) * Math.PI}
              endAngle={(1 / 8) * Math.PI}
              radius={0.75}
            />
            <Axis
              name="value"
              zIndex={2}
              line={null}
              label={{
              offset: -20,
              formatter: callbackFormatterLuck ? defaultFormatterRe : defaultFormatter,
              textStyle: {
              fontSize: 18,
              fill: '#CBCBCB',
              textAlign: 'center',
              textBaseline: 'middle',
            } }}
              tickLine={{
            length: -24,
            stroke: '#fff',
            strokeOpacity: 1,
          }}
            />
            <Axis name="1" visible={false} />
            <Guide>
              <Arc
                zIndex={0}
                start={[0, 0.965]}
                end={[10, 0.965]}
                style={{ // 底灰色
                  stroke: 'rgba(0, 0, 0, 0.09)',
                  lineWidth,
                }}
              />
              { val >= 2 && (
              <Arc
                zIndex={1}
                start={[0, 0.965]}
                end={[val, 0.965]}
                style={{ // 底灰色
                  stroke: color[0],
                    lineWidth,
                }}
              />
              )}
              { val >= 4 && (
              <Arc
                zIndex={1}
                start={[2, 0.965]}
                end={[4, 0.965]}
                style={{ // 底灰色
                    stroke: color[1],
                      lineWidth,
                  }}
              />
              )}
              { val >= 4 && val <= 6 && (
              <Arc
                zIndex={1}
                start={[4, 0.965]}
                end={[val, 0.965]}
                style={{ // 底灰色
                    stroke: color[2],
                      lineWidth,
                  }}
              />
                )}
              { val >= 2 && val < 4 && (
              <Arc
                zIndex={1}
                start={[2, 0.965]}
                end={[val, 0.965]}
                style={{ // 底灰色
                  stroke: color[1],
                  lineWidth,
                  }}
              />
              )}
              { val < 2 && (
              <Arc
                zIndex={1}
                start={[0, 0.965]}
                end={[val, 0.965]}
                style={{ // 底灰色
                  stroke: color[0],
                  lineWidth,
                  }}
              />
              )}
              { val >= 6 && (
              <Arc
                zIndex={1}
                start={[4, 0.965]}
                end={[6, 0.965]}
                style={{ // 底灰色
                  stroke: color[2],
                  lineWidth,
                  }}
              />
              )}
              { val >= 6 && val <= 8 && (
              <Arc
                zIndex={1}
                start={[6, 0.965]}
                end={[val, 0.965]}
                style={{ // 底灰色
                  stroke: color[3],
                  lineWidth,
                  }}
              />
              )}
              { val >= 8 && (
              <Arc
                zIndex={1}
                start={[6, 0.965]}
                end={[8, 0.965]}
                style={{ // 底灰色
                  stroke: color[3],
                  lineWidth,
                }}
              />
              )}
              { val >= 8 && val <= 10 && (
              <Arc
                zIndex={1}
                start={[8, 0.965]}
                end={[val, 0.965]}
                style={{ // 底灰色
                  stroke: color[4],
                  lineWidth,
                }}
              />
              )}
              <Html
                position={HtmlPositin}
                html={() => { return (`<div style="width: 300px;text-align: center;font-size: 12px!important;"><p style="font-size: 1.75em; color: rgba(0,0,0,0.43);margin: 0;">${titleSmall || '合格率'}</p><p style="font-size: 3em;color: rgba(0,0,0,0.85);margin: 0;">${(val * 10).toFixed(2)}%</p></div>`); }}
              />
            </Guide>
            <Geom
              type="point"
              position="value*1"
              shape="pointer"
              color={this.handleGetPointerColor(val, color)}
              active={false}
              style={{ stroke: '#fff', lineWidth: 1 }}
            />
          </Chart>
        </div>
      </div>
    );
  }
}
