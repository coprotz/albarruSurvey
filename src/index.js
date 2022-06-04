import React from 'react';
import { render } from 'react-dom';
// import ReactDom from 'react-dom/client';
import './index.css';
import App from './App';
import { UserAuthContextProvider } from './context/UserAuthContext';




// ReactDOM.render(
//     <UserAuthContextProvider>
//         <App />
//     </UserAuthContextProvider>, 
//     document.getElementById('root')
//   );




const root = document.getElementById('root')
render(
    <UserAuthContextProvider>
        <App />
    </UserAuthContextProvider>, root
        
    // </AuthContextProvider>

);

