import React from "react";


export default function ExamGradesPage() {
  return (
    <div className="page">
      <style>{`
        :root {
          --blue: #0F056B;
          --gray: #D9D9D9;
          --light-bg: #F5F5F5;
        }

        /* Whole Page */
        .page {
          background-color: var(--light-bg);
          height: 100vh;
          overflow: hidden;
          display: flex;
          flex-direction: column;
          font-family: sans-serif;
        }

        /* Header */
        .header {
          background-color: var(--blue);
          color: white;
          padding: 15px 30px;
          display: flex;
          align-items: center;
          justify-content: center;
          position: relative;
        }

        .back-icon {
          font-size: 28px;
          cursor: pointer;
          position: absolute;
          left: 300px;
          top: 50%;
          transform: translateY(-50%);
          color: white;
        }

        .header-title {
          margin: 0;
          font-size: 22px;
          font-weight: bold;
        }

        /* Body */
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

        /* Profile */
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
          flex-shrink: 0;
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

        /* Logo + year */
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

        /* Menu */
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
          color: white;
        }

        .menu-item svg {
          font-size: 22px;
        }

        .menu-item.active {
          background-color: var(--gray);
          padding: 8px 10px;
          border-radius: 20px;
          color: var(--blue);
          font-weight: bold;
        }

        /* Content */
        .content {
          flex: 1;
          padding: 40px 60px;
          position: relative;
        }

        /* Buttons Semestres */
        .buttons {
          display: flex;
          justify-content: center;
          gap: 130px;
          margin-top: 20px;
        }

        .btn {
          padding: 12px 35px;
          border-radius: 30px;
          border: 2px solid var(--blue);
          background: var(--gray);
          cursor: pointer;
          font-size: 16px;
          transition: 0.3s;
        }

        .btn:hover {
          background: var(--blue);
          color: var(--gray);
        }

        /* Table */
        .timetable {
          border-collapse: collapse;
          width: 80%;
          margin: 30px auto 0 auto;
          background-color: white;
        }

        .timetable th,
        .timetable td {
          border: 1px solid #aaa;
          padding: 12px;
          text-align: center;
        }

        .days th {
          background-color: var(--blue);
          color: white;
        }

        .days th span {
          font-size: 13px;
          font-weight: normal;
        }

        .time {
          background-color: var(--gray);
          font-weight: bold;
        }
      `}</style>

      {/* Header */}
      <div className="header">
        <div className="back-icon">
  <svg viewBox="0 0 24 24" width="28" height="28">
    <path fill="white" d="M15.41 7.41L14 6l-6 6 6 6 1.41-1.41L10.83 12z"/>
  </svg>
</div>
        <h1 className="header-title">Exam Grades</h1>
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
             <div className="menu-item">
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

              <div className="menu-item active">
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
          <div className="buttons">
            <button className="btn">Semester 1</button>
            <button className="btn">Semester 2</button>
          </div>

          
        </div>
      </div>
    </div>
  );
}
