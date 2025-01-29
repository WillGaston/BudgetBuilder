"use client"

import * as React from 'react';
import TransactionsTable from "@/components/Table";
import Popup from "@/components/AddTransaction";

export default function Transactions({  }) {
  const [popup, setPopup] = React.useState(false);
  return (
    <div className="flex flex-col w-screen bg-white">
      <div className='flex px-4 py-4'>
        <button 
          onClick={() => setPopup(!popup)}
          className='bg-transparent text-black hover:bg-lime-600 hover:text-white font-bold py-2 px-4 rounded-full border border-lime-600 hover:border-transparent'>
          Add Transaction
        </button>
      </div>
      <Popup trigger={popup} setTrigger={setPopup}>
      </Popup>
      <div className='flex m-3'>
        <TransactionsTable>

        </TransactionsTable>
      </div>
    </div>
  )
}