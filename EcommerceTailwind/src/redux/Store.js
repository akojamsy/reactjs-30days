import { configureStore } from '@reduxjs/toolkit'
import cart from '../redux/slice/CartSlice'

const store = configureStore({
   reducer:{
    cart
   }
})

export default store