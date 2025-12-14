import React from "react";

export default function Traanscript() {
  return (
    <div className="page">
      <style>{`
        :root {
          --blue: #0F056B;
          --gray: #D9D9D9;
          --light-bg: #F5F5F5;
          --muted: #6b7280;
          --good: #ecfdf5;
          --bad: #fff1f2;
        }
        .page { display: flex; min-height: 100vh; background-color: var(--light-bg); }
        .sidebar { width: 260px; background-color: var(--blue); color: white; padding: 20px; }
        .profile { display: flex; align-items: center; gap: 20px; padding-top: 45px; margin-bottom: 20px; }
        .avatar { width: 60px; height: 60px; border-radius: 60%; background-color: var(--gray); }
        .profile-text .name { font-weight: bold; margin: 0; }
        .profile-text .spec { font-size: 13px; opacity: 0.9; margin: 0; }
        .year-box { display: flex; align-items: center; gap: 12px; margin-top: 10px; background: rgb(188, 186, 186); padding: 8px 10px; border-radius: 10px; width: 190px; border: 1px solid #afaaaa; }
        .year-logo { width: 35px; height: 35px; object-fit: contain; }
        .year-text { margin: 0; font-size: 13px; font-weight: bold; color: var(--blue); }
        .divider { width: 100%; height: 2px; background-color: white; opacity: 0.3; margin: 20px 0; }
        .menu { display: flex; flex-direction: column; gap: 18px; }
        .menu-item { display: flex; align-items: center; gap: 16px; font-size: 18px; cursor: pointer; }
        .menu-item svg { font-size: 22px; }
        .menu-item.active { background-color: var(--gray); color: var(--blue); font-weight: bold; padding: 10px 12px; border-radius: 20px; }
        .main-content { flex: 1; display: flex; flex-direction: column; padding: 0px; }
        .header-box { display: flex; align-items: center; gap: 12px; padding: 10px 70px; background-color: var(--blue); color: white; margin-bottom: 20px; }
        .back-icon { font-size: 24px; cursor: pointer; }
        .header-title { font-size: 20px; font-weight: bold; flex: 1; text-align: center; }
        .main-container { background-color: var(--gray); padding: 20px; border-radius: 20px; display: flex; flex-direction: column; gap: 20px; }
        .decision { background: #a9a5a5; padding: 16px; border-radius: 12px; display: flex; flex-direction: column; }
        .decision h3 { font-size: 16px; font-weight: 600; color:#3b3b3b; margin-bottom: 10px; }
        .decision-buttons { display: flex; justify-content: space-between; }
        .annual-btn { background-color: #4da97b; color: white; border: none; padding: 8px 14px; border-radius: 8px; cursor: pointer; }
        .credit-btn { background-color: var(--blue); color: white; border: none; padding: 8px 14px; border-radius: 8px; cursor: pointer; }
        .semester-buttons { display: flex; justify-content: center; gap: 350px; margin: 20px 0; }
        .sem-btn { width: 120px; background-color: #a9a5a5; color: var(--blue); border: none; padding: 10px 0; font-size: 15px; font-weight: bold; border-radius: 30px; cursor: pointer; transition: 0.2s; }
        .sem-btn:hover { opacity: 0.85; }
        .semesters { display: flex; gap: 25px; }
        .semester { flex: 1; background: #a9a5a5; padding: 14px; border-radius: 20px; }
        .semester-head { display: flex; justify-content: space-between; align-items: center; margin-bottom: 12px; color: var(--blue); font-weight: bold; }
        .semester-average { padding: 5px 10px; border-radius: 8px; font-weight: bold; min-width: 70px; text-align: center; }
        .semester-average.good { background-color: #abf8d4; color: #029d55; }
        .semester-average.bad { background-color: #f5656f; color: #f80011; }
        .credit-pill { background: var(--blue); color: white; padding: 4px 8px; border-radius: 10px; font-weight: 400; font-size: 16px; display: inline-block; margin-bottom: 5px; }
        .semester-table-container { background-color: var(--gray); padding: 15px; border-radius: 12px; margin-bottom: 20px; }
        .semester-table-container table th, .semester-table-container table td { color: var(--blue); }
        .grades { width: 100%; border-collapse: collapse; }
        .grades th, .grades td { padding: 8px 10px; border: 1px solid var(--muted); text-align: left; }
        .row-alert td { background-color: #f5656f; }
        .row-success td { background-color: #abf8d4; }
        .bold { font-weight: bold; }
      `}</style>

      <aside className="sidebar">
        <div className="profile">
          <div className="avatar"></div>
          <div className="profile-text">
            <p className="name">First and Last Name</p>
            <p className="spec">Spécialité</p>
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

              <div className="menu-item">
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

              <div className="menu-item active">
                <svg viewBox="0 0 24 24"width="24" height="24"><path fill="white" d="M6 2h12v20H6z"/></svg>
                Transcript
              </div>
          </div>
      </aside>

      <div className="main-content">
        <header className="header-box">
          <div className="back-icon">
  <svg viewBox="0 0 24 24" width="28" height="28">
    <path fill="white" d="M15.41 7.41L14 6l-6 6 6 6 1.41-1.41L10.83 12z"/>
  </svg>
</div>

          <h1 className="header-title">Transcript</h1>
        </header>

        <div className="main-container">
          <div className="decision">
            <h3>Decision: Admitted (Normal section) (With debts) (Buyback).</h3>
            <div className="decision-buttons">
              <button className="annual-btn">Annual Average : 10,86</button>
              <button className="credit-btn">Credits :60</button>
            </div>
          </div>

          <div className="semester-buttons">
            <button className="sem-btn">Semester 1</button>
            <button className="sem-btn">Semester 2</button>
          </div>

          <section className="semesters">
            {[1, 2].map((sem) => (
              <div className="semester" key={sem}>
                <div className="semester-head">
                  <div className="degree">Master 1 : Génie Logiciel</div>
                  <div className={`semester-average ${sem === 1 ? "bad" : "good"}`}>
                    {sem === 1 ? "Average :8.26" : "Average :13.45"}
                  </div>
                </div>

                <div className="credit-pill">
                  Credit : <strong>{sem === 1 ? "15" : "30"}</strong>
                </div>

                <div className="semester-table-container">
                  <table className="grades">
                    <thead>
                      <tr>
                        <th>Module</th>
                        <th>Coef</th>
                        <th>Credit</th>
                        <th>Average</th>
                      </tr>
                    </thead>
                    <tbody>
                      <tr>
                        <td>{sem === 1 ? "Calcul haute performance" : "Data Science"}</td>
                        <td>{sem === 1 ? 1 : 2}</td>
                        <td>{sem === 1 ? 0 : 4}</td>
                        <td>{sem === 1 ? "8.99" : "9.66"}</td>
                      </tr>
                      <tr>
                        <td>{sem === 1 ? "Anglais" : "Analyse de Donnees"}</td>
                        <td>1</td>
                        <td>{sem === 1 ? 0 : 4}</td>
                        <td>{sem === 1 ? "9.20" : "13.55"}</td>
                      </tr>
                      <tr className={sem === 1 ? "row-alert" : "row-success"}>
                        <td>{sem === 1 ? "(U.E.D) C00D0000IS6" : "(U.E.R) 0C00R00002S9"}</td>
                        <td>0</td>
                        <td>4</td>
                        <td className="bold">{sem === 1 ? "9.09" : "14.00"}</td>
                      </tr>
                    </tbody>
                  </table>
                </div>
              </div>
            ))}
          </section>
        </div>
      </div>
    </div>
  );
}
