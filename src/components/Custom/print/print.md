## ps.可以自行新建并重写，但是拒绝做任何更改，欢迎反应bug  qq：2959000390，

 --使用说明：

## 顶部引用 
        如： import Print from '../../appbase/components/print';
## 在 return 中放入 
        <Print
          dispatch={dispatch} // dispatch
          buttonBackShow={false} // 是否隐藏返回按钮 默认 展示 true
          printComponent={printComponent} // 要打印的 内容
          title="参数" // 页面标题
          browserShow// 是否使用新页面， 默认为false 使用 这里的 布尔为什么反用，不想做解释 照做就行。
          // backHref="/form/basic-form" // dispatch 返回的路径
        />
### -如:
        import React, { Component } from 'react';

        import Print from '../../appbase/components/print';
        import styles from './index.less';

        export default class demo extends Component {
        render() {
            const { dispatch, data } = this.props;
            console.log(data);
            console.log(dispatch);
            const printComponent = (
            <div>
                <table className={styles.insptable} width="710px" align="center">
                <tbody>
                    <tr style={{ border: '0px' }} className={styles.tr1}>
                    <td colSpan="25" style={{ textAlign: 'center' }}>
                        <p style={{ fontSize: '14.0pt', fontFamily: '微软雅黑' }}>
                        <strong>&nbsp;&nbsp;&nbsp;&nbsp;在用汽车加载减速法排气烟度检测报告</strong>
                        </p>
                        ...
                </tbody>
                </table>
            );
        return (
            <div>
                <Print
                dispatch={dispatch}
                buttonBackShow={false}
                printComponent={printComponent}
                // testMothd="1"
                title="参数"
                // backHref="/form/basic-form"
                />
            </div>
            );
        }
        }

