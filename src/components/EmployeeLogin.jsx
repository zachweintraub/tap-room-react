import React from 'react';
import Header from './Header';
import { Link } from 'react-router-dom';

function EmployeeLogin() {
    return(
        <div>
            <Header/>
            <p>Employee login works!</p>
            <Link to="/tap-list/admin">Fake Login</Link>
        </div>
    );
}

export default EmployeeLogin;