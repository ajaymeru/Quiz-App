import React from 'react';
import CategoryForm from './CategoryForm';
import Quiz from './Quiz';
import './index.css';

const App = () => {
  return (
    <div className="App">
      <h1>Quiz App</h1>
      <CategoryForm />
      <Quiz />
    </div>
  );
};

export default App;
