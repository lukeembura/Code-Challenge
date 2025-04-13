import React from 'react';

function AddExpenseForm({ formData, handleInputChange, handleFormSubmit }) {
  return (
    <aside className="App-sidebar">
      <h2>Add Expense</h2>
      <form onSubmit={handleFormSubmit}>
        <input
          type="text"
          name="expenseName"
          placeholder="Enter expense name"
          value={formData.expenseName}
          onChange={handleInputChange}
          required
        />
        <input
          type="text"
          name="description"
          placeholder="Description"
          value={formData.description}
          onChange={handleInputChange}
          required
        />
        <input
          type="number"
          name="amount"
          placeholder="Amount"
          value={formData.amount}
          onChange={handleInputChange}
          required
        />
        <input
          type="text"
          name="category"
          placeholder="Enter expense category"
          value={formData.category}
          onChange={handleInputChange}
          required
        />
        <input
          type="date"
          name="date"
          value={formData.date}
          onChange={handleInputChange}
          required
        />
        <button type="submit">Submit</button>
      </form>
    </aside>
  );
}

export default AddExpenseForm;