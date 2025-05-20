import React from 'react';
import './Profile.css';
import { IoArrowBack } from 'react-icons/io5';
import { FiEdit2 } from 'react-icons/fi';
import { IoIosArrowForward } from 'react-icons/io';
import { BiSupport } from 'react-icons/bi';

const Profile = () => {
  return (
    <div className="profile-container">
      <div className="profile-header">
        <div className="header-left">
          <IoArrowBack className="back-icon" />
          <span>Profile</span>
        </div>
        <div className="support-button">
          <BiSupport /> support
        </div>
      </div>

      <div className="profile-info">
        <div className="profile-image">
          <img src="https://contacts.zoho.in/file?ID=60022973391&fs=original" alt="Profile" />
        </div>
        <div className="profile-details">
          <h2>Amit Karayat</h2>
          <p>member since Dec, 2020</p>
          <FiEdit2 className="edit-icon" />
        </div>
      </div>

      <div className="garage-section">
        <div className="garage-icon">🚗</div>
        <div className="garage-text">
          <p>get to know your vehicles, inside out</p>
          <p className="garage-name">CRED garage</p>
        </div>
        <IoIosArrowForward className="arrow-icon" />
      </div>

      <div className="stats-section">
        <div className="stat-item">
          <span className="stat-label">credit score</span>
          <div className="stat-value">
            <span className="refresh">REFRESH AVAILABLE</span>
            <span>757</span>
            <IoIosArrowForward />
          </div>
        </div>

        <div className="stat-item">
          <span className="stat-label">lifetime cashback</span>
          <div className="stat-value">
            <span>₹3</span>
            <IoIosArrowForward />
          </div>
        </div>

        <div className="stat-item">
          <span className="stat-label">bank balance</span>
          <div className="stat-value">
            <span>check</span>
            <IoIosArrowForward />
          </div>
        </div>
      </div>

      <div className="section-title">YOUR REWARDS & BENEFITS</div>

      <div className="rewards-section">
        <div className="reward-item">
          <span>cashback balance</span>
          <div className="reward-value">
            <span>₹0</span>
            <IoIosArrowForward />
          </div>
        </div>

        <div className="reward-item">
          <span>coins</span>
          <div className="reward-value">
            <span>26,46,583</span>
            <IoIosArrowForward />
          </div>
        </div>

        <div className="reward-item">
          <span>win upto Rs 1000</span>
          <p className="subtitle">refer and earn</p>
          <IoIosArrowForward />
        </div>
      </div>

      <div className="section-title">TRANSACTIONS & SUPPORT</div>
      
      <div className="transactions-section">
        <div className="transaction-item">
          <span>all transactions</span>
          <IoIosArrowForward />
        </div>
      </div>
    </div>
  );
};

export default Profile;