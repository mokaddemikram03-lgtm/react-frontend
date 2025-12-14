import React, { useState } from "react";


export default function SEMESTER1() {
  const [showPopup, setShowPopup] = useState(false);
  const [selectedModule, setSelectedModule] = useState("");
  const [selectedNote, setSelectedNote] = useState("");

  const openPopup = (module, note) => {
    setSelectedModule(module);
    setSelectedNote(note);
    setShowPopup(true);
  };

  return (
    <div className="page">
      <style>{`
        :root {
          --blue: #0F056B;
          --gray: #D9D9D9;
          --light-bg: #F5F5F5;
        }
        /* Page */
        .page {
          background-color: var(--light-bg);
          height: 100vh;
          display: flex;
          flex-direction: column;
          overflow: hidden;
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
          width: 28px;
          height: 28px;
          cursor: pointer;
          position: absolute;
          left: 300px;
          top: 50%;
          transform: translateY(-50%);
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
          padding: 4px 2px;
        }
        .menu-item svg {
          font-size: 25px;
        }
        .menu-item.active {
          background-color: var(--gray);
          color: var(--blue);
          font-weight: bold;
          padding: 8px 12px;
          border-radius: 20px;
        }
        /* Content */
        .content {
          flex: 1;
          padding: 40px 60px;
          display: flex;
          flex-direction: column;
          align-items: center;
          overflow-y: auto;
        }
        /* Table */
        .table-card {
          width: 100%;
          max-width: 800px;
          background: white;
          padding: 20px;
          border-radius: 12px;
        }
        .timetable {
          width: 100%;
          border-collapse: separate;
          border-spacing: 25px;
        }
        .timetable th, .timetable td {
          padding: 15px;
          text-align: center;
          border-radius: 8px;
          border: none;
        }
        .timetable th {
          background-color: #7a777a;
          color: var(--blue);
          font-weight: bold;
        }
        .timetable td {
          background-color: #D9D9D9;
        }
        .good {
          color: green;
          font-weight: bold;
        }
        .bad {
          color: red;
          font-weight: bold;
        }
        /* Claim Button */
        .claim-btn {
          background-color: var(--blue);
          color: white;
          padding: 8px 14px;
          border: none;
          border-radius: 8px;
          cursor: pointer;
          font-weight: bold;
        }
        .claim-btn:hover {
          background-color: #08034a;
        }
        /* Popup Overlay */
        .popup-overlay {
          position: fixed;
          top: 0;
          left: 0;
          width: 100%;
          height: 100%;
          background: rgba(0,0,0,0.5);
          display: flex;
          justify-content: center;
          align-items: center;
          z-index: 2000;
        }
        .popup-card {
          width: 420px;
          background: white;
          padding: 25px;
          border-radius: 12px;
          text-align: center;
          box-shadow: 0px 0px 10px #33333360;
          animation: fadeIn 0.2s;
        }
        .popup-card h2 {
          color: var(--blue);
          margin-bottom: 20px;
        }
        .popup-card textarea {
          width: 100%;
          height: 100px;
          margin-top: 15px;
          border-radius: 8px;
          padding: 10px;
          border: 1px solid #bbb;
          resize: none;
          outline: none;
        }
        .popup-actions {
          margin-top: 20px;
          display: flex;
          justify-content: space-between;
        }
        .close-btn, .send-btn {
          padding: 8px 16px;
          border-radius: 8px;
          border: none;
          cursor: pointer;
          font-weight: bold;
        }
        .close-btn { background-color: gray; color: white; }
        .send-btn { background-color: var(--blue); color: white; }
        @keyframes fadeIn {
          from { transform: scale(0.9); opacity: 0; }
          to { transform: scale(1); opacity: 1; }
        }
      `}</style>

      {/* Header */}
      <div className="header">
        <div className="back-icon">
  <svg viewBox="0 0 24 24" width="28" height="28">
    <path fill="white" d="M15.41 7.41L14 6l-6 6 6 6 1.41-1.41L10.83 12z"/>
  </svg>
</div>

        <h1 className="header-title">SEMESTER 1</h1>
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
          <div className="table-card">
            <table className="timetable">
              <thead>
                <tr>
                  <th>Modules</th>
                  <th>Coefficients</th>
                  <th>Notes</th>
                  <th>Action</th>
                </tr>
              </thead>
              <tbody>
                <tr>
                  <td>Intelligence Artificielle</td>
                  <td>2</td>
                  <td className="good">15</td>
                  <td>
                    <button onClick={() => openPopup("Intelligence Artificielle", "15")}>Make a Claim</button>
                  </td>
                </tr>
                <tr>
                  <td>Experience Design</td>
                  <td>3</td>
                  <td className="good">13</td>
                  <td>
                    <button onClick={() => openPopup("Experience Design", "13")}>Make a Claim</button>
                  </td>
                </tr>
                <tr>
                  <td>Anglais</td>
                  <td>1</td>
                  <td className="bad">9</td>
                  <td>
                    <button onClick={() => openPopup("Anglais", "09")}>Make a Claim</button>
                  </td>
                </tr>
              </tbody>
            </table>
          </div>
        </div>
      </div>

      {/* POPUP */}
      {showPopup && (
        <div className="popup-overlay">
          <div className="popup-card">
            <h2>Make a Claim</h2>
            <p><strong>Module:</strong> {selectedModule}</p>
            <p><strong>Note:</strong> {selectedNote}</p>
            <textarea placeholder="Your claim..." />
            <div className="popup-actions">
              <button onClick={() => setShowPopup(false)} className="close-btn">Cancel</button>
              <button className="send-btn">Send</button>
            </div>
          </div>
        </div>
      )}
    </div>
  );
}
