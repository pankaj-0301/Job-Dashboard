import React, { useState } from 'react';
import { FaLocationArrow, FaTrash ,FaEdit,FaCoins,FaUser, FaThumbsUp, FaEnvelope, FaEye, FaCheck, FaMapMarkerAlt } from 'react-icons/fa';
import { SiFigma, SiAdobeillustrator, SiAdobexd } from 'react-icons/si';
import CompanyInfo from './CompanyInfo'; // Import CompanyInfo component
import './MainPage.css';

const MainPage = () => {
    const [showCompanyDetails, setShowCompanyDetails] = useState(false);

    // Function to toggle company details display
    const toggleCompanyDetails = () => {
        setShowCompanyDetails(!showCompanyDetails);
    };

    return (
        <div className="main-container">
           
            <div className="content">
                <div className="job-preview">
                    <div className='head'>
                        <h2>Senior Product Manager</h2>
                        <div className="job-posted">
                            <div className="dot"></div>
                            <div className="job-posted-text">
                                Posted 2 days ago
                                <span className="open">
                                    <div className="dot-open"></div>
                                    Open
                                </span>
                            </div>
                        </div>
                    </div>
                    <div className="job-details">
                        <div className="job-location">
                            <FaMapMarkerAlt /> Delaware, USA
                        </div>
                        <div className="job-dot"></div>

                        <div className="job-salary">
                            <FaCoins />  $300k - $400k
                        </div>
                    </div>
                    <div className="job-skills">
                        <div className="skills-column">
                            <h3>Skills Required</h3>
                            <div className="skill">
                                <SiFigma className="skill-icon" /> Figma
                            </div>
                            <div className="skill">
                                <SiAdobexd className="skill-icon" /> Adobe XD
                            </div>
                            <div className="skill">
                                <SiAdobeillustrator className="skill-icon" /> Adobe Illustrator
                            </div>
                        </div>
                        <div className="details-columns">
                            <div className="details-column">
                                <h3>Preferred Language</h3>
                                <div className='inside'>English</div>
                            </div>
                            <div className="details-column">
                                <h3>Type</h3>
                                <div className='inside'>Full Time</div>
                            </div>
                            <div className="details-column">
                                <h3>Years of Experience</h3>
                                <div  className='inside'>3+ Years of Experience</div>
                            </div>
                        </div>
                    </div>
                    <div className="job-description">
                        <h3>About the job</h3>
                        <ul>
                            <li>Handle the UI/UX research design</li>
                            <li>Work on researching on latest web applications designs & trends</li>
                            <li>Work on conceptualizing and visualizing</li>
                            <li>Work on creating graphics content and other graphic related works</li>
                        </ul>
                        <h3>Benefits</h3>
                        <ul>
                            <li>Health insurance</li>
                            <li>Provident Fund</li>
                        </ul>
                        <h3>Schedule</h3>
                        <ul>
                       <li>Day shift</li>
                       </ul>
                        <h3>Supplemental pay types</h3>
                        <ul>
                            <li>Performance bonus</li>
                            <li>Yearly bonus</li>
                        </ul>
                        <h3>Work Location:In person</h3>
                        <p></p>
                    </div>
                   
                        {/* <CompanyInfo /> */}
                       
                    
                {showCompanyDetails && (
                <div className="company-details">
                    <CompanyInfo />
                 </div>
            )}
                </div>

                <div className="sidebar">
                    <div className="sidebar-buttons">
                    <button className="sidebar-button  delete">
        <FaTrash style={{ marginRight: '8px' }} />
        Delete Job
      </button>
      <button className="sidebar-button  edit">
        <FaEdit style={{ marginRight: '8px' }} />
        Edit Job
      </button>
                    </div>
                    <div className="sidebar-links">
                        <div className="sidebar-link">
                            <FaUser className="sidebar-icon" />
                            <a href="#">Applicants</a>
                            <span className="sidebar-count">400</span>
                        </div>
                        <div className="sidebar-link">
                            <FaCheck className="sidebar-icon" />
                            <a href="#">Match</a>
                            <span className="sidebar-count">100</span>
                        </div>
                        <div className="sidebar-link">
                            <FaEnvelope className="sidebar-icon" />
                            <a href="#">Messages</a>
                            <span className="sidebar-count">147</span>
                        </div>
                        <div className="sidebar-link">
                            <FaEye className="sidebar-icon" />
                            <a href="#">Views</a>
                            <span className="sidebar-count">800</span>
                        </div>
                        <div className="sidebar-link" onClick={toggleCompanyDetails}>
                            <FaLocationArrow className="sidebar-icon" />
                            <a href="#">Company Details</a>
                        </div>
                       


                       
                    </div>
                </div>
            </div>
            
        </div>
    );
};

export default MainPage;
