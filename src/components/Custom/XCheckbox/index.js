import React, { Component } from 'react';

import { Checkbox } from 'antd';

// import styles from './index.less';


/**
 * @author 闵宏维
 * 复选框
 * ps. 欢迎反应bug  qq：2959000390，
 */
export default class XCheckbox extends Component {
  render() {
    const { rawData,
      rawDataLuck = true,
      FindValue,
      FindFields = 'upcode',
      // KeyFields = 'id',
      ValueFields = 'code',
      NameFields = 'name',
      defaultValue,
      // 其他组件需要使用的东西，请自我增加
    } = this.props;
    const codes = rawDataLuck ? rawData.filter(item => item[FindFields] === FindValue) : rawData;
    const getOptionsData = (array) => {
      const result = [];
      array.forEach((element) => {
        result.push({ label: element[NameFields], value: element[ValueFields] });
      });
      return result;
    };
    return (
      <Checkbox.Group
        options={getOptionsData(codes)}
        // key={codes[0].id}
        value={this.props.value}
        onChange={this.props.onChange}
        defaultValue={defaultValue}
      />
    );
  }
}
