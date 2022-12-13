import React from "react";

function MonthTable(props) {
  console.log("MonthTable", props);
  return (
    <div>
      <h2>Month Table</h2>
      <table>
        <tr>
          <th>Month</th>
          <th>Amount</th>
        </tr>
        {props.list.map((item) => (
          <tr key={item.id}>
            <td>{item.month}</td>
            <td>{item.amount}</td>
          </tr>
        ))}
      </table>
    </div>
  );
}

export default MonthTable;
