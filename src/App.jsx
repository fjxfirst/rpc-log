import './styles/app.scss';
import './styles/record-detail.scss';

import {useState, useMemo, useRef, useEffect} from 'react';
import {useSelector} from 'react-redux';
import ToolBar from './components/toolbar';
import LogTable from './components/LogTable';
import DetailSider from './components/DetailSider';
import Tab from './components/Tab';
import BaseDetail from './components/BaseDetail';
import RequestDetail from './components/RequestDetail';
import ResponseDetail from './components/ResponseDetail';
import FilterBar from './components/FilterBar';
import {throttle} from './utils';
import {Divider} from 'antd';

const App = () => {
  const {selectedRecord, isOnFiltering, originRequestList} = useSelector((state) => {
    return state.requestRecord;
  });
  const [isShowSider, setIsShowSider] = useState(false); // 是否展示右侧边栏
  const [isShowFilterBar, setIsShowFilterBar] = useState(true); // 是否展示过滤查询栏
  const [tableWidth, setTableWidth] = useState('auto'); //
  const [siderWidth, setSiderWidth] = useState(400); //
  const logTableWrapper = useRef(null);
  const splitLine = useRef(null);
  const tabViews = selectedRecord ? [
    {
      key: '1',
      label: '基本',
      children: <BaseDetail requestRecord={selectedRecord}/>,
      tabClick: () => {
      }
    },
    {
      key: '2',
      label: '请求',
      disShow: selectedRecord.requestType === 'MSG',
      children: <RequestDetail requestRecord={selectedRecord}/>
    },
    {
      key: '3',
      label: '响应',
      children: <ResponseDetail requestRecord={selectedRecord}/>
    }
  ] : [];
  const logWrapperHeight = useMemo(() => isShowFilterBar ? 'calc(100vh - 81px)' : 'calc(100vh - 52px)', [isShowFilterBar]);
  const countInfo = useMemo(() => {
    const total = originRequestList.length;
    let fetchCount = 0;
    let pushCount = 0;
    originRequestList.forEach((item) => {
      if (item.requestType === 'FETCH') {
        fetchCount++;
      } else {
        pushCount++;
      }
    });
    return {
      total, fetchCount, pushCount
    };
  }, [originRequestList]);
  const closeDetailSider = () => {
    setIsShowSider(false);
    setTableWidth('auto');
  };
  const tableRowClick = () => {
    setIsShowSider(true);
    setTableWidth(logTableWrapper.current.offsetWidth - siderWidth);
  };
  useEffect(() => {
    if (!selectedRecord) {
      setIsShowSider(false);
      setTableWidth('auto');
    }
  }, [selectedRecord]);
  useEffect(() => {
    if (isShowSider) {
      return;
    }
    const splitMouseDownHandler = (e) => {
      document.addEventListener('mousemove', splitMouseMoveHandler);
    };
    const splitMouseMoveHandler = (e) => {
      setSiderWidth(logTableWrapper.current.offsetWidth - e.clientX);
      setTableWidth(e.clientX);
    };
    const splitMouseUpHandler = (e) => {
      document.removeEventListener('mousemove', splitMouseMoveHandler);
    };
    splitLine.current && splitLine.current.addEventListener('mousedown', splitMouseDownHandler);
    document.addEventListener('mouseup', splitMouseUpHandler);
    return () => {
      document.removeEventListener('mousemove', splitMouseMoveHandler);
      splitLine.current && splitLine.current.removeEventListener('mousedown', splitMouseDownHandler);
      document.removeEventListener('mouseup', splitMouseUpHandler);
    };
  }, [isShowSider]);
  useEffect(() => {
    if (isShowSider) {
      return;
    }
    const resizeHandler = throttle(() => {
      const newSiderWidth = logTableWrapper.current.offsetWidth - tableWidth;
      if (newSiderWidth < 380) {
        setTableWidth(logTableWrapper.current.offsetWidth - 380);
      } else {
        setSiderWidth(newSiderWidth);
      }
    }, 250);
    window.addEventListener('resize', resizeHandler);
    return () => {
      window.removeEventListener('resize', resizeHandler);
    };
  }, [isShowSider, tableWidth]);
  return <>
    <ToolBar
      isShowFilterBar={isShowFilterBar}
      setIsShowFilterBar={setIsShowFilterBar}
      isOnFiltering={isOnFiltering}
    />
    <FilterBar isShow={isShowFilterBar}/>
    <div ref={logTableWrapper} className="req-log-wrapper" style={{height: logWrapperHeight}}>
      <LogTable rowClick={tableRowClick} parentWrapper={logTableWrapper.current} tableWidth={tableWidth}/>
      {
        selectedRecord && isShowSider
        &&
        <>
          <div className="split-line" ref={splitLine}></div>
          <DetailSider width={siderWidth}>
            <Tab tabViews={tabViews} onClose={closeDetailSider}/>
          </DetailSider>
        </>
      }
    </div>
    <div className="footer-bar">
      总计：{countInfo.total}
      <Divider type="vertical"/>
      请求：{countInfo.fetchCount}
      <Divider type="vertical"/>
      推送：{countInfo.pushCount}
    </div>
  </>;
};
export default App;
