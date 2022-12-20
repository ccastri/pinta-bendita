import { configureStore } from '@reduxjs/toolkit'
import modalReducer from './slices/modal/modalSlice'
import authReducer from './slices/auth/authSlice'
import cartReducer from './slices/cart/cartSlice'

// ...
export const store = configureStore({
  reducer: {
    modal: modalReducer,
    auth: authReducer,
    cart: cartReducer,
  },
})
// Infer The 'RootState' and 'AppDispatch' types from the store itself
export type RootState = ReturnType<typeof store.getState>
// Inferred type: {posts: PostsState, comments: CommentsState, users:UsersState}
export type AppDispatch = typeof store.dispatch
