import {configureStore} from '@reduxjs/toolkit';
import requestRecordSlice from './request_record_slice';

export const store = configureStore({
  reducer: {
    requestRecord: requestRecordSlice
  }
});
