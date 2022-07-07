import React, {useState, useEffect} from 'react';
import BillCollection from './components/BillCollection';
import BillsCast from './components/BillsCast';

export default function App() {
  const [bills, setBills] = useState([])
 
  useEffect(() => {
    fetch('http://localhost:8002/bills')
    .then(res => res.json())
    .then((data) => setBills(data))
  }, [])

 // if bill is cast, add new class cast to original bill of true
  function castBill(bill){
    setBills(bills.map((b) => (bill.id === b.id ? {...b, cast: true} : b)))
  }
  // if a bill is no longe cast, set cast class to false
  function releaseBill(bill){
    setBills(bills.map((b) => 
    (b.id === bill.id ? {...b, cast: false} : b)))
  }

  function goodbyeBill(bill){
    const updateBills = bills.filter((b) => {
      if (b.id !== bill.id) {
        return false
      }
      return true
    })
    setBills(updateBills)
  }
  console.log(bills)
 

  return (
    <div>
      <BillsCast castBills={bills} releaseBill={releaseBill}/>
      <BillCollection goodbyeBill={goodbyeBill} bills={bills} castBill={castBill}/>
    </div>
  );
}
