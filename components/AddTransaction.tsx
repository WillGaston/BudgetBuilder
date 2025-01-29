import React, { useState } from 'react';
/* import request from 'sync-request-curl';

const port = '49153';
const url = 'http://127.0.0.1';

const SERVER_URL = `${url}:${port}`;
const TIMEOUT_MS = 10 * 1000; */

export default function Popup(props) {
  const [productValue, setProductValue] = useState('');
  const [companyValue, setCompanyValue] = useState('');
  const [categoryValue, setCategoryValue] = useState('');
  const [dateValue, setDateValue] = useState('');
  const [amountValue, setAmountValue] = useState('');

  const handleProductChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    setProductValue(event.target.value);
  };

  const handleCompanyChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    setCompanyValue(event.target.value);
  };

  const handleDateChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    setDateValue(event.target.value);
  };

  const handleCategoryChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    setCategoryValue(event.target.value);
  };

  const handleAmountChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    setAmountValue(event.target.value);
  };

  return (props.trigger) ? (
    <div className='bg-lime-800 bg-opacity-40 fixed inset-0 flex justify-center items-center'>
      <div className='flex flex-col justify-center items-center bg-white outline outline-green-500 rounded-lg'>
      <span className='flex text-black m-5'>Add a new transaction.</span>

      <span className='text-black justify-left'>Product Name:</span>
      <input
        id="userInput"
        type="text"
        value={productValue}
        onChange={handleProductChange}
        className="border border-lime-700 focus:outline focus:outline-2 focus:outline-lime-400 flex rounded-lg p-2 text-black m-2"
        placeholder="Type something..."
      />

      <span className='text-black justify-left'>Company Name:</span>
      <input
        id="userInput"
        type="text"
        value={companyValue}
        onChange={handleCompanyChange}
        className="border border-lime-700 focus:outline focus:outline-2 focus:outline-lime-400 flex rounded-lg p-2 text-black m-2"
        placeholder="Type something..."
      />

      <span className='text-black justify-left'>Category Name:</span>
      <select 
        name="category" 
        id="category-select" 
        className="border border-lime-700 focus:outline focus:outline-2 focus:outline-lime-400 flex rounded-lg p-2 text-black m-2"
        value={categoryValue}
        onChange={handleCategoryChange}
        >
        <option value=""> -- Choose a category --</option>
        <option value="food/beverage">Food/Beverage</option>
        <option value="entertainment">Entertainment</option>
        <option value="lifestyle">Lifestyle</option>
        <option value="travel">Travel</option>
        <option value="household">Household</option>
        <option value="education">Education</option>
        <option value="miscellaneous">Miscellaneous</option>
      </select>

      <span className='text-black justify-left'>Date:</span>
      <input
        id="userInput"
        type="date"
        value={dateValue}
        onChange={handleDateChange}
        className="border border-lime-700 focus:outline focus:outline-2 focus:outline-lime-400 flex rounded-lg p-2 text-black m-2"
        placeholder="Type something..."
      />

      <span className='text-black justify-left'>Amount:</span>

      <div className="relative flex flex-row">
        <span className="flex inset-y-0 left-0 flex items-center pl-3 text-gray-500">$</span>
        <input
        id="userInput"
        type="number"
        value={amountValue}
        onChange={handleAmountChange}
        className="border border-lime-700 focus:outline focus:outline-2 focus:outline-lime-400 flex rounded-lg p-2 text-black m-2"
        placeholder="Type something..."
      />
      </div>


      <div className='flex flex-row relative z-10'>
        <div className='mt-3 mr-2 mb-3'>
          <button
            className='text-lime-700 w-24 hover:text-white font-mono bg-transparent hover:bg-lime-700 border border-lime-700 p-1 rounded'
            onClick={() => {
              /* request('POST', SERVER_URL + '/v1/transaction/create',
                  {
                    json: {
                      product: productValue,
                      company: companyValue,
                      category: categoryValue,
                      date: dateValue,
                      amount: amountValue,
                    },
                    timeout: TIMEOUT_MS
                  }); */
              props.setTrigger(false);
              setProductValue('');
              setCompanyValue('');
              setCategoryValue('');
              setDateValue('');
              setAmountValue('');
            }}>
            Add
          </button>
        </div>
        <div className='mt-3 ml-2 mb-3'>
          <button
            className='text-red-700 w-24 hover:text-white font-mono bg-transparent hover:bg-red-700 border border-red-700 p-1 rounded'
            onClick={() => {
              props.setTrigger(false);
              setProductValue('');
              setCompanyValue('');
              setCategoryValue('');
              setDateValue('');
              setAmountValue('');
              }}>
            Discard
          </button>
        </div>
      </div>

      </div>
    </div>
  ) : "";
}