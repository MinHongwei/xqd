import React, { Component } from 'react';
import SublimeVideo from 'react-sublime-video';
import { Row } from 'antd';

const { Source } = SublimeVideo

export default class print extends Component {
  render() {
    const style = {
      width: '49%',
      margin: '0.5%',
      float: 'left',
    };
    return (
      <div>
        <Row guster={24}>
          <div>
            <SublimeVideo
              autoPlay 
              loop
              style={style}
              src="https://os.alipayobjects.com/rmsportal/FqkQMyFqNqielOw.mp4"
            />
            <SublimeVideo
              loop
              style={style}
              src="https://os.alipayobjects.com/rmsportal/EejaUGsyExkXyXr.mp4"
            />
            <SublimeVideo
              style={style}
              src="https://os.alipayobjects.com/rmsportal/GIutPgZMTyfFfrH.mp4"
            />
            <SublimeVideo style={style}>
              <Source
                type="video/mp4"
                src="https://os.alipayobjects.com/rmsportal/ERKhqHlcHiCDSQu.mp4"
              />
            </SublimeVideo>
          </div>
        </Row>
      </div>
    );
  }
}
