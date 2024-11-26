import React, { useState } from 'react';
import FormComponent from './FormComponent';
import ViewComponent from './ViewComponent';

const TableWithForms = () => {
  const [data, setData] = useState([
    { id: 1, name: 'John Doe', email: 'john@example.com' },
    { id: 2, name: 'Jane Doe', email: 'jane@example.com' },
  ]);
  const [selectedData, setSelectedData] = useState(null);
  const [view, setView] = useState(null); // 'create', 'edit', or 'view'

  const handleCreate = () => {
    setSelectedData(null);
    setView('create');
  };

  const handleEdit = (item) => {
    setSelectedData(item);
    setView('edit');
  };

  const handleView = (item) => {
    setSelectedData(item);
    setView('view');
  };

  const handleSave = (formData) => {
    if (formData.id) {
      // Update existing data
      setData((prev) =>
        prev.map((item) => (item.id === formData.id ? formData : item))
      );
    } else {
      // Add new data
      setData((prev) => [...prev, { ...formData, id: Date.now() }]);
    }
    setView(null);
  };

  return (
    <div>
      <h1>Table with Forms</h1>
      {view ? (
        view === 'view' ? (
          <ViewComponent data={selectedData} onClose={() => setView(null)} />
        ) : (
          <FormComponent
            data={selectedData}
            onSave={handleSave}
            onClose={() => setView(null)}
          />
        )
      ) : (
        <>
          <button onClick={handleCreate}>Create</button>
          <table border="1" cellPadding="10">
            <thead>
              <tr>
                <th>Name</th>
                <th>Email</th>
                <th>Actions</th>
              </tr>
            </thead>
            <tbody>
              {data.map((item) => (
                <tr key={item.id}>
                  <td>{item.name}</td>
                  <td>{item.email}</td>
                  <td>
                    <button onClick={() => handleEdit(item)}>Edit</button>
                    <button onClick={() => handleView(item)}>View</button>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </>
      )}
    </div>
  );
};

export default TableWithForms;
