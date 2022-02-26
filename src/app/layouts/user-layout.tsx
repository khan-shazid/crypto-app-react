import React, { useState } from 'react';
import { Link } from 'react-router-dom';

import { userContext } from '../contexts/UserContext';
import Login from '../pages/auth/login-modal';
import './user-layout.css';

const UserLayout = ({children, ...rest}: {children: JSX.Element}) => {
    const [showLoginModal, setShowLoginModal] = useState(false);
    
    return (
        <>
            <ul>
                <li><a className="active" href="#home">Home</a></li>
                <li><a href="#news">News</a></li>
                <li><a href="#contact">Contact</a></li>
                <li style={{float: 'right'}}><a href="#" onClick={() => setShowLoginModal(true)}>Login</a></li>
            </ul>
            <Login isOpen={showLoginModal} setIsOpen={setShowLoginModal}/>
        </>
    );
};

export default UserLayout;




// <div className="wrapper">
        //     <div id="content">
        //         <nav className="navbar navbar-expand-lg navbar-light bg-light">
        //             <div className="container-fluid">
        //                 <div>
        //                     <b>Welcome {localStorage.getItem('name')}</b>

        //                     <Link to='/' style={{marginRight: 20, marginLeft: 40}}>
        //                         Home
        //                     </Link>
        //                     <Link to='/reservations'>
        //                         Reservations
        //                     </Link>
        //                 </div>
                        
        //                 <Link to='/logout'>
        //                     Logout
        //                 </Link>
        //             </div>
        //         </nav>
        //         { children }
        //     </div>
        // </div>
