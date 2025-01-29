import React, { useState } from 'react';
import { createTransaction } from '@/backend-wrappers'

export default function Popup(props) {
  const [productValue, setProductValue] = useState('');
  const [companyValue, setCompanyValue] = useState('');
  const [categoryValue, setCategoryValue] = useState('');
  const [dateValue, setDateValue] = useState('');
  const [amountValue, setAmountValue] = useState('');
  const [typeValue, setTypeValue] = useState('');

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

  const handleAmountChange = (event: React.ChangeEven8t<HTMLInputElement>) => {
    setAmountValue(event.target.value);
  };

  const handleTypeChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    setTypeValue(event.target.value);
  };

  return (props.trigger) ? (
    <div className='bg-lime-800 bg-opacity-40 inset-0 flex justify-center items-center absolute z-10'>
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
        <option value="Food/Beverage">Food/Beverage</option>
        <option value="Entertainment">Entertainment</option>
        <option value="Lifestyle">Lifestyle</option>
        <option value="Travel">Travel</option>
        <option value="Household">Household</option>
        <option value="Education">Education</option>
        <option value="Miscellaneous">Miscellaneous</option>
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

      <span className='text-black justify-left'>Transaction Type:</span>
      <select 
        name="type" 
        id="type-select" 
        className="border border-lime-700 focus:outline focus:outline-2 focus:outline-lime-400 flex rounded-lg p-2 text-black m-2"
        value={typeValue}
        onChange={handleTypeChange}
        >
        <option value=""> -- Choose a type --</option>
        <option value="Income">Income</option>
        <option value="Expense">Expense</option>
      </select>

      <div className='flex flex-row'>

        <div className='flex mt-3 mr-2 mb-3'>
            <button
              className='text-lime-700 w-24 hover:text-white font-mono bg-transparent hover:bg-lime-700 border border-lime-700 p-1 rounded'
              onClick={() => {
                createTransaction(productValue, companyValue, categoryValue, dateValue, amountValue, typeValue);
                props.setTrigger(false);
                setProductValue('');
                setCompanyValue('');
                setCategoryValue('');
                setDateValue('');
                setAmountValue('');
                setTypeValue('');
              }}>
              Add
            </button>
        </div>

        <div className='flex mt-3 mr-2 mb-3'>
            <button
              className='text-red-700 w-24 hover:text-white font-mono bg-transparent hover:bg-red-700 border border-red-700 p-1 rounded'
              onClick={() => {
                props.setTrigger(false);
                setProductValue('');
                setCompanyValue('');
                setCategoryValue('');
                setDateValue('');
                setAmountValue('');
                setTypeValue('');
              }}>
              Discard
            </button>
        </div>

      </div>

      </div>
    </div>
  ) : "";
}