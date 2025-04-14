import React from 'react';

function ExpenseTable({ expenses }) {
  return (
    <table>
      <thead>
        <tr>
          <th>Expense Name</th>
          <th>Description</th>
          <th>Amount</th>
          <th>Category</th>
          <th>Date</th>
          <th>Delete</th>
        </tr>
      </thead>
      <tbody>
        {expenses.map((expense, index) => (
          <tr key={index}>
            <td>{expense.expenseName}</td>
            <td>{expense.description}</td>
            <td>{expense.amount}</td>
            <td>{expense.category}</td>
            <td>{expense.date}</td>
            <td>
              <button onClick={() => expense.deleteExpense(index)}>Delete</button>
            </td>
          </tr>
        ))}
      </tbody>
    </table>
  );
}

export default ExpenseTable;