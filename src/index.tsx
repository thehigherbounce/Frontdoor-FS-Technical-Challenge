import React from 'react';
import { render } from 'react-dom';
import ReactDOM from 'react-dom/client';
import './index.css';
import Popup from './components/Popup';
import { HighlightProvider } from './contexts/HighlightContext';
import reportWebVitals from './reportWebVitals';

// // shadow host
// const host = document.querySelector("#root");
// // create a shadow a root inside it
// const shadow = host?.attachShadow({ mode: 'open' });
// // create the element where we would render our app
// const renderIn = document.createElement('div');
// shadow?.appendChild(renderIn);

const root = ReactDOM.createRoot(
  document.getElementById('root') as HTMLElement
);

const App = () => {
  return (
    <React.StrictMode>
      <HighlightProvider>
        <Popup />
      </HighlightProvider>
    </React.StrictMode>
  )
}

// render(<App />, renderIn);
root.render(
  <React.StrictMode>
    <HighlightProvider>
      <Popup />
    </HighlightProvider>
  </React.StrictMode>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
