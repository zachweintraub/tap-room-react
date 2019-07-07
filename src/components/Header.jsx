import React from 'react';
import { Link } from 'react-router-dom';

function Header() {
    return(
        <div>
            <div className="headerLinks">
                <Link to="/" style={{textDecoration: 'none'}}><span className="link">Home</span></Link>
                <Link to="/tap-list" style={{textDecoration: 'none'}}><span className="link">On Tap</span></Link>
                <Link to="/login" style={{textDecoration: 'none'}}><span className="link">Employee Login</span></Link>
            </div>
        </div>
    );
}

export default Header;