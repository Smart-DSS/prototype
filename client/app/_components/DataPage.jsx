import React from "react";

const DataPage = ({ data }) => {
  return (
    <div>
      <h1>Data fetched from flask</h1>
      <ul>
        {data?.map((item, index) => (
          <li key={index}>
            <ul>
              <strong>{item.timestamp_ist}</strong>
              <li>Exit: {item.Exit}</li>
              <li>Enter: {item.Enter}</li>
              <li>Total: {item.total}</li>
            </ul>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default DataPage;
