import {createSlice} from '@reduxjs/toolkit'

const initialState = {
    products: []
}

// actions related to cart added here, it's related to redux
export const cartSlice = createSlice({
    name: 'cart',
    initialState,
    reducers: {
        addProduct: (state, action) => {
            const product = state.products.find((product) => product._id === action.payload._id)
            if(product){
                product.quantity += action.payload.quantity
            } else {
                state.products.push(action.payload)
            }
        },
        removeProduct: (state, action) => {
            state.products = state.products.filter((product) => product._id !== action.payload._id)
        },
        // incProduct: (state, action) => {
        //     const product = state.products.find((product) => product._id === action.payload._id)
        //     if(product){
        //         product.quantity += action.payload.quantity
        //     } else {
        //         product.quantity += action.payload.quantity
        //     }
        // },
        // decProduct: (state, action) => {
        //     const product = state.products.find((product) => product._id === action.payload._id)
        //     if(product){
        //         product.quantity -= action.payload.quantity
        //     } else {
        //         state.products.push(action.payload)
        //     }
        // },
        incProduct: (state, action) => {
            const product = state.products.find((product) => product._id === action.payload._id)
            product.quantity += 1
        },
        decProduct: (state, action) => {
            const product = state.products.find((product) => product._id === action.payload._id)
            product.quantity -= 1
        },
        emptyCart: (state) => {
            state.products= []
        },
        
    }
})

export const {addProduct, removeProduct, emptyCart, toggleShowCart,  incProduct,  decProduct} = cartSlice.actions

export default cartSlice.reducer



