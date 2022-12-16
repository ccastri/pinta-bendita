import CartItem from "./CartItem";
import cartItems from '../cartItems'
import { useDispatch, useSelector } from "react-redux";
import { RootState } from "../store";

const CartContainer = () => {
    const {cartItems, totalQuantity, amount} = useSelector((state: RootState) => state.cart)
    // const dispatch = useDispatch() 
    if (amount <1){

        return (
            <section className="cart">
        {/* cart header */}
        <header>
            <h2> Your Bag</h2>
            <h4>Is currently empty</h4>
        </header>
    </section>
  )
}
return(
    <section className="cart">
    {/* cart header */}
    <header>
        <h2> Your Bag</h2>        
    </header>
        <div>
            {cartItems.map((item: any)=> ( 
                <CartItem  key={item.id} {...item}/>
               
                )

        
        )}</div>

        <footer>
            <hr />
            <div>
                <h4>
                    {totalQuantity}
                </h4>
            </div>
        </footer>
</section>
)
}

export default CartContainer