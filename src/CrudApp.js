import React, { useState } from "react";

const CrudApp = () => {
  const [data, setData] = useState([]);
  const [inputValue, setInputValue] = useState("");
  const [editIndex, setEditIndex] = useState(null);

  const addData = () => {
    if (inputValue.trim() !== "") {
      if (editIndex !== null) {
        // Update existing data
        const updatedData = [...data];
        updatedData[editIndex] = inputValue;
        setData(updatedData);
        setEditIndex(null);
      } else {
        // Add new data
        setData([...data, inputValue]);
      }
      setInputValue("");
    }
  };

  const deleteData = (index) => {
    const updatedData = [...data];
    updatedData.splice(index, 1);
    setData(updatedData);
  };

  const editData = (index) => {
    const selectedData = data[index];
    setInputValue(selectedData);
    setEditIndex(index);
  };

  return (
    <div>
      <h1>CRUD App</h1>
      <input
        type="text"
        value={inputValue}
        onChange={(e) => setInputValue(e.target.value)}
      />
      <button onClick={addData}>{editIndex !== null ? "Update" : "Add"}</button>
      <ul>
        {data.map((item, index) => (
          <li key={index}>
            {item}
            <button onClick={() => deleteData(index)}>Delete</button>
            <button onClick={() => editData(index)}>Edit</button>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default CrudApp;
