import React from 'react';
import { Select } from 'antd';

/**
 * @author 闵宏维
 * ps. 欢迎反应bug  qq：2959000390，
 */
export default class XSelect extends React.Component {
  render() {
    const { rawData,
      rawDataLuck = true,
      FindValue,
      FindFields = 'upcode',
      KeyFields = 'id',
      ValueFields = 'code',
      NameFields = 'name',
      // defaultValue,
      // 其他组件需要使用的东西，请自我增加
      mode } = this.props;
    const codes = rawDataLuck ? rawData.filter(item => item[FindFields] === FindValue) : rawData;
    const getOptions = (data) => {
      return data.map(item => (
        <Select.Option key={item[KeyFields]} value={item[ValueFields]}>
          {item[NameFields]}
        </Select.Option>
      ));
    };
    return (
      <Select mode={mode} value={this.props.value} onChange={this.props.onChange}>
        {getOptions(codes)}
      </Select>
    );
  }
}
