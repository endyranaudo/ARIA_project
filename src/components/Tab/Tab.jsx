import React from 'react';
import './Tab.css';

const Tab = () => {
  return (
    <div className="tab-all">
      <table className="main-table" role="table" aria-rowcount="3">
        <tr role="row">
          <th role="columnheader">Firstname</th>
          <th role="columnheader">Lastname</th>
          <th role="columnheader">Age</th>
        </tr>
        <tr role="row" aria-rowindex="1">
          <td role="cell">Jill</td>
          <td role="cell">Smith</td>
          <td role="cell">50</td>
        </tr>
        <tr role="row" aria-rowindex="2">
          <td role="cell">Eve</td>
          <td role="cell">Jackson</td>
          <td role="cell">94</td>
        </tr>
        <tr role="row" aria-rowindex="3">
          <td role="cell">John</td>
          <td role="cell">Doe</td>
          <td role="cell">80</td>
        </tr>
      </table>
    </div>
  );
};

export default Tab;
