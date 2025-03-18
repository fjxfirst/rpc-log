import {useState} from 'react';
import {Input, Tooltip} from 'antd';
import {useDispatch} from 'react-redux';
import {useImmer} from '../hooks';
import CheckTag from './CheckTag';
import '../styles/filter-bar.scss';
import {setIsOnFiltering, setQueryParameter} from '../store/request_record_slice';
import {QuestionCircleOutlined} from '@ant-design/icons';

const FilterBar = (props) => {
  const { queryParameterChange, isShow } = props;
  const dispatch = useDispatch ();
  const [queryStr, setQueryStr] = useState ('');
  const [queryType, setQueryType] = useState ('');
  const [queryParameterObj, setQueryParameterObj] = useImmer ({ queryStr, queryType });
  const reqTypes = [
    { label: 'All', value: '' },
    { label: ' 请求 ', value: 'FETCH' },
    { label: ' 推送 ', value: 'MSG' }
  ];
  const isEmptyQueryParameterObj = (queryData) => Object.keys(queryData).every(key => queryData[key] === '');
  const queryParameterChangeHandle = (queryParameter) => {
    dispatch(setIsOnFiltering(!isEmptyQueryParameterObj(queryParameter)));
    dispatch(setQueryParameter (queryParameter));
    queryParameterChange && queryParameterChange(queryParameter);
  };
  const filterInputChange = (e) => {
    const value = e.target.value.trim();
    if (value!== queryStr) {
      setQueryStr (value);
      const newQueryParameterObj = setQueryParameterObj((draft) => {
        draft.queryStr = value;
      });
      queryParameterChangeHandle(newQueryParameterObj);
    }
  };
  const checkTagCheckHandle = (value) => {
    if (queryType!== value) {
      setQueryType(value);
      const newQueryParameterObj = setQueryParameterObj((draft) => {
        draft.queryType = value;
      });
      queryParameterChangeHandle(newQueryParameterObj);
    }
  }
  const helpText = `查询说明：依次按照优先级①请求ID、②服务名、③响应数据匹配查询，有结果即停止后续的匹配`;
  const helpTip = <Tooltip placement="right" title={helpText}><QuestionCircleOutlined/></Tooltip>;
  return (
    <div className={isShow? 'filter-bar' : 'dom-hidden'}>
      <Input
        value={queryStr}
        rootClassName="filter-input"
        allowClear
        placeholder="Filter"
        suffix={helpTip}
        onChange={filterInputChange}
      />
      {
        reqTypes.map((item) => (
          <CheckTag
            label={item.label}
            value={item.value}
            key={item.value}
            style={{ marginLeft: 5 }}
            checked={item.value === queryType}
            onCheck={checkTagCheckHandle}
          />
        ))
      }
    </div>
  );
};
export default FilterBar;
