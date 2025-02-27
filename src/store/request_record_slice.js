import {createSlice} from '@reduxjs/toolkit';

const initialState = {
  selectedRecord: null,
  originRequestList: [],
  requestList: [],
  queryParameter: {},
  isOnFiltering: false,
  isRunning: true
};
const notRespondedOfOriginIndexMap = new Map();
const notRespondedIndexMap = new Map();
const filterWithQueryParameter = (queryParameter, requestList) => {
  const {queryStr, queryType} = queryParameter;
  let nextReqList = requestList;
  if (queryType) {
    nextReqList = requestList.filter(item => item.requestType === queryType);
  }
  if (queryStr) {
    nextReqList = nextReqList.filter(item => {
      if (queryStr === item.requestId) {
        return true;
      }
      if ((item.requestDetail && queryStr === item.requestDetail.reqHead.service_name)
        || queryStr === item.responseDetail.header.service.service_name) {
        return true;
      }
      if (item.responseDetail && JSON.stringify(item.responseDetail.data).includes(queryStr)) {
        return true;
      }
    });
  }
  return nextReqList;
};
const isOneRecordMatch = (queryParameter, reqItem) => {
  const {queryStr, queryType} = queryParameter;
  let isRequestTypeMatch = true;
  if (queryType) {
    isRequestTypeMatch = queryType === reqItem.requestType;
  }
  if(!isRequestTypeMatch){
    return false;
  }
  if (queryStr){
    if(queryStr===reqItem.requestId){
      return true;
    }
    if((reqItem.requestDetail&&queryStr===reqItem.requestDetail.reqHead.service_name)
      || queryStr===reqItem.responseDetail?.header.service_name){
      return true;
    }
    if (reqItem.responseDetail&&JSON.stringify(reqItem.responseDetail.data).includes(queryStr)){
      return true;
    }
  }else if(queryStr===''){
    return true;
  }
  return false;
};

export const requestRecordSlice=createSlice({
  name: 'requestRecorder',
  initialState,
  reducers: {
    setRequestList(state, action) {
      state.originRequestList = action.payload;
      state.requestList = action.payload;
    },
    pushRequestRecord(state, action) {
      if(state.isOnFiltering){
        if(isOneRecordMatch(state.queryParameter, action.payload)){
          state.requestList.push(action.payload);
          notRespondedIndexMap.set(action.payload.id, state.requestList.length - 1);
        }
      } else {
        state.requestList.push(action.payload);
        notRespondedIndexMap.set(action.payload.id, state.requestList.length - 1);
      }
      state.originRequestList.push(action.payload);
      notRespondedOfOriginIndexMap.set(action.payload.id, state.originRequestList.length - 1);
    },
    updateRequestRecord(state, action) {

      // 更新源数据中请求的状态
      if (notRespondedOfOriginIndexMap.has(action.payload.id)) {
        const requestRecord = state.originRequestList[notRespondedOfOriginIndexMap.get(action.payload.id)]
        requestRecord.responseDetail = action.payload.responseDetail; // 更新响应体
        // 更新状态
        requestRecord.requestState = requestRecord.responseDetail.error.error_id === 0? 0 : 1;
        requestRecord.receiveTime =  action.payload.receiveTime;
        notRespondedOfOriginIndexMap.delete(action.payload.id);
      }

      // 更新展示数据中请求的状态
      if (notRespondedIndexMap.has(action.payload.id)) {
        const requestRecord = state.requestList[notRespondedIndexMap.get(action.payload.id)];
        requestRecord.responseDetail = action.payload.responseDetail; // 更新响应体
        // 更新状态
        requestRecord.requestState = requestRecord.responseDetail.error.error_id === 0? 0 : 1;
        requestRecord.receiveTime =  action.payload.receiveTime;
        if (state.selectedRecord && state.selectedRecord.id === requestRecord.id) {
          // 如果更新的是当前选中的请求记录
          state.selectedRecord = requestRecord;
        }
        notRespondedIndexMap.delete(action.payload.id);
      }
    },
    pushMsgRecord(state, action) {
      if (state.isOnFiltering) {
        if (isOneRecordMatch(state.queryParameter, action.payload)) {
          state.requestList.push(action.payload);
        }
      } else {
        state.requestList.push(action.payload);
      }
      state.originRequestList.push(action.payload);
    },
    setSelectedRecord(state, action) {
      state.selectedRecord = action.payload;
    },
    setIsOnFiltering(state, action) {
      state.isOnFiltering = action.payload;
    },
    setQueryParameter(state, action) {
      state.queryParameter = action.payload;
      state.requestList = filterWithQueryParameter(action.payload, state.originRequestList);
      if (state.selectedRecord &&!isOneRecordMatch(action.payload, state.selectedRecord)) {
        state.selectedRecord = null;
      }
    },
    resetRequestList(state, action) {
      state.originRequestList = [];
      state.requestList = [];
      state.selectedRecord = null;
      notRespondedOfOriginIndexMap.clear();
      notRespondedIndexMap.clear();
    },
    setRunning(state, action) {
      state.isRunning = action.payload;
    }
  }
})
export const {
  setRequestList,
  pushRequestRecord,
  updateRequestRecord,
  setSelectedRecord,
  pushMsgRecord,
  setIsOnFiltering,
  setQueryParameter,
  resetRequestList,
  setRunning
} = requestRecordSlice.actions;
export default requestRecordSlice.reducer;
