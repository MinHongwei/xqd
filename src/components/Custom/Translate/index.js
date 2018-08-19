import React from 'react';
/**
 * @author 闵宏维
 * ps.欢迎反应bug  qq：2959000390，
 */
export default class Translate extends React.Component {
  render() {
    const { rawData,
      FindValue,
      rawDataLuck = true,
      value, //  如：其他表存储的代码表 code字段
      FindFields = 'upcode',
      // KeyFields = 'id',
      ValueFields = 'code',
      NameFields = 'name',
    } = this.props;
    const codes = rawDataLuck ? rawData.filter(item => item[FindFields] === FindValue) : rawData;
    const ValueNmae = (datas) => {
      if (value === undefined) {
        return '';
      }
      const data = datas.filter(item => item[ValueFields] === value);
      return data.length > 0 ? <span>{data[0][NameFields]}</span> : value;
    };
    return ValueNmae(codes);
  }
}
