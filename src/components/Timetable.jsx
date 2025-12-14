import React from "react";

export default function Timetable() {
  return (
    <>
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
        }

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

        /* BODY */
        .container {
          display: flex;
          height: 100%;
        }

        /* SIDEBAR */
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

        .profile-text .name {
          margin: 0;
          font-weight: bold;
        }

        .profile-text .spec {
          margin: 0;
          font-size: 13px;
          opacity: 0.9;
        }

        /* Year Box */
        .year-box {
          display: flex;
          align-items: center;
          gap: 12px;
          background: rgb(188,186,186);
          padding: 8px 10px;
          border-radius: 10px;
          width: 190px;
          border: 1px solid #afaaaa;
          margin-top: 10px;
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

        /* MENU */
        .menu {
          display: flex;
          flex-direction: column;
          gap: 18px;
        }

        .menu-item {
          display: flex;
          align-items: center;
          gap: 14px;
          font-size: 18px;
          cursor: pointer;
        }

        .menu-item svg {
          width: 22px;
          height: 22px;
        }

        .menu-item.active {
          background-color: var(--gray);
          color: var(--blue);
          padding: 10px 12px;
          border-radius: 20px;
          font-weight: bold;
        }

        /* CONTENT */
        .content {
          flex: 1;
          padding: 40px 60px;
        }

        /* TABLE */
        .timetable {
          border-collapse: collapse;
          width: 80%;
          margin: auto;
          font-size: 20px;
          background-color: white;
        }

        .timetable th, .timetable td {
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

      <div className="page">
        {/* Header */}
        <header className="header">

          {/* SVG Back Icon */}
          <svg className="back-icon" fill="white" viewBox="0 0 24 24">
            <path d="M15.5 19l-7-7 7-7" stroke="white" strokeWidth="2" fill="none" strokeLinecap="round" strokeLinejoin="round"/>
          </svg>

          <h1 className="header-title">Timetable</h1>
        </header>

        <div className="container">

          {/* Sidebar */}
          <aside className="sidebar">

            <div className="profile">
              <div className="avatar"></div>
              <div className="profile-text">
                <p className="name">First and Last Name</p>
                <p className="spec">Spécialité</p>
              </div>
            </div>

            <div className="year-box">
              <img src="/logo tlm.png" className="year-logo" />
              <p className="year-text">Academic Year: 2025 / 2026</p>
            </div>

            <div className="divider"></div>

            <div className="menu">

              <div className="menu-item">
                <svg viewBox="0 0 24 24"><path fill="white" d="M12 12c2.7 0 5-2.3 5-5s-2.3-5-5-5-5 2.3-5 5 2.3 5 5 5zm0 2c-3.3 0-10 1.7-10 5v3h20v-3c0-3.3-6.7-5-10-5z"/></svg>
                Profil
              </div>

              <div className="menu-item active">
                <svg viewBox="0 0 24 24"><path fill="var(--blue)" d="M6 2h12v20H6z"/></svg>
                Timetable
              </div>

              <div className="menu-item">
                <svg viewBox="0 0 24 24"><path fill="white" d="M3 3h18v2H3zm0 6h18v2H3zm0 6h18v2H3z"/></svg>
                Assessment notes
              </div>

              <div className="menu-item">
                <svg viewBox="0 0 24 24"><circle cx="4" cy="12" r="2" fill="white"/><path fill="white" d="M8 11h14v2H8z"/></svg>
                Exam grades
              </div>

              <div className="menu-item">
                <svg viewBox="0 0 24 24"><path fill="white" d="M12 12c2.7 0 5-2.3 5-5s-2.3-5-5-5-5 2.3-5 5 2.3 5 5 5zm-7 9v-1c0-3.3 6.7-5 10-5"/></svg>
                Group & Section
              </div>

              <div className="menu-item">
                <svg viewBox="0 0 24 24"><path fill="white" d="M12 2a10 10 0 100 20 10 10 0 000-20zm1 15h-2v-2h2v2zm0-4h-2V7h2v6z"/></svg>
                My Complain
              </div>

              <div className="menu-item">
                <svg viewBox="0 0 24 24"><path fill="white" d="M6 2h12v20H6z"/></svg>
                Transcript
              </div>

            </div>
          </aside>

          {/* Main Content */}
          <main className="content">

            <table className="timetable">
              <thead>
                <tr className="days">
                  <th></th>
                  <th>Sunday<br/><span>12/12/2025</span></th>
                  <th>Tuesday<br/><span>14/12/2025</span></th>
                  <th>Thursday<br/><span>16/12/2025</span></th>
                </tr>
              </thead>

              <tbody>
                <tr>
                  <td className="time">09H-10.30H</td>
                  <td>GL151<br/><small>Absari (Resp)</small></td>
                  <td></td>
                  <td>GL131<br/><small>Lazouni (Resp)</small></td>
                </tr>

                <tr>
                  <td className="time">11H-12.30H</td>
                  <td>GL132<br/><small>Marouf (Resp)</small></td>
                  <td></td>
                  <td>GL122<br/><small>Amraoui (Resp)</small></td>
                </tr>

                <tr>
                  <td className="time">13H-14.30H</td>
                  <td></td>
                  <td>GL111<br/><small>Chikh (Resp)</small></td>
                  <td></td>
                </tr>

                <tr>
                  <td className="time">15H-16.30H</td>
                  <td></td>
                  <td>GL121<br/><small>Meziane A (Resp)</small></td>
                  <td></td>
                </tr>

              </tbody>
            </table>

          </main>

        </div>
      </div>
    </>
  );
}
