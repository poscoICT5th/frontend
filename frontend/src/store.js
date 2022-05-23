import { configureStore, createSlice } from '@reduxjs/toolkit'

// createSlice로 값 생성해줌
let user = createSlice({
  name: 'user',
  initialState: 'kim',
  reducers: {
    changeName(state) {
      return 'john ' + state
    }
  }
})
export let { changeName } = user.actions
let tabTitle = createSlice({
  name: 'tabTitle',
  initialState: 'Tab',
  reducers: {
    handleTabTitle(state) {
      return 'john ' + state
    }
  }
})
export let { handleTabTitle } = user.actions
let tabComponent = createSlice({
  name: 'tabComponent',
  initialState: 'Login',
  reducers: {
    handleTabComponent(state) {
      return 'john ' + state
    }
  }
})
export let { handleTabComponent } = user.actions
// state등록해주는부분
export default configureStore({
  // {작명:createSlice만든거.reducer} 사용
  reducer: {
    user: user.reducer,
    tabTitle: tabTitle.reducer,
    tabComponent: tabComponent.reducer
  }
})
//