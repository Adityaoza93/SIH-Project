import React from "react";
import JsonData from "./Data/peopleNew.json";

function DisplayTable() {
  const DisplayData = JsonData.map((info) => {
    return (
      <tr>
        <td>{info._id}</td>
        <td>{info.uid}</td>
        <td>{info.university}</td>
        <td>{info.State}</td>
        <td>{info.approval}</td>
      </tr>
    );
  });

  return (
    
    <div>
      <table className="table table-striped">
        <thead>
          <tr>
            <th>ID</th>
            <th>UID</th>
            <th>University</th>
            <th>State</th>
            <th>Approval</th>
          </tr>
        </thead>
        <tbody>{DisplayData}</tbody>
      </table>
    </div>
  );
}

export default DisplayTable;
