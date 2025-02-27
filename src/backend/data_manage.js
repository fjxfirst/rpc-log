// key: 页签id，考虑到bs架构浏览器存在多页签打开atu的情况，value是tab对应的请求记录集合
export const tabReqRecordMap = new Map();

export class RequestRecordManage {
  requestRecords = [];
  notRespondedRecords = new Map();
  tabId = '';
  panelPort = null;
  isRunning = true;

  constructor(_tabId) {
    this.tabId = _tabId;
  }

  addRecord(record) {
    if (!this.isRunning) {
      return;
    }
    if (!this.notRespondedRecords.has(record.id)) {
      this.requestRecords.push(record);
      if (this.panelPort) {
        this.panelPort.postMessage({type: 'req-changed', payloadData: record});
      }
      this.notRespondedRecords.set(record.id, record);
    } else {
      console.log('没找到');
    }
  }

  addMsgRecord(record) {
    if (!this.isRunning) {
      return;
    }
    this.requestRecords.push(record);
// 触发更新消息
    if (this.panelPort) {
      this.panelPort.postMessage({
        type: 'req-changed',
        payloadData: record
      });
    }
  }

  updateRecord(resRecord, id, receiveTime) {
    if (this.notRespondedRecords.has(id)) {
      const requestRecord = this.notRespondedRecords.get(id);
      requestRecord.responseDetail = resRecord;
//requestState -1: 等待中 0: 成功 1: 失败 2: 未处理（只针对消息推送）
      requestRecord.requestState = resRecord.error.error_id === 0 ? 0 : 1;
      requestRecord.receiveTime = receiveTime;
// 触发更新消息
      if (this.panelPort) {
        this.panelPort.postMessage({
          type: 'req-changed',
          payloadData: requestRecord
        });
      } else {
//todo: error
      }
    }
  }

  clearAllRecords() {
    this.requestRecords = [];
  }

  clearNotRespondedRecords() {
    this.notRespondedRecords = new Map();
  }

  getRequestRecords() {
    return this.requestRecords;
  }
  setRunning(isRunning) {
    this.isRunning = isRunning;
  }
  getRunning() {
    return this.isRunning;
  }
}
