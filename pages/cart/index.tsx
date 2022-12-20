import { useDispatch, useSelector } from 'react-redux'
import CartContainer from '../../components/cartContainer'
import { calculateTotals } from '../../slices/cart/cartSlice'
import { RootState } from '../../store'
import {useEffect} from 'react'
import Header from '../../components/Header'
// import React from '../../components/cartContainer'


const Index = () => {
  const dispatch = useDispatch()
  const {cartItems} = useSelector((state: RootState) => state.cart)

  useEffect(() => {
    dispatch(calculateTotals())
  }, [cartItems, dispatch])
  return (
    <div>
      <Header/>
      <CartContainer/>
    </div>
  )
}

export default Index
