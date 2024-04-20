import React, { useState } from 'react';
import { usePostTodoMutation } from '../store/service/endpints/todo.endpint';

const FormComponent = ({refetchHandel}) => {
  const [inputValue, setInputValue] = useState('');
  const [fun,data]=usePostTodoMutation()
//   console.log(data)

  const handleSubmit =async (e) => {
    e.preventDefault();
    setInputValue('');
    await fun({
        text:inputValue
    })
    refetchHandel()
  };

  return (
    <form onSubmit={handleSubmit} className="max-w-md mx-auto flex gap-2 items-center">
      <input
        type="text"
        value={inputValue}
        onChange={(e) => setInputValue(e.target.value)}
        className="w-full border border-gray-300 rounded-md px-3 py-2 focus:outline-none focus:border-blue-500"
        placeholder="Enter something..."
      />
      <button
        type="submit"
        className="px-4 py-2 bg-blue-500 text-white rounded-md hover:bg-blue-600 focus:outline-none focus:bg-blue-600"
      >
        Submit
      </button>
    </form>
  );
};

export default FormComponent;
