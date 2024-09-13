import { useState } from 'react';

const AddTodo = ({ addTodo }) => {
    const [title, setTitle] = useState('');
    const [description, setDescription] = useState('');

    const handleSubmit = (e) => {
        e.preventDefault();
        addTodo(title, description);
        setTitle('');
        setDescription('');
    };

    return (
        <div className="flex justify-center px-2 pt-4 pb-4 bg-gray-800">
          <form onSubmit={handleSubmit} className="bg-white  shadow-md rounded-lg p-4  flex space-x-3 items-center lg:max-w-5xl w-full">
            <input
              type="text"
              placeholder="Title"
              value={title}
              className="p-2 rounded-md border border-gray-300 focus:outline-none focus:ring-2 focus:ring-blue-500 transition w-1/3"
              onChange={(e) => setTitle(e.target.value)}
            />
            
            <input
              type="text"
              placeholder="Description"
              value={description}
              className="p-2 rounded-md border border-gray-300 focus:outline-none focus:ring-2 focus:ring-blue-500 transition w-1/3"
              onChange={(e) => setDescription(e.target.value)}
            />
      
            <button
              className="bg-green-600 hover:bg-green-700 text-white p-2 rounded-md transition focus:outline-none focus:ring-2 focus:ring-green-500 w-1/4"
              type="submit"
            >
              Add
            </button>
          </form>
        </div>
      );
      
      
};

export default AddTodo;
