import '../styles/tab.scss';
import {useState} from 'react';
import {CloseOutlined} from '@ant-design/icons';

const Tab = (props) => {
  const {
    tabViews, onClose = () => {
    }, isShowCloseBtn = true
  } = props;
  const tabClickHandler = (tabItem) => {
    setActiveKey(tabItem.key);
    tabItem.tabClick && tabItem.tabClick();
  };
  const views = tabViews.filter(item => !item.disShow);
  const [activeKey, setActiveKey] = useState(views[0].key);
  return (
    <>
      <div className="tab-bar">
        {
          isShowCloseBtn && <div className="close-btn" onClick={onClose}>
            <CloseOutlined className="close-btn-icon"/>
          </div>
        }
        <ul className="tab-list">
          {
            views.map((item) => (
              <li
                className={activeKey === item.key ? 'tab-item tab-item_active' : 'tab-item'}
                key={item.key}
                onClick={() => tabClickHandler(item)}
              >
                {item.label}
              </li>
            ))
          }
        </ul>
      </div>
      {
        views.map(item => (
          <div className="tab-view" style={{display: activeKey === item.key ? 'block' : 'none'}} key={item.key}>
            {item.children}
          </div>
        ))
      }
    </>
  );
};

export default Tab;
