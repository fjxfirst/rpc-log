import {useEffect, useState, useRef, useLayoutEffect} from 'react';
import {Table} from 'antd';
import {useDispatch, useSelector} from 'react-redux';
import {
  setRequestList,
  pushRequestRecord,
  pushMsgRecord,
  updateRequestRecord,
  setSelectedRecord,
  resetRequestList
} from '../store/request_record_slice';
import {
  postMessageToBackground,
  requestRecordChange,
  clearAllRecordsChange
} from '../panel_message/panel_port_creator';
import {
  CheckCircleFilled,
  CloseCircleFilled,
  ExclamationCircleFilled,
  LoadingOutlined,
  PullRequestOutlined,
  SendOutlined
} from '@ant-design/icons';

const LogTable = (props) => {
  const [selectedRow, setSelectedRow] = useState([]);
  const [tableScrollY, setTableScrollY] = useState(0);
  const tableWrapper = useRef();
  const requestList = useSelector((state) => {
    console.log('state', state);
    return state.requestRecord.requestList;
  });
  const selectedRecord = useSelector((state) => {
    return state.requestRecord.selectedRecord;
  });
  const dispatch = useDispatch();
  const columns = [
    {
      title: ' 请求 ID',
      dataIndex: 'requestId',
      render: (value, record, index) => {
        if (record.requestType === 'FETCH') {
          return (<div><PullRequestOutlined style={{marginRight: 5, color: '#1b6ef3'}}/>{value}</div>);
        } else if (record.requestType === 'NSG') {
          return (<div><SendOutlined style={{marginRight: 5, color: '#c588f0'}}/>{value}</div>);
        }
      }
    },
    {title: ' 类型 ', dataIndex: 'requestType', width: 50, render: value => value === 'FETCH' ? ' 请求 ' : ' 推送 '},
    {
      title: ' 状态 ', //-1: 等待中 0: 成功 1: 失败 2: 未处理（只针对消息推送）
      dataIndex: 'requestState',
      width: 100,
      render: value => {
        if (value === -1) {
          return <LoadingOutlined/>;
        }
        const stateMap = {
          0: ' 成功 ',
          1: ' 失败 ',
          2: ' 未处理 '
        };
        const stateIconMap = {
          0: <CheckCircleFilled style={{color: '#52c1ca', marginRight: 2}}/>,
          1: <CloseCircleFilled style={{color: '#ff4d4f', marginRight: 2}}/>,
          2: <ExclamationCircleFilled style={{color: '#faad14', marginRight: 2}}/>
        };
        return <span>{stateIconMap[value]}{stateMap[value]}</span>;
      }
    }
  ];
  useEffect(() => {
    postMessageToBackground({type: 'get-req-records'}).then(res => {
      dispatch(setRequestList(res.payloadData));
    });

    const cancelListen = requestRecordChange((newRequest) => {
      if (newRequest.requestType === 'FETCH') {
        if (newRequest.requestState === -1) {
          dispatch(pushRequestRecord(newRequest));
        } else {
          dispatch(updateRequestRecord(newRequest));
        }
      } else if (newRequest.requestType === 'MSG') {
        dispatch(pushMsgRecord(newRequest));
      }
    });
    const clearListen = clearAllRecordsChange((records) => {
      dispatch(resetRequestList(records));
    });
    return () => {
      cancelListen();
      clearListen();
    };
  }, []);
  useLayoutEffect(() => {
    if (tableWrapper.current) {
      const scrollBody = document.getElementsByClassName('ant-table-body')[0];
      if (scrollBody && !selectedRecord) {
        scrollBody.scrollTo({top: scrollBody.scrollHeight});
      }
    }
  }, [requestList, selectedRow]);
  useEffect(() => {
    const resizeObserver = new ResizeObserver((entries) => {
      const entry = entries [0];
      setTableScrollY(entry.contentRect.height - 27); // 表格高度是 27
    });
    if (parentWrapper) {
      resizeObserver.observe(parentWrapper);
    }
    return () => {
      resizeObserver.disconnect();
    };
  }, [parentWrapper]);
  const rowClassName = (record, index) => {
    let rowClassText = index % 2 === 0 ? 'even-row' : 'odd-row';
    if (record.id === selectedRow.id) {
      rowClassText = 'row-selected ${rowClassText}';
    }
    return rowClassText;
  };
  const onRow = (record) => ({
    onClick: (event) => {
      setSelectedRow(record);
      dispatch(setSelectedRecord(record));
      rowClick && rowClick();
    }
  });
  return (
    <Table
      className="req-record-table"
      ref={tableWrapper}
      style={{width: tableWidth}}
      rowHover={true}
      onRow={onRow}
      columns={columns}
      rowClassName={rowClassName}
      dataSource={requestList}
      rowKey={'id'}
      size="small"
      scroll={{y: tableScrollY}}
      pagination={false}
    />
  );
};
export default LogTable;
