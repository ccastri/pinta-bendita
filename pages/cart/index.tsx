import { useDispatch, useSelector } from 'react-redux'
import CartContainer from '../../components/cartContainer'
import { calculateTotals, CartState, getCartItems } from '../../slices/cart/cartSlice'
import { AppDispatch, RootState } from '../../store'
import {useEffect, useState} from 'react'
import Header from '../../components/Header'
import axios from 'axios'
// import React from '../../components/cartContainer'
const url = `https://fakestoreapi.com/products/category/men's clothing`

const Index = () => {
  
  const dispatch = useDispatch<AppDispatch>()
  const {cartItems} = useSelector((state: RootState) => state.cart)


  useEffect(() => {
    dispatch(calculateTotals())
  }, [cartItems, dispatch])

  useEffect(() => {
    dispatch(getCartItems())
  }, [dispatch])

  return (
    <div>
      <Header/>
      <CartContainer/>
    </div>
  )
}

export default Index
