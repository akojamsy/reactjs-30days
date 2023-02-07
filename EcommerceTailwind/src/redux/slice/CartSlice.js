import { createSlice } from "@reduxjs/toolkit"
import { toast } from "react-hot-toast"

const initialState = {
    cartState:false,
    cartItems: localStorage.getItem('cart')? JSON.parse(localStorage.getItem('cart')) : [],
}

const cartSlice = createSlice({
    name: 'cart',
    initialState,
    reducers: {
      setOpenCart(state, action) {
        state.cartState = action.payload.cartState
    },
    setCloseCart(state, action) {
          state.cartState = action.payload.cartState
      },
    setCartItems(state, action) {
        const itemIndex  = state.cartItems.findIndex((item)=> item.id === action.payload.id)
        if(itemIndex >= 0){
          state.cartItems[itemIndex].itemQuantity += 1
          toast.success(`Item Quantity Increased`)
        }else{
          const temp = {...action.payload, itemQuantity: 1}
          state.cartItems.push(temp);
          toast.success(`${action?.payload?.title} is added to cart`)
        }
        localStorage.setItem('cart', JSON.stringify(state.cartItems))
      },
    },
  })
  
  // Extract the action creators object and the reducer then export
  const { actions, reducer } = cartSlice
  export const { setOpenCart, setCloseCart, setCartItems} = actions
  export let selectedState = (state) => state.cart
  export default reducer