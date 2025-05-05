import React, { createContext, useState, useContext } from 'react';

// Create a context for the page title
export const PageTitleContext = createContext();

// Create a custom hook to use the page title context
export const usePageTitle = () => useContext(PageTitleContext);

// Create a provider component
export const PageTitleProvider = ({ children }) => {
  const [pageTitle, setPageTitle] = useState('Laiba\'s Portfolio');

  // Update page title and document title when changed
  const updatePageTitle = (newTitle) => {
    setPageTitle(newTitle);
    document.title = `${newTitle} | Laiba's Portfolio`;
  };

  // Create the value object to be provided by the context
  const value = {
    pageTitle,
    updatePageTitle
  };

  return (
    <PageTitleContext.Provider value={value}>
      {children}
    </PageTitleContext.Provider>
  );
}; 