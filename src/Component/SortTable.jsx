import React from "react";

function SortTable(props) {
  console.log("SortTable", props);
  return (
    <div>
      <h2>Sort Table</h2>
      <table>
        <tr>
          <th>Date</th>
          <th>Amount</th>
        </tr>
        {props.list.map((item) => (
          <tr key={item.id}>
            <td>{item.date}</td>
            <td>{item.amount}</td>
          </tr>
        ))}
      </table>
    </div>
  );
}

export default SortTable;
