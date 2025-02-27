import '../styles/tool-bar.scss';
import {useEffect, useMemo} from 'react';
import {useDispatch, useSelector} from 'react-redux';
import {ExportOutlined, FilterFilled, FilterOutlined, SettingOutlined, StopOutlined} from '@ant-design/icons';
import LaunchButton from './LaunchButton';
import {postMessageToBackground} from '../panel_message/panel_port_creator';
import {Dropdown, Modal, Divider} from 'antd';
import {setRequestList, setSelectedRecord, setRunning} from '../store/request_record_slice';
import appJson from '../../package.json';

const ToolBar = (props) => {
  const {isShowFilterBar, setIsShowFilterBar, isOnFiltering} = props;
  const isRunning = useSelector((state) => state.requestRecord.isRunning);
  const dispatch = useDispatch();
  const filteringColor = useMemo(() => isOnFiltering ? '#dc362e' : '#1b6ef3', [isOnFiltering]);
  const startRecord = () => {
    postMessageToBackground({type: 'switch-running', data: !isRunning}).then(res => {
      dispatch(setRunning(!isRunning));
    });
  };
  const clearAllRecord = () => {
    postMessageToBackground({type: 'clear-all-records'}).then(res => {
      dispatch(setRequestList([]));
      dispatch(setSelectedRecord(null));
    });
  };
  const menuProps = {
    items: [{label: ' 关于 ', key: 'about'}],
    onClick: (e) => {
      if (e.key === 'about') {
        Modal.info({
          title: ' 关于 ATUNetwork',
          icon: null,
          content: <span>版本号：{appJson.version}</span>,
          okText: ' 确定 '
        });
      }
    }
  };
  useEffect(() => {
    postMessageToBackground({type: 'get-is-running'}).then(res => {
      dispatch(setRunning(res.payloadData));
    });
  }, []);
  const showExportDialog = () => {
    alert(2);
  };
  return (
    <div className="tool-bar">
      <div style={{display: 'flex'}}>
        <LaunchButton isRunning={isRunning} onClick={startRecord} title={isRunning ? '停止' : '运行'}/>
        <StopOutlined className="clear-btn" rotate={90} onClick={clearAllRecord} title="清理"/>
        <Divider type="vertical"/>
        {
          isShowFilterBar
            ? <FilterFilled onClick={() => setIsShowFilterBar(false)} style={{color: filteringColor}} title="筛选"/>
            : <FilterOutlined onClick={() => setIsShowFilterBar(true)} style={{color: filteringColor}} title="筛选"/>
        }
        <Divider type="vertical"/>
        <ExportOutlined style={{color: '#1b6ef3'}} onClick={showExportDialog} title="导出记录"/>
      </div>
      <Dropdown menu={menuProps} trigger={['click']}>
        <SettingOutlined/>
      </Dropdown>
    </div>
  );
};
export default ToolBar;
