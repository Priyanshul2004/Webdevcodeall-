import React, { useState } from 'react';

const Home = () => {
  const [inputs, setInputs] = useState({
    name: "",
    email: ""
  });

  const [table, setTable] = useState([]);
  const [editClick, setEditClick] = useState(false);
  const [editIdx, setEditIdx] = useState(null);
  const [errors, setErrors] = useState({
    name: "",
    email: ""
  });

  const handleChange = (e) => {
    setInputs({
      ...inputs,
      [e.target.name]: e.target.value,
    });
  };

  const validateInputs = () => {
    let valid = true;
    let errors = {};

    if (!inputs.name) {
      valid = false;
      errors.name = "Name is required.";
    }

    if (!inputs.email) {
      valid = false;
      errors.email = "Email is required.";
    }

    setErrors(errors);
    return valid;
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    if (!validateInputs()) {
      return;
    }

    if (editClick) {
      const updatedTable = table.map((item, index) =>
        index === editIdx ? inputs : item
      );
      setTable(updatedTable);
      setEditClick(false);
      setEditIdx(null);
    } else {
      setTable([...table, inputs]);
    }
    // Clear inputs after submit
    setInputs({
      name: "",
      email: ""
    });
  };

  const handleDelete = (index) => {
    const filteredData = table.filter((item, i) => i !== index);
    setTable(filteredData);
  };

  const handleEdit = (index) => {
    const itemToEdit = table[index];
    console.log("itemToEdit", itemToEdit);
    setInputs({ name: itemToEdit.name, email: itemToEdit.email });
    setEditClick(true);
    setEditIdx(index);
  };

  return (
    <div className='min-h-screen bg-gray-200'>
      <h1 className='text-center text-3xl font-bold my-6'>TODO APP</h1>
      <div className='bg-white shadow-md rounded-lg max-w-lg p-6 m-auto'>
        <form onSubmit={handleSubmit}>
          <div className='flex flex-col mb-4'>
            <label className='mb-2 font-semibold'>Name</label>
            <input
              name="name"
              value={inputs.name}
              onChange={handleChange}
              className='p-2 border rounded-md'
            />
            {errors.name && <span className='text-red-500'>{errors.name}</span>}
          </div>
          <div className='flex flex-col mb-4'>
            <label className='mb-2 font-semibold'>Email</label>
            <input
              name="email"
              value={inputs.email}
              onChange={handleChange}
              className='p-2 border rounded-md'
            />
            {errors.email && <span className='text-red-500'>{errors.email}</span>}
          </div>
          <button type='submit' className='w-full bg-blue-500 text-white p-2 rounded-md'>
            {editClick ? "Update" : "Add"}
          </button>
        </form>
      </div>
      <table className='w-full text-center mt-10'>
        <thead>
          <tr>
            <th className='py-2'>Name</th>
            <th className='py-2'>Email</th>
            <th className='py-2'>Actions</th>
          </tr>
        </thead>
        <tbody className='bg-white'>
          {table.map((item, index) => (
            <tr key={index} className='border-t'>
              <td className='py-2'>{item.name}</td>
              <td className='py-2'>{item.email}</td>
              <td className='py-2'>
                <div className='flex justify-center gap-4'>
                  <button onClick={() => handleEdit(index)} className='bg-yellow-500 text-white px-4 py-2 rounded-md'>
                    Edit
                  </button>
                  <button onClick={() => handleDelete(index)} className='bg-red-500 text-white px-4 py-2 rounded-md'>
                    Delete
                  </button>
                </div>
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};

export default Home;
