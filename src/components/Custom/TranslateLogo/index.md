  ## 使用方法 ：
  
    1.import CodeTranslateLogo from '../../../appbase/components/CodeTranslateLogo';
    2. <CodeTranslateLogo codeList={sysCodeList} upcode="vemDistrict" value={item.district} />
       带图标的显示 // 需要代码表或对应表提供图标url // 多条相同的  只取第0条
  # 字段解析
    CodeList 为代码表已配置被翻译字段的数据（具体数据看你怎么查询代码表）
    tooltipSwitch 是不是需要使用 Tooltip 标签
    upcode 被翻译字段的上层代码
    value 用于翻译的代码值

  如： sysCodeList = [{ code: test }, {upcode: test, code: 1, name: minhw }]
      <Translate codeList={sysCodeList} upcode="test" value={item.value} />
        当你取到value=1时 页面显示的就是 minhw 