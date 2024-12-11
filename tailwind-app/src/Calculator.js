import React, { useState } from 'react';

function Calculator() {
  const [input, setInput] = useState('');
  
  const handleClick = (value) => {
    setInput(input + value);
  };

  const clearInput = () => {
    setInput('');
  };

  const calculateResult = () => {
    try {
      setInput(eval(input).toString()); 
    } catch (error) {
      setInput('Error');
    }
  };

  return (
    <div className="flex flex-col items-center justify-center min-h-screen bg-gray-100">
      <div className="bg-gray-600 p-6 rounded shadow-md w-80 text-white">
        <div className="mb-4 text-xl font-semibold text-center">{input || '0'}</div>
        <div className="grid grid-cols-4 gap-2">
          {['7', '8', '9', '/'].map((value) => (
            <button
              key={value}
              onClick={() => handleClick(value)}
              className="bg-gray-200 text-black p-4 rounded hover:bg-gray-300"
            >
              {value}
            </button>
          ))}
          {['4', '5', '6', '*'].map((value) => (
            <button
              key={value}
              onClick={() => handleClick(value)}
              className="bg-gray-200 text-black p-4 rounded hover:bg-gray-300"
            >
              {value}
            </button>
          ))}
          {['1', '2', '3', '-'].map((value) => (
            <button
              key={value}
              onClick={() => handleClick(value)}
              className="bg-gray-200 text-black p-4 rounded hover:bg-gray-300"
            >
              {value}
            </button>
          ))}
          {['0', '.', '=', '+'].map((value) => (
            <button
              key={value}
              onClick={() => (value === '=' ? calculateResult() : handleClick(value))}
              className="bg-gray-200 text-black p-4 rounded hover:bg-gray-300"
            >
              {value}
            </button>
          ))}
          <button
            onClick={clearInput}
            className="col-span-4 bg-red-400 text-white p-4 rounded hover:bg-red-500"
          >
            Clear
          </button>
        </div>
      </div>
    </div>
  );
}

export default Calculator;
