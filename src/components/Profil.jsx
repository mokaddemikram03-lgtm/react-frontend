import React, { useState } from "react";
 
 
 
export default function Profil() {
  return (
    <div className="page">
      <style>{`
        :root {
          --blue: #0F056B;
          --gray: #D9D9D9;
          --light-bg: #F5F5F5;
          --gray-light: #E0E0E0;
          --photo-dark: #A0A0A0;
        }
 
        /* Page et header */
        .page {
          background-color: var(--light-bg);
          height: 100vh;
          display: flex;
          flex-direction: column;
          font-family: sans-serif;
        }
 
        .header {
          background-color: var(--blue);
          color: #D9D9D9;
          padding: 15px 30px;
          display: flex;
          align-items: center;
          justify-content: center;
          position: relative;
        }
 
        .back-icon {
          font-size: 35px;
          cursor: pointer;
          position: absolute;
          left: 300px;
          top: 50%;
          transform: translateY(-50%);
        }
 
        .header-title {
          margin: 0;
          font-size: 24px;
          font-weight: bold;
          color: white;
        }
 
        /* Container principal */
        .container {
          display: flex;
          height: 100%;
        }
 
        /* Sidebar */
        .sidebar {
          width: 240px;
          background-color: var(--blue);
          color: white;
          padding: 10px 20px;
        }
 
        .profile {
          display: flex;
          align-items: center;
          gap: 12px;
          padding-top: 5px;
          margin-bottom: 20px;
        }
 
        .avatar {
          width: 60px;
          height: 60px;
          background-color: var(--gray);
          border-radius: 50%;
        }
 
        .profile-text {
          display: flex;
          flex-direction: column;
        }
 
        .name {
          margin: 0;
          font-weight: bold;
        }
 
        .spec {
          margin: 0;
          font-size: 13px;
          opacity: 0.9;
        }
 
        .year-box {
          display: flex;
          align-items: center;
          gap: 12px;
          margin-top: 10px;
          background: rgb(188, 186, 186);
          padding: 8px 10px;
          border-radius: 10px;
          width: 190px;
          border: 1px solid #afaaaa;
        }
 
        .year-logo {
          width: 35px;
          height: 35px;
          object-fit: contain;
        }
 
        .year-text {
          margin: 0;
          font-size: 13px;
          font-weight: bold;
          color: var(--blue);
        }
 
        .divider {
          width: 100%;
          height: 2px;
          background-color: white;
          opacity: 0.3;
          margin: 20px 0;
        }
 
        .menu {
          display: flex;
          flex-direction: column;
          gap: 18px;
        }
 
        .menu-item {
          display: flex;
          align-items: center;
          gap: 16px;
          font-size: 22px;
          cursor: pointer;
        }
 
        .menu-item svg {
          font-size: 25px;
        }
 
        .menu-item.active {
          background-color: var(--gray);
          color: var(--blue);
          font-weight: bold;
          padding: 10px 12px;
          border-radius: 20px;
        }
 
        /* Content */
        .content {
          flex: 1;
          padding: 40px 60px;
          display: flex;
          justify-content: center;
        }
 
        .gray-card {
          background-color: var(--gray-light);
          padding: 30px;
          border-radius: 12px;
          width: 100%;
          max-width: 850px;
        }
 
        .white-card {
          background-color: white;
          border-radius: 12px;
          padding: 25px 30px;
          max-width: 700px;
          margin: 0 auto;
        }
 
        .profile-info {
          display: flex;
          justify-content: space-between;
          align-items: center;
          gap: 70px;
          padding: 20px 0;
        }
 
        .profile-left {
          display: flex;
          flex-direction: column;
          flex: 1;
        }
 
        .profile-left p {
          margin: 10px 0;
          font-size: 22px;
          color: var(--blue);
          display: flex;
          align-items: center;
          gap: 12px;
        }
 
        .profile-right {
          display: flex;
          align-items: center;
          justify-content: center;
          flex-shrink: 0;
        }
 
        .profile-right .photo {
          width: 140px;
          height: 140px;
          background-color: var(--photo-dark);
          border-radius: 50%;
        }
 
        .logout-container {
          display: flex;
          justify-content: center;
          margin-top: 35px;
        }
 
        .logout-btn {
          padding: 10px 35px;
          border-radius: 25px;
          border: none;
          background-color: var(--blue);
          color: white;
          font-size: 16px;
          cursor: pointer;
          transition: 0.3s;
        }
 
        .logout-btn:hover {
          background-color: #080340;
        }
      `}</style>
 
      {/* Header */}
      <div className="header">
        <div className="back-icon">
  <svg viewBox="0 0 24 24" width="28" height="28">
    <path fill="white" d="M15.41 7.41L14 6l-6 6 6 6 1.41-1.41L10.83 12z"/>
  </svg>
</div>
 
        <h1 className="header-title">Profil</h1>
      </div>
 
      {/* Body */}
      <div className="container">
        {/* Sidebar */}
        <div className="sidebar">
          <div className="profile">
            <div className="avatar"></div>
            <div className="profile-text">
              <p className="name">First and Last Name</p>
              <p className="spec">Speciality</p>
            </div>
          </div>
 
          <div className="year-box">
            <img src="/logo tlm.png" alt="logo" className="year-logo" />
            <p className="year-text">Academic Year: 2025 / 2026</p>
          </div>
 
          <div className="divider"></div>
 
          {/* Sidebar Menu */}
          <div className="menu">
             <div className="menu-item active">
                <svg viewBox="0 0 24 24" width="24" height="24"><path fill="white" d="M12 12c2.7 0 5-2.3 5-5s-2.3-5-5-5-5 2.3-5 5 2.3 5 5 5zm0 2c-3.3 0-10 1.7-10 5v3h20v-3c0-3.3-6.7-5-10-5z"/></svg>
                Profil
              </div>
 
              <div className="menu-item">
  <svg viewBox="0 0 24 24" width="24" height="24">
    <path fill="white" d="M3 4h18v2H3V4zm0 4h18v14H3V8zm2 2v10h14V10H5z"/>
  </svg>
  Timetable
</div>
 
 
              <div className="menu-item">
                <svg viewBox="0 0 24 24"width="24" height="24"><path fill="white" d="M3 3h18v2H3zm0 6h18v2H3zm0 6h18v2H3z"/></svg>
                Assessment notes
              </div>
 
              <div className="menu-item ">
                <svg viewBox="0 0 24 24"width="24" height="24"><circle cx="4" cy="12" r="2" fill="white"/><path fill="white" d="M8 11h14v2H8z"/></svg>
                Exam grades
              </div>
 
              <div className="menu-item">
                <svg viewBox="0 0 24 24"width="24" height="24"><path fill="white" d="M12 12c2.7 0 5-2.3 5-5s-2.3-5-5-5-5 2.3-5 5 2.3 5 5 5zm-7 9v-1c0-3.3 6.7-5 10-5"/></svg>
                Group & Section
              </div>
 
              <div className="menu-item">
                <svg viewBox="0 0 24 24"width="24" height="24"><path fill="white" d="M12 2a10 10 0 100 20 10 10 0 000-20zm1 15h-2v-2h2v2zm0-4h-2V7h2v6z"/></svg>
                My Complain
              </div>
 
              <div className="menu-item">
                <svg viewBox="0 0 24 24"width="24" height="24"><path fill="white" d="M6 2h12v20H6z"/></svg>
                Transcript
              </div>
          </div>
        </div>
 
        {/* Content */}
        <div className="content">
          <div className="gray-card">
            <div className="white-card">
              <div className="profile-info">
                <div className="profile-left">
                  <p>
  <svg width="24" height="24" viewBox="0 0 24 24">
    <path fill="#0F056B" d="M12 12c2.7 0 5-2.3 5-5s-2.3-5-5-5-5 2.3-5 5 2.3 5 5 5zm0 2c-3.3 0-10 1.7-10 5v3h20v-3c0-3.3-6.7-5-10-5z"/>
  </svg>
  Last Name :
</p>
 
<p>
  <svg width="24" height="24" viewBox="0 0 24 24">
    <path fill="#0F056B" d="M12 12c2.7 0 5-2.3 5-5s-2.3-5-5-5-5 2.3-5 5 2.3 5 5 5zm0 2c-3.3 0-10 1.7-10 5v3h20v-3c0-3.3-6.7-5-10-5z"/>
  </svg>
  First Name :
</p>
 
<p>
  <svg width="24" height="24" viewBox="0 0 24 24">
    <path fill="#0F056B" d="M19 3h-1V1h-2v2H8V1H6v2H5a2 2 0 00-2 2v16a2 2 0 002 2h14a2 2 0 002-2V5a2 2 0 00-2-2zm0 18H5V8h14v13z"/>
  </svg>
  Date of Birth :
</p>
 
<p>
  <svg width="24" height="24" viewBox="0 0 24 24">
    <path fill="#0F056B" d="M3 6h18v2H3V6zm0 4h18v2H3v-2zm0 4h18v2H3v-2z"/>
  </svg>
  Speciality :
</p>
 
                </div>
                <div className="profile-right">
                  <div className="photo"></div>
                </div>
              </div>
              <div className="logout-container">
                <button className="logout-btn">Logout</button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
 
 