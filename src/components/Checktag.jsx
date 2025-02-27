const CheckTag = (props) => {
  const {label, value, checked, onCheck, onClick, style={}}=props;
  const clickTagHandle=()=>{
    onCheck(value);
    onClick && onClick({label, value,checked});
  }
  return (
    <div style={style} className={checked?'check-tag checked':'check-tag'} onClick={clickTagHandle}>{label}</div>
  )
}

export default CheckTag;
