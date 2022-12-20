import Image from "next/image"
import {  
  ChevronUpIcon,
  ChevronDownIcon,

} from '@heroicons/react/outline'
import { useDispatch, useSelector } from "react-redux"
import { RootState } from "../store"
import { clearCart, increase, decrease, remove } from "../slices/cart/cartSlice"
import { CartItem } from "../cartItems";


const CartItems = ({id, img, title, price, amount}: CartItem) => {
  // console.log(img);
  const dispatch = useDispatch()
  // const {amount} = useSelector((state: RootState) => state.cart)
  return (
    <div className='flex w-full justify-between'>
      <div className="w-20 ">
      <p className=" w-4">{id}</p>
      <h1>{title}</h1>
      <Image className="flex" src={`${img}`} alt="" width={50} height={50}></Image>
      <h2>{price}</h2>
      <h6>x{amount}</h6>
      </div> 
      <div className=" flex h-10 items-center my-auto flex-row-30 right-0">
        <button onClick={()=> {dispatch(increase({id}))}} className=" cursor-pointer w-5 "> <ChevronUpIcon/> </button>
        <p className="bg-white w-5" placeholder="0">{amount}</p>
        <button onClick={()=> {dispatch(decrease({id}))}} className=" cursor-pointer w-5"> <ChevronDownIcon/> </button>
        <button onClick={()=> {dispatch(remove(id))}} className=" cursor-pointer w-5"> Remove </button>
      </div>
    </div>    
  )}

export default CartItems