import * as styleObj from '../styles/launch-button.module.scss';
const LaunchButton = (props) => {
  const { isRunning, onClick, ...restProps } = props;
  return (
    <div
      className={isRunning? `${styleObj.launchBtn} ${styleObj.launchBtnActive}` : styleObj.launchBtn }
      onClick={onClick}
      {...restProps}
    />
  )
}
export default LaunchButton;
