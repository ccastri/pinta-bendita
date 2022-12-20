import CartItems from "./CartItem";
import cartItems, { CartItem} from '../cartItems'
import { useDispatch, useSelector } from "react-redux";
import { RootState } from "../store";
import { clearCart } from "../slices/cart/cartSlice";

const CartContainer = () => {
    const {cartItems, total, amount} = useSelector((state: RootState) => state.cart)
    const dispatch = useDispatch() 
    
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
            {cartItems.map((item: CartItem)=> ( 
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