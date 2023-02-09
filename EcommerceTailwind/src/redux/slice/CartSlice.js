import { createSlice } from "@reduxjs/toolkit"
import { toast } from "react-hot-toast"

const initialState = {
    cartState:false,
    cartItems: localStorage.getItem('cart')? JSON.parse(localStorage.getItem('cart')) : [],
    cartTotalAmount: 0,
    cartTotalQuantity: 0,
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
        increaseQty(state, action) {
          const itemIndex  = state.cartItems.findIndex((item)=> item.id === action.payload.id)
          if(itemIndex >= 0){
            state.cartItems[itemIndex].itemQuantity += 1
            toast.success(`Item Quantity Increased`)
          }
          localStorage.setItem('cart', JSON.stringify(state.cartItems))
        },
        decreaseQty(state, action) {
          const itemIndex  = state.cartItems.findIndex((item)=> item.id === action.payload.id)
          if(itemIndex >= 0){
            state.cartItems[itemIndex].itemQuantity > 1 &&  (state.cartItems[itemIndex].itemQuantity -= 1)
            state.cartItems[itemIndex].itemQuantity === 1 ? toast.error(`Item cannot be reduced further, use delete icon to remove item.`) : toast.success(`Item Quantity Decreased`)
          }
          localStorage.setItem('cart', JSON.stringify(state.cartItems))
        },
        removeItemFromCart(state, {payload}){
          const currentCartItems = state.cartItems.filter(item => item.id !== payload.id)
          state.cartItems = currentCartItems

          localStorage.setItem('cart', JSON.stringify(state.cartItems))
          toast.success(`${payload.title} has been removed from Cart`)
        },
        clearItems(state){
          state.cartItems = []
          localStorage.setItem('cart', JSON.stringify(state.cartItems))
          toast.success(`${payload.title} Cart cleared.`)
        },
        getTotalItems(state, action){
          let {totalQty, totalAmount} = state.cartItems.reduce((cartTotal, cartItem)=>{
            let {price, itemQuantity} = cartItem;
            const totalPrice = price * itemQuantity
            cartTotal.totalAmount += totalPrice
            cartTotal.totalQty += itemQuantity
            return cartTotal;
          }, {totalQty: 0, totalAmount: 0})

          state.cartTotalAmount = totalAmount;
          state.cartTotalQuantity = totalQty;

        },
      },
  })
  
  // Extract the action creators object and the reducer then export
  const { actions, reducer } = cartSlice
  export const { setOpenCart, setCloseCart, setCartItems, removeItemFromCart, increaseQty, decreaseQty, clearItems, getTotalItems} = actions
  export let selectedState = (state) => state.cart
  export default reducer