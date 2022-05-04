import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';
// import { BrowserRouter } from 'react-router-dom';
import { useStore, RootStore, StoreContext } from "./store"


const root = ReactDOM.createRoot(document.getElementById('root'));
// let store = useStore();


root.render(
    <React.StrictMode>
        <StoreContext.Provider value={RootStore}>
            <App />
        </StoreContext.Provider>
    </React.StrictMode>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
