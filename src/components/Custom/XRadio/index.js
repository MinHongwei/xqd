import React, { Component } from 'react';

import { Radio } from 'antd';
// import styles from './index.less';

const RadioGroup = Radio.Group;
/**
 * @author 闵宏维
 * 单选框
 * ps. 欢迎反应bug  qq：2959000390，
 */
export default class XRadio extends Component {
  render() {
    const { rawData,
      rawDataLuck = true,
      FindValue,
      FindFields = 'upcode',
      // KeyFields = 'id',
      ValueFields = 'code',
      NameFields = 'name',
      // 其他组件需要使用的东西，请自我增加
    } = this.props;
    const codes = rawDataLuck ? rawData.filter(item => item[FindFields] === FindValue) : rawData;
    const getRadioData = (array) => {
      // return data.map(item => (
      //   <Radio key={item[KeyFields]} value={item[ValueFields]}>
      //     {item[NameFields]}
      //     {console.log(item[ValueFields])}
      //   </Radio>
      // ));
      const result = [];
      array.forEach((element) => {
        result.push({ label: element[NameFields], value: element[ValueFields] });
      });
      return result;
    };
    return (
      <RadioGroup
        // key={codes[0].id}
        options={getRadioData(codes)}
        value={this.props.value}
        onChange={this.props.onChange}
      />
    );
  }
}
