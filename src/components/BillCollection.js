import React from 'react';
import BillCard from './BillCard';

export default function BillCollection({bills, castBill, goodbyeBill}) {
  
  const renderBills = bills.map((bill) => {
    return <BillCard 
    key={bill.id} 
    bill={bill} 
    onClick={castBill}
    goodbyeBill={goodbyeBill}/>
  })

  return (
    <div className="ui four column grid">
      <div className="row">
        {renderBills}
      </div>
    </div>
  );
}
