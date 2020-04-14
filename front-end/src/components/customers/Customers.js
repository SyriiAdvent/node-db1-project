import React from 'react'
import CustomerCard from './CustomerCard'

const Customers = ({ customers }) => {
  return (
    <div>
      { customers.length > 0 ? customers.map(item => <CustomerCard customer={item} key={item.customer_id} />) : null }
    </div>
  )
}

export default Customers
