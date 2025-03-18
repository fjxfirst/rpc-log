import DetailView from './DetailView';
const RequestDetail=({requestRecord})=> {
  if (!requestRecord || !requestRecord.requestDetail) return null;
  const {requestDetail} = requestRecord;
  return (
    <div className="request-info-wrapper">
      <DetailView title="请求头" dataObj={requestDetail.reqHead}/>
      <DetailView title="请求体数据" dataObj={requestDetail.reqData}/>
    </div>
  );
}
export default RequestDetail;
