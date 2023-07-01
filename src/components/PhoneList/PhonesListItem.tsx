import './PhonesListItem.css'
import React from 'react'

interface Props {
  id: number
  title: string
  description: string
  price: number
  addToSum: any
}

const PhoneListItem = ({ id, title, description, price, addToSum }: Props): any => {
  return (
    <div className='phone-list-item' key={id}>
        <h2>{title}</h2>
        <div>{description}</div>
        <div>EUR {price}</div>
        <button onClick={() => addToSum(id)}>Buy</button>
    </div>
  )
}

// const PhoneListItem = (props: Props) => {
//   return (
//     <div className='phone-list-item'>
//         <h2>{props.title}</h2>
//         <div>{props.description}</div>
//         <div>EUR {props.price}</div>
//         <button>Buy</button>
//     </div>
//   )
// }
export default PhoneListItem
