import React from 'react';
import './App.css';
import { PageTitleProvider } from './context/PageTitleContext';
import AppRouter from './router';

const App = () => {
  return (
    <PageTitleProvider>
      <div className="App">
        <AppRouter />
      </div>
    </PageTitleProvider>
  );
}

export default App;
