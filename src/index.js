import React from 'react';
import { render } from 'react-dom';
import './index.css';
import App from './App';
import { UserAuthContextProvider } from './context/UserAuthContext';


const root = document.getElementById('root')
render(
    <UserAuthContextProvider>
        <App />
    </UserAuthContextProvider>, root


);

