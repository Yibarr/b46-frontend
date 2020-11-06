import React from 'react'
import {
  priceFormat
} from '../../pipes/index.js'

const PriceList = ({ prices }) => {
  return (
    <React.Fragment>
      <ul>
        {
          prices.map((item, itemIndex) => {
            return (
              <li key={`item_${itemIndex}`}>
                { item.item}: { priceFormat(item.price) }
              </li>
            )
          })
        }
      </ul>
    </React.Fragment>
  )
}
export default PriceList

