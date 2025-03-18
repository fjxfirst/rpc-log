import '../styles/base-detail.scss';
import {CheckCircleFilled, CloseCircleFilled, ExclamationCircleFilled, LoadingOutlined} from '@ant-design/icons';
import {useMemo} from 'react';
import {getCusFormatTime} from '../utils';

const BaseDetail = ({requestRecord}) => {
  if (!requestRecord) {
    return null;
  }
  const stateMap = {
    '-1': ' 等待响应 ',
    0: ' 成功 ',
    1: ' 失败 ',
    2: ' 未处理 '
  };
  const stateIconMap = {
    '-1': <LoadingOutlined style={{marginRight: 2}}/>,
    0: <CheckCircleFilled style={{color: "#52c14a", marginRight: 2}}/>,
    1: <CloseCircleFilled style={{color: "#ff4d4f", marginRight: 2}}/>,
    2: <ExclamationCircleFilled style={{color: "#faad14", marginRight: 2}}/>
  };
  const request_nano_id = useMemo(() => {
    if (requestRecord.requestDetail) {
      return requestRecord.requestDetail.reqHead.request_nano_id;
    } else {
      return requestRecord.responseDetail.header.request_nano_id;
    }
  }, [requestRecord]);
  const service_name = useMemo(() => {
    if (requestRecord.requestDetail) {
      return requestRecord.requestDetail.reqHead.service_name;
    } else {
      return requestRecord.responseDetail.header.service_name;
    }
  }, [requestRecord]);
  const fetchTime = useMemo(() => requestRecord.fetchTime ? getCusFormatTime(requestRecord.fetchTime) : '', [requestRecord]);
  const receiveTime = useMemo(() => requestRecord.receiveTime ? getCusFormatTime(requestRecord.receiveTime) : '', [requestRecord])
  const timeConsuming = useMemo(() => {
    if (requestRecord.fetchTime && requestRecord.receiveTime) {
      return `${requestRecord.receiveTime - requestRecord.fetchTime}毫秒`
    }
    return '';
  }, [requestRecord])
  return (
    <div className="base-info-wrapper">
      <div className="property-row">
        <div className="property-key">request_nano_id</div>
        <div className="property-value">{request_nano_id}</div>
      </div>
      <div className="property-row">
        <div className="property-key">服务模块</div>
        <div className="property-value">{service_name}</div>
      </div>
      <div className="property-row">
        <div className="property-key">请求ID</div>
        <div className="property-value">{requestRecord.requestId}</div>
      </div>
      <div className="property-row">
        <div className="property-key">状态</div>
        <div
          className="property-value">{stateIconMap[requestRecord.requestState]}{stateMap[requestRecord.requestState]}</div>
      </div>
      <div className="property-row">
        <div className="property-key">类型</div>
        <div className="property-value">{requestRecord.requestType === 'FETCH' ? '请求' : '推送'}</div>
      </div>
      {
        requestRecord.requestType === 'FETCH'
        &&
        <div className="property-row">
          <div className="property-key">请求时间</div>
          <div className="property-value">{fetchTime}</div>
        </div>
      }
      <div className="property-row">
        <div className="property-key">返回时间</div>
        <div className="property-value">{receiveTime}</div>
      </div>
      {
        requestRecord.requestType === 'FETCH'
        &&
        <div className="property-row">
          <div className="property-key">请求耗时</div>
          <div className="property-value">{timeConsuming}</div>
        </div>
      }
    </div>
  );
};
export default BaseDetail;
