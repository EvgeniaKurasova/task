import React from 'react'
import PhoneListItem from './PhonesListItem'
import phonesArray from '../../models/phonesArray'
import './PhonesList.css'

interface Props {
  rate: number
  addToSum: any
}

const PhoneList = ({ rate, addToSum }: Props): any =>
  (
    <div>
        <div className='phone-list'>
        {
        phonesArray.map(
          ({ id, title, description, price }): any => (
            <PhoneListItem
              id={id}
              key={id}
              title={title}
              description={description}
              price={price * rate}
              addToSum={addToSum}
            />
          )
        )
        }
        </div>
    </div>
  )
export default PhoneList
