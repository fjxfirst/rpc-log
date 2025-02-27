import DetailView from './DetailView';
const ResponseDetail = ({ requestRecord }) => {
  if (!requestRecord ||!requestRecord.responseDetail) return null;
  const { responseDetail } = requestRecord;
  return (
    <div className="request-info-wrapper">
      <DetailView title="响应头" dataObj={responseDetail.header}/>
      <DetailView title="响应体数据" dataObj={responseDetail}/>
    </div>
  );
};
export default ResponseDetail;
