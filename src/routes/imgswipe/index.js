import React from 'react';
import { Card, Row, Col } from 'antd';
import { ImgSwipe } from '../../components/Custom';

export default class imgswipe extends React.PureComponent {

  render(){
    const imgs = [
      <img itemProp="contentUrl" alt="minhw" width="100%" src="//www.xunqiandu.com/images/imtest.png" data-width="1924" data-height="1024" />,
      <img itemProp="contentUrl" alt="minhw" width="100%" src="//www.xunqiandu.com/images/img-2.jpg" />,
    ];
    return(
      <Row gutter={24}>
        <Col>
          <Card>
            <div style={{ display: 'back', width: 100, height: 100 }}>
              <ImgSwipe
                imgs={[<img itemProp="contentUrl" alt="minhw" width="100%" src="//www.xunqiandu.com/images/img-3.jpg" />]}
              />
            </div>
            <div style={{ display: 'back', width: 100, height: 100 }}>
              <ImgSwipe
                imgs={imgs}
              />
            </div>
            {/* <div style={{ display: 'back', width: 100, height: 100 }}>
              <ImgSwipe
                imgs={[<img itemProp="contentUrl" alt="minhw" width="100%" src="//www.xunqiandu.com/images/img-1.jpg" />]}
              />
            </div> */}
          </Card>
        </Col>
      </Row>
    );
  }
}