import React from 'react';
import './App.css';
import { PageTitleProvider } from './context/PageTitleContext';
import { ThemeProvider } from './context/ThemeContext';
import AppRouter from './router';

const App = () => {
  return (
    <ThemeProvider>
      <PageTitleProvider>
        <div className="App">
          <AppRouter />
        </div>
      </PageTitleProvider>
    </ThemeProvider>
  );
}

export default App;
