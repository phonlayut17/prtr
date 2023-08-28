import React from 'react';
import './App.css';
import HomePage from './pages/home/HomePage';
import { I18nextProvider } from 'react-i18next';
import i18n from '../src/i18/i18next';

function App() {
  return (
    <I18nextProvider i18n={i18n} >
      <HomePage />
    </I18nextProvider>
  );
}

export default App;
