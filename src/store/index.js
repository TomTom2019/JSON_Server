import {configureStore} from '@reduxjs/toolkit'
import PostsReducer from './reducers/posts.js'
import UsersReducer from './reducers/users.js'



export const store = configureStore({
	reducer:{
      posts:PostsReducer,
      users:UsersReducer
	}
})
