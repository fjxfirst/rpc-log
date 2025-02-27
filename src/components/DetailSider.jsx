import '../styles/detail-sider.scss';
const DetailSider = (props) => {
  const {width} = props;
  return (
    <div className="request-detail-sider" style={{width}}>
      {props.children}
    </div>
  )
}
export default DetailSider;
