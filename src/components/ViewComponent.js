import React from 'react';

const ViewComponent = ({ data, onClose }) => {
  return (
    <div>
      <h2>View Details</h2>
      {data ? (
        <div>
          <p>
            <strong>Name:</strong> {data.name}
          </p>
          <p>
            <strong>Email:</strong> {data.email}
          </p>
        </div>
      ) : (
        <p>No data to display.</p>
      )}
      <button onClick={onClose}>Close</button>
    </div>
  );
};

export default ViewComponent;
