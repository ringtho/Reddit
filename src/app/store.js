import { configureStore } from "@reduxjs/toolkit"
import { postsApi } from "../api/services/postsData"
import postsReducer from '../api/features/postsSlice'

const store = configureStore({
  reducer: {
    [postsApi.reducerPath]: postsApi.reducer,
    postsData: postsReducer,
  },
  middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware().concat(postsApi.middleware),
})

export default store