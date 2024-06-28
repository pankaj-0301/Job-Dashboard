import React, { useState } from 'react';
import { FaBell } from 'react-icons/fa'; 
import { RiArrowDropDownLine } from 'react-icons/ri'; 
import './NavBar.css'; 
import MainPage from './MainPage'; // Ensure you have a MainPage component

const NavBar = () => {
    const [selectedCompany, setSelectedCompany] = useState({
        name: 'Atlassian',
        image: 'https://static-00.iconduck.com/assets.00/atlassian-icon-512x512-2p7fz86w.png'
    });
    const [dropdownVisible, setDropdownVisible] = useState(false);
    const [activeLink, setActiveLink] = useState('');
    const [showMainPage, setShowMainPage] = useState(false);

    const handleCompanyItemClick = (companyName, companyImage) => {
        setSelectedCompany({ name: companyName, image: companyImage });
        setDropdownVisible(false); // Close dropdown after selection
    };

    const toggleDropdown = () => {
        setDropdownVisible(!dropdownVisible);
    };

    const handleLinkClick = (link) => {
        setActiveLink(link);
        if (link === 'Job Preview') {
            setShowMainPage(true);
        } else {
            setShowMainPage(false);
        }
    };

    return (
        <>
            <div className="navbar">
                <div className="mainbar topbar">
                    <div className="logo">
                        <h7>Logo</h7> 
                    </div>
                    <div className="center-icons">
                        <div className="job"> 
                            <a href="#" className="icon-link">
                                <img src="https://png.pngtree.com/png-clipart/20200224/original/pngtree-briefcase-vector-icon-white-transparent-background-png-image_5249051.jpg" alt="Jobs" />
                                <span className="text">Jobs</span>
                            </a>
                        </div>
                        <a href="#" className="icon-link">
                            <img src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTrH9V5Bycbu3y-kcENzdqKoQF27kstbLMdNg&s" alt="Messages" />
                            <span>Messages</span>
                        </a>
                        <a href="#" className="icon-link">
                            <img src="https://static.vecteezy.com/system/resources/thumbnails/000/356/060/small/1__2845_29.jpg" alt="Payments" />
                            <span>Payments</span>
                        </a>
                        {/* Add more icon links as needed */}
                    </div>
                    <div className="icons-right">
                        <div className="notification-dropdown" onClick={toggleDropdown}>
                            <FaBell className="icon" />
                        </div>
                        <div className="selected-company" onClick={toggleDropdown}>
                            <img id="selectedCompanyImage" src={selectedCompany.image} alt="Selected Company" />
                            <RiArrowDropDownLine className="dropdown-icon" />
                        </div>
                        <div className={`dropdown-content ${dropdownVisible ? 'show' : ''}`}>
                            <div className="company-item" onClick={() => handleCompanyItemClick('Atlassian', 'https://static-00.iconduck.com/assets.00/atlassian-icon-512x512-2p7fz86w.png')}>
                                <img src="https://static-00.iconduck.com/assets.00/atlassian-icon-512x512-2p7fz86w.png" alt="Atlassian" />
                            </div>
                            <div className="company-item" onClick={() => handleCompanyItemClick('Amazon', 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSFBxnp5AONyXFjSMYTerxIfs-w1dWOSyCWzQ&s')}>
                                <img src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSFBxnp5AONyXFjSMYTerxIfs-w1dWOSyCWzQ&s" alt="Amazon" />
                            </div>
                            <div className="company-item" onClick={() => handleCompanyItemClick('Groww', 'https://i.pinimg.com/originals/77/ca/55/77ca550a2332ea82f01dd03bfdf6c62f.png')}>
                                <img src="https://i.pinimg.com/originals/77/ca/55/77ca550a2332ea82f01dd03bfdf6c62f.png" alt="Groww" />
                            </div>
                            {/* Add more company items as needed */}
                        </div>
                    </div>
                </div>
                <div className="mainbar bottombar">
                    <nav>
                        <a href="#" 
                           className={`mainbar-link ${activeLink === 'Job Preview' ? 'active' : ''}`} 
                           onClick={() => handleLinkClick('Job Preview')}>Job Preview</a>
                        <a href="#" 
                           className={`mainbar-link ${activeLink === 'Applicants' ? 'active' : ''}`} 
                           onClick={() => handleLinkClick('Applicants')}>Applicants</a>
                        <a href="#" 
                           className={`mainbar-link ${activeLink === 'Match' ? 'active' : ''}`} 
                           onClick={() => handleLinkClick('Match')}>Match</a>
                        <a href="#" 
                           className={`mainbar-link ${activeLink === 'Messages' ? 'active' : ''}`} 
                           onClick={() => handleLinkClick('Messages')}>Messages</a>
                    </nav>
                </div>
            </div>
            {showMainPage && <MainPage />}
        </>
    );
};

export default NavBar;
