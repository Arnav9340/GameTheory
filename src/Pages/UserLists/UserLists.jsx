/* eslint-disable no-constant-condition */
/* eslint-disable no-nested-ternary */
import React from 'react';
import Navbar from '../../Components/Navbar/Navbar';
import Sidebar from '../../Components/Sidebar/Sidebar';
import './userlists.scss';

function Lists({ type }) {
    //
    return (
        <div className="list_page">
            <div className="home_sidebar">
                <Sidebar />
            </div>

            <div className="list_page_main">
                <Navbar />
                <h1>HEY</h1>
            </div>
        </div>
    );
}

export default Lists;
