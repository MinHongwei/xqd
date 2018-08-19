import React from 'react';
import { Tag } from 'antd';

const { CheckableTag } = Tag;
/**
 * @author 闵宏维
 * ps.欢迎反应bug  qq：2959000390，
 */
// 功能备注 新增definevalue 实现默认选中 现未实现
export default class XTag extends React.Component {
  state = {
    selectedTagkeys: [],
    checkedall: false,
  };
  handleall = () => {
    const { rawData, onChange } = this.props;
    const { checkedall } = this.state;
    const tagKeysTemp = [];
    rawData.forEach((element) => {
      tagKeysTemp.push(element.key);
    });
    this.setState({
      checkedall: !checkedall,
      selectedTagkeys: tagKeysTemp,
    });
    if (checkedall === true) {
      this.setState({
        selectedTagkeys: [],
      });
      onChange([]);
    } else {
      onChange(tagKeysTemp);
    }
  };
  handleChange = (key, checked) => {
    const { rawData, onChange } = this.props;
    const { selectedTagkeys } = this.state;
    const nextSelectedTagKeys = checked
      ? [...selectedTagkeys, key]
      : selectedTagkeys.filter(t => t !== key);
    this.setState({ selectedTagkeys: nextSelectedTagKeys });
    if (nextSelectedTagKeys.length === rawData.length) {
      this.setState({
        checkedall: true,
      });
    } else {
      this.setState({
        checkedall: false,
      });
    }
    onChange(nextSelectedTagKeys);
  }

  render() {
    //  数据格式如: rawData={[{ name: '报警', key: '1' }, { name: '故障', key: '2' }]}
    const { rawData = [{ name: '无数据', key: '无数据' }], title, style } = this.props;
    const { selectedTagkeys, checkedall } = this.state;
    return (
      <div style={style}>
        <h5 style={{ marginRight: 8, display: 'inline' }}>{title ? `${title}:` : ''}</h5>
        <CheckableTag checked={checkedall} onChange={this.handleall}>
          全部
        </CheckableTag>
        {rawData.map(tag => (
          <CheckableTag
            key={tag.key}
            checked={selectedTagkeys.indexOf(tag.key) > -1}
            onChange={checked => this.handleChange(tag.key, checked)}
          >
            {tag.name}
          </CheckableTag>
        ))}
      </div>
    );
  }
}
