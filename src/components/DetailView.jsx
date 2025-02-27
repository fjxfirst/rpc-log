import {Checkbox, message} from 'antd';
import {ObjectInspector, chromeLight} from 'react-inspector';
import {useState} from 'react';
import {copyValue} from '../utils';
import JsonToTS from 'json - to - ts';

const DetailView = (props) => {
  const {title, dataObj} = props;
  const [messageApi, contextHolder] = message.useMessage();
  const [isShowJson, setIsShowJson] = useState(false);
  const isShowJsonChange = () => {
    setIsShowJson(!isShowJson);
  };
  const copyToJson = () => {
    const strValue = JSON.stringify(dataObj);
    copyValue(strValue).then(() => {
      messageApi.success('成功复制JSON到剪贴板！');
    });
  };
  const copyToTs = () => {
    const strValue = JsonToTS(dataObj).join('\n');
    copyValue(strValue).then(() => {
      messageApi.success('成功复制Ts到剪贴板！');
    });
  };
  return (
    <>
      {contextHolder}
      <div className="item-detail-title">
        <div>
          <span className="mr15">{title}</span>
          <Checkbox checked={isShowJson} onChange={isShowJsonChange}>JSON</Checkbox>
        </div>
        <div className="operate-group">
          <div className="small-btn" style={{marginRight: 5}} onClick={copyToJson}>复制为JSON</div>
          <div className="small-btn" onClick={copyToTs}>复制为TS类型</div>
        </div>
      </div>
      <div className="reg-header">
        {
          isShowJson
            ? <pre>{JSON.stringify(dataObj, undefined, 2)}</pre>
            : <ObjectInspector
              data={dataObj}
              expandPaths={['$', '.$.data']}
              theme={{
                ...chromeLight,
                ...{
                  BASE_FONT_SIZE: '14px',
                  TREENODE_FONT_SIZE: '14px',
                  BASE_FONT_FAMILY: 'Consolas, Menlo, monospace, Microsoft YaHei',
                  TREENODE_FONT_FAMILY: 'Consolas, Menlo, monospace, Microsoft YaHei'
                }
              }}
            />
        }
      </div>
    </>
  );
};

export default DetailView;
