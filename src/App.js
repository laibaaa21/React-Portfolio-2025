import React from 'react';
import './App.css';
import { PageTitleProvider } from './context/PageTitleContext';
import { ThemeProvider } from './context/ThemeContext';
import { AuthProvider } from './context/AuthContext';
import AppRouter from './router/index';

const App = () => {
  return (
    <ThemeProvider>
      <PageTitleProvider>
        <AuthProvider>
          <div className="App">
            <AppRouter />
          </div>
        </AuthProvider>
      </PageTitleProvider>
    </ThemeProvider>
  );
}

export default App;
