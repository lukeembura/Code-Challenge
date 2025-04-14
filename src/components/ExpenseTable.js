import React from 'react';

function ExpenseTable({ expenses, deleteExpense }) {
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
        {expenses.map((expense) => (
          <tr key={expense.id}>
            <td>{expense.expenseName}</td>
            <td>{expense.description}</td>
            <td>{expense.amount}</td>
            <td>{expense.category}</td>
            <td>{expense.date}</td>
            <td>
              <button onClick={() => deleteExpense(expense.id)}>Delete</button>
            </td>
          </tr>
        ))}
      </tbody>
    </table>
  );
}

export default ExpenseTable;