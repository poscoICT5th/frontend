import { configureStore, createSlice } from '@reduxjs/toolkit'

// createSlice로 값 생성해줌
let test = createSlice({
  name: 'user',
  initialState: 'kim'
})
// state등록해주는부분
export default configureStore({
  // {작명:createSlice만든거.reducer} 사용
  reducer: {
    user: test.reducer
  }
}) 