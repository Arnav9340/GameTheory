/* eslint-disable jsx-a11y/no-static-element-interactions */
import DashboardIcon from '@mui/icons-material/Dashboard';
import PersonIcon from '@mui/icons-material/Person';
import React, { useContext } from 'react';
import { Link } from 'react-router-dom';
import { ColorContext } from '../../ColorContext/darkContext';
import './Sidebar.scss';

function Sidebar() {
    // color state management using react context
    const { darkMode, dispatch } = useContext(ColorContext);

    return (
        <div className="sidebar">
            <div className="logo">
                <Link to="/" style={{ textDecoration: 'none' }}>
                    <h3 className="text_none">Game Theory</h3>
                </Link>
            </div>
            <div className="links">
                <ul>
                    <Link to="/" style={{ textDecoration: 'none' }}>
                        <li>
                            <DashboardIcon className="icon" /> Create Bookings
                        </li>
                    </Link>
                    <Link to="/users" style={{ textDecoration: 'none' }}>
                        <li>
                            <PersonIcon className="icon" /> View Bookings
                        </li>
                    </Link>
                </ul>
            </div>
        </div>
    );
}

export default Sidebar;
