import React, { Component } from 'react';

import { Print } from '../../components/Custom';

export default class print extends Component {
  render() {
    const printComponent = (
      <div>
        <p>假如真有来世，</p>
        <p>我愿生生世世为人，</p>
        <p>只做芸芸众生中的一个，</p>
        <p>哪怕一生贫困清苦，</p>
        <p>浪迹天涯，</p>
        <p>只要能爱恨歌哭，</p>
        <p>只要能心遂所愿。</p>
        <hr />
        <p>人们说我的话， </p>
        <p>我心中承认是对的。 </p>
        <p>我少年琐碎的脚步， </p>
        <p>曾到女店东家里去过。</p>
        <img alt="" width="20%" src="//www.xunqiandu.com/images/test.png" />
        --by 网络
      </div>
    );
    return (
      <div>
        <Print
          // dispatch={dispatch}
          buttonBackShow={false}
          printComponent={printComponent}
          browserShow
          title="寻千度Print Demo"
        />
      </div>
    );
  }
}
