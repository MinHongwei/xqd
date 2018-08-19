import React from 'react';
import { Tooltip } from 'antd';
/**
 * @author 闵宏维
 * ps.  qq：2959000390，
 */
export default class TranslateLogo extends React.Component {
  render() {
    const { rawData,
      FindValue, // FindFieldsValue
      value, //  如：其他表存储的代码表 code字段
      FindFields = 'upcode',
      // KeyFields = 'id',
      ValueFields = 'code',
      NameFields = 'name',
      ImgFields = 'imgUrl',
      tooltipSwitch = true,
      cardAvatarUserDefined, // 图片css
    } = this.props;
    // tooltipSwitch 是不是需要使用 Tooltip 标签
    const codes = rawData ? rawData.filter(item => item[FindFields] === FindValue) : [];
    const cardAvatar = { // 新增css 自定义
      width: '48px',
      height: '48px',
      borderRadius: '48px',
    };
    const ValueNmae = (datas) => {
      // const { value } = this.props;
      const data = datas.filter(item => item[ValueFields] === value);
      return data.length > 0 ? (
        tooltipSwitch ? (
          <Tooltip title={data[0][NameFields]}>
            <img
              alt={data[0][NameFields]}
              style={cardAvatarUserDefined || cardAvatar}
              src={data[0][ImgFields]}
            />
          </Tooltip>) :
          (
            <img
              alt={data[0][NameFields]}
              style={cardAvatarUserDefined || cardAvatar}
              src={data[0][ImgFields]}
            />
          )
      ) : (
        tooltipSwitch ? (
          <Tooltip title={value}>
            <img alt={value} style={cardAvatarUserDefined || cardAvatar} src="http://www.xunqiandu.com/images/test.png" />
          </Tooltip>) :
          (<img alt={value} style={cardAvatarUserDefined || cardAvatar} src="http://www.xunqiandu.com/images/test.png" />)
      );
    };
    return ValueNmae(codes);
  }
}
