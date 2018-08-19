## ps.欢迎反应bug  qq：2959000390，

 --使用说明：
         rawData, onChange 
         rawData: 被选择用的数据源， 格式如： [{ name: '报警', key: '1' }, { name: '故障', key: '2' }]
         onChange：用到取到选中的数据 onChange={handleGetSelectData}

         handleGetSelectData = (e) => {
                 conssole.log('this's onchange data ==> ', e);
         }
## 顶部引用  import { DFTags } from '../../../appbase/components/DF';
## 在 return 中放入 

### -如: 
        <DFTags
           rawData={[{ name: '报警', key: '1' }, { name: '故障', key: '2' }]}
           onChange={handleGetSelectData}
        />

