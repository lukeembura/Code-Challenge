import React, { useState } from 'react';
import './App.css';
import Header from './components/Header';
import AddExpenseForm from './components/AddExpenseForm';
import ExpenseTable from './components/ExpenseTable';
import SearchBar from './components/SearchBar';

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

    setExpenses([...expenses, { ...formData, id: Date.now() }]); // Add a unique ID to each expense
    setFormData({ expenseName: '', description: '', amount: '', category: '', date: '' });
  };

  const handleSearchChange = (e) => {
    setSearchTerm(e.target.value.toLowerCase());
  };

  const deleteExpense = (id) => {
    setExpenses(expenses.filter((expense) => expense.id !== id)); // Remove the expense with the matching ID
  };

  const filteredExpenses = expenses.filter(
    (expense) =>
      expense.expenseName.toLowerCase().includes(searchTerm) ||
      expense.description.toLowerCase().includes(searchTerm) ||
      expense.category.toLowerCase().includes(searchTerm)
  );

  return (
    <div className="App">
      <Header />
      <div className="App-content">
        <p>Start taking control of your finances and life. Record, categorize, and analyze your spending.</p>
      </div>
      <div className="App-body">
        <AddExpenseForm
          formData={formData}
          handleInputChange={handleInputChange}
          handleFormSubmit={handleFormSubmit}
        />
        <main className="App-main">
          <SearchBar searchTerm={searchTerm} handleSearchChange={handleSearchChange} />
          <ExpenseTable expenses={filteredExpenses} deleteExpense={deleteExpense} />
        </main>
      </div>
    </div>
  );
}

export default App;

