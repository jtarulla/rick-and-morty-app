import React from 'react';
import { BrowserRouter } from 'react-router-dom';
import { ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import Routes from 'routes/routes';
import 'css/header.css'

const App = () => {
    return (
        <BrowserRouter>
            <ToastContainer />
            <Routes />
        </BrowserRouter>
    );
}

export default App;