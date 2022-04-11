import React from 'react';
import ReactDom from 'react-dom/client';
import './index.css';
import App from './App';
import { AuthContextProvider } from './context/AuthContext';

const root = ReactDom.createRoot(document.getElementById('root'))
root.render(
    <AuthContextProvider>
        <App />
    </AuthContextProvider>

);

