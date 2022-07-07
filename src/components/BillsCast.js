import React from 'react';
import BillCard from './BillCard';

export default function BillsCast({releaseBill, castBills}) {
  
  const theBillCast = castBills.map((bill) => {
    if (bill.cast === true)
    return <BillCard key={bill.id} bill={bill} onClick={releaseBill} />
  })

  return (
    <div className="ui segment inverted blue bill-cast">
      <div className="ui five column grid">
        <div className="row bill-cast-row">
        {theBillCast}
        </div>
      </div>
    </div>
  );
}

