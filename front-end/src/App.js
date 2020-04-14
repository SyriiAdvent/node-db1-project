import React, { useState, useEffect } from 'react';
import axios from 'axios'
import Customers from './components/customers/Customers'

function App() {
  const [customerData, setCustomerData] = useState([])

  useEffect(() => {
    axios('http://localhost:5000/api/customers')
      .then(customers => {
        setCustomerData(customers.data.data)
      })
      .then(err => console.log(`unable to retrieve customer data`, err))
  }, [])

  return (
    <div className="App">
      {/* <button onClick={() => console.log(customerData)}>log data</button> */}
      <Customers customers={customerData} />
    </div>
  );
}

export default App;
