import React, { useState } from 'react'
import PhonesList from '../PhoneList/PhonesList'
import './main.css'
import phonesArray from '../../models/phonesArray'

const Main = (): any => {
  const [curPrice, setCurPrice] = useState<number>(1)
  const [orderList] = useState<number[]>([])
  const [updateFlag, setUpdateFlag] = useState<boolean>(false)
  const addToOrderList = (id: number): void => {
    orderList.push(id)
    setUpdateFlag(!updateFlag)
  }
  const changePrice = (c: number): void => {
    setCurPrice(() => c)
  }
  let totalSum = 0
  orderList.forEach((order) => {
    phonesArray.forEach((phone) => {
      if (phone.id === order) {
        totalSum += phone.price * curPrice
      }
    })
  })
  return (
    <div className='task-block'>
        <h1>Our shop page</h1>
        <div className='button-list'>
            <div>{curPrice}</div>
            <button key="1" onClick={() => { changePrice(38) }}>UAH</button>
            <button key="2" onClick={() => { changePrice(1) }}>USD</button>
            <button key="3" onClick={() => { changePrice(0.9) }}>EUR</button>
            <button key="4" onClick={() => { changePrice(4) }}>PLN</button>
        </div>
        <PhonesList rate={curPrice} addToSum={addToOrderList} />
        <div>total: {totalSum}</div>
    </div>
  )
}
export default Main
