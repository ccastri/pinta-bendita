import CartItems from "./CartItem";
import { CartItem, CartItem2} from '../cartItems'
import { useDispatch, useSelector } from "react-redux";
import { AppDispatch, RootState } from "../store";
import { clearCart, getCartItems } from "../slices/cart/cartSlice";
import { useEffect, useState } from 'react'
import { PayloadAction } from "@reduxjs/toolkit";

const CartContainer = () => {
    const {cartItems, total, amount} = useSelector((state: RootState) => state.cart)
    const dispatch = useDispatch<AppDispatch>() 
    
// // {
// //     "id": 1,
// //     "title": "Fjallraven - Foldsack No. 1 Backpack, Fits 15 Laptops",
// //     "price": 109.95,
// //     "description": "Your perfect pack for everyday use and walks in the forest. Stash your laptop (up to 15 inches) in the padded sleeve, your everyday",
// //     "category": "men's clothing",
// //     "image": "https://fakestoreapi.com/img/81fPKd-2AYL._AC_SL1500_.jpg",
// //     "rating": {
// //       "rate": 3.9,
// //       "count": 120
// //     }
// interface MensClothes {
//     id: number,
//     title: string
//     price: number,
//     description: string,
//     category: string,
//     image: string,
//     rating:{
//         count: number,
//         rate: number
//     }
// }
// const [clothes, setClothes] = useState()

// useEffect(() => {
//     const FetchClothes = async () =>{
        
//             const result = await dispatch(getCartItems())
//             setClothes(result) 
            
//         }
//         }, [])

    if (amount <1){ 
        return (
            <section className="cart">
        {/* cart header */}
        <header>
            <h2> Your Bag</h2>
            <h4>Is currently empty</h4>
        </header>
    </section>
)}

return(
    <section className="cart">
    {/* cart header */}
        <header>
            <h2> Your Bag</h2>        
        </header>
        
        <div>
            {cartItems.map((item: CartItem2)=> ( 
                <CartItems  key={item.id} {...item}/>
            )
        )}
        </div>
        <footer>
            <hr />
            <div>
                <h4>
                    {total}
                </h4>
            </div>
            <button className=" cursor-pointer w-5" onClick={()=>dispatch(clearCart())}> Clear</button>
        </footer>
</section>
)
}

export default CartContainer