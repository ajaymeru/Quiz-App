import React from 'react';
import CategoryForm from './CategoryForm';
import Quiz from './Quiz';
import './index.css';
import logo from "./image.png"

const App = () => {
  return (
    <div className="App">
      <img src={logo} alt="" className='logo' />
      <CategoryForm />
      <Quiz />
    </div>
  );
};

export default App;
