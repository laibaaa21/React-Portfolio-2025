import React, { createContext, useState, useContext, useEffect } from 'react';

// Create a context for theme management
export const ThemeContext = createContext();

// Create a custom hook to use the theme context
export const useTheme = () => useContext(ThemeContext);

// Create a provider component
export const ThemeProvider = ({ children }) => {
  // Check if user previously set a theme preference
  const getInitialTheme = () => {
    const savedTheme = localStorage.getItem('theme');

    // Check user's saved preference first
    if (savedTheme) {
      return savedTheme;
    }

    // Otherwise check for system preference
    if (window.matchMedia && window.matchMedia('(prefers-color-scheme: dark)').matches) {
      return 'dark';
    }

    // Default to light theme
    return 'light';
  };

  const [theme, setTheme] = useState(getInitialTheme);

  // Toggle between light and dark themes
  const toggleTheme = () => {
    setTheme(prevTheme => {
      const newTheme = prevTheme === 'light' ? 'dark' : 'light';
      localStorage.setItem('theme', newTheme);
      return newTheme;
    });
  };

  // Apply theme to the document when it changes
  useEffect(() => {
    // Set data-theme attribute on document element
    document.documentElement.setAttribute('data-theme', theme);

    // Also add a class to the body for broader compatibility
    if (theme === 'dark') {
      document.body.classList.add('dark-theme');
      document.body.classList.remove('light-theme');
    } else {
      document.body.classList.add('light-theme');
      document.body.classList.remove('dark-theme');
    }

    // Force a repaint to ensure all styles are immediately applied
    const bodyStyles = window.getComputedStyle(document.body);
    document.body.style.backgroundColor = bodyStyles.backgroundColor;
  }, [theme]);

  // Create the value object to be provided by the context
  const value = {
    theme,
    toggleTheme
  };

  return (
    <ThemeContext.Provider value={value}>
      {children}
    </ThemeContext.Provider>
  );
}; 