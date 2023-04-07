import React from 'react';
import './App.css';
import './index.css';
import Popup from './components/Popup';
import { HighlightProvider } from './contexts/HighlightContext';

const App: React.FC = () => {
  return (
    <div className="App">
      <HighlightProvider>
        <Popup />
      </HighlightProvider>
    </div>
  );
};

export default App;