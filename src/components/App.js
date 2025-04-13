import React, { useState } from 'react';
import '../App.css';

function App() {
  const [expenses, setExpenses] = useState([]);
  const [formData, setFormData] = useState({ expenseName: '', description: '', amount: '', category: '', date: '' });
  const [searchTerm, setSearchTerm] = useState('');

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
  };

  const handleFormSubmit = (e) => {
    e.preventDefault();
    setExpenses([...expenses, formData]);
    setFormData({ expenseName: '', description: '', amount: '', category: '', date: '' });
  };

  const handleSearchChange = (e) => {
    setSearchTerm(e.target.value.toLowerCase());
  };

  const filteredExpenses = expenses.filter(
    (expense) =>
      expense.expenseName.toLowerCase().includes(searchTerm) ||
      expense.description.toLowerCase().includes(searchTerm) ||
      expense.category.toLowerCase().includes(searchTerm)
  );

  return (
    <div className="App">
      <header className="App-header">
        <h1>Expense Tracker</h1>
      </header>
      <div className="App-content">
        <p>Start taking control of your finances and life. Record, categorize, and analyze your spending.</p>
      </div>
      <div className="App-body">
        {/* Sidebar for Form */}
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
        {/* Main Section for Table */}
        <main className="App-main">
          <input
            type="text"
            placeholder="Search expenses..."
            value={searchTerm}
            onChange={handleSearchChange}
            className="search-bar"
          />
          <table>
            <thead>
              <tr>
                <th>Expense Name</th>
                <th>Description</th>
                <th>Amount</th>
                <th>Category</th>
                <th>Date</th>
              </tr>
            </thead>
            <tbody>
              {filteredExpenses.map((expense, index) => (
                <tr key={index}>
                  <td>{expense.expenseName}</td>
                  <td>{expense.description}</td>
                  <td>{expense.amount}</td>
                  <td>{expense.category}</td>
                  <td>{expense.date}</td>
                </tr>
              ))}
            </tbody>
          </table>
        </main>
      </div>
    </div>
  );
}

export default App;

