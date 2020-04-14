import React from 'react'

const CustomerCard = ({ customer }) => {
  return (
    <div>
      <h3>{customer.company_name}</h3>
    </div>
  )
}

export default CustomerCard
