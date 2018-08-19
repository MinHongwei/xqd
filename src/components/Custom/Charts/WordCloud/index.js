import React, { Component } from 'react';
import { Chart, Geom, Tooltip, Coord, Shape, Legend } from 'bizcharts';
import DataSet from '@antv/data-set';
import styles from '../Less.less';
/**
 * @author 闵宏维
 * ps.可以自行新建并重写，但是拒绝做任何更改，欢迎反应bug  qq：2959000390，
 */
// the word cloud  词云
export default class WordCloud extends Component {
  handleRoot = (n) => {
    this.root = n;
  };
  handleRef = (n) => {
    this.node = n;
  };

  render() {
    const { scale, data, title, height = window.innerHeight, forceFit = true, padding,
      visibleLegend = false, titleLegend, positionLegend, onPlotClickLock, rawData } = this.props;
    // console.log('data =>', data);
    const getTextAttrs = (cfg) => {
      return _.assign({}, {// eslint-disable-line
        fillOpacity: cfg.opacity,
        fontSize: cfg.origin._origin.size,// eslint-disable-line
        rotate: cfg.origin._origin.rotate,// eslint-disable-line
        text: cfg.origin._origin.text,// eslint-disable-line
        textAlign: 'center',
        fontFamily: cfg.origin._origin.font,// eslint-disable-line
        fill: cfg.color,
        textBaseline: 'Alphabetic',
      }, cfg.style);
    };
    // 给point注册一个词云的shape
    Shape.registerShape('point', 'cloud', {
      drawShape(cfg, container) {
        const attrs = getTextAttrs(cfg);
        return container.addShape('text', {
          attrs: _.assign(attrs, {// eslint-disable-line
            x: cfg.x,
            y: cfg.y,
          }),
        });
      },
    });
    const dv = new DataSet.View().source(data);
    const range = dv.range('value');
    const min = range[0];
    const max = range[1];
    dv.transform({
      type: 'tag-cloud',
      fields: ['x', 'value'],
      size: [window.innerWidth, window.innerHeight],
      font: 'Verdana',
      padding: 0,
      timeInterval: 5000, // max execute time
      rotate() {
        let random = ~~(Math.random() * 4) % 4;
        if (random === 2) {
          random = 0;
        }
        return random * 90; // 0, 90, 270
      },
      fontSize(d) {
        if (d.value) {
          return (((d.value - min) / (max - min)) * (80 - 24)) + 24;
        }
        return 0;
      },
    });

    return (
      <div className={styles.chart} style={{ height }} ref={this.handleRoot}>
        <div ref={this.handleRef}>
          {title && <h4 style={{ marginBottom: 8 }}>{title}</h4>}
          <Chart
            height={height}
            // width={window.innerWidth}
            data={dv}
            scale={scale}
            // padding={0}
            forceFit={forceFit}
            padding={padding || 'auto'}
            onPlotClick={(ev) => {
              if (onPlotClickLock) {
                if (ev.data) {
                  this.props.handleOnPlotClick(ev.data, rawData);
                      }
                    }
            }}
          >
            <Legend position={positionLegend} title={titleLegend} visible={visibleLegend} />
            <Tooltip showTitle={false} />
            <Coord reflect="y" />
            <Geom type="point" position="x*y" color="smallType" shape="cloud" tooltip="value*smallType" />
          </Chart>
        </div>
      </div>
    );
  }
}
