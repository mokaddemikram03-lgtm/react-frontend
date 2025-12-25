import React from "react";

export default function DashbordChef() {
  return (
    <>
      <style>{`
        body {
          margin: 0;
          background: #f3f4f6;
          font-family: Arial, sans-serif;
        }

        .wrapper { max-width: 900px; margin: auto; padding: 20px; }

        .big-header { display: flex; justify-content: space-between; align-items: center; background: #c1befdff; padding: 20px 25px; border-radius: 12px; margin-bottom: 25px; }
        .big-left { display: flex; align-items: center; gap: 12px; }
        .icon-white { width: 36px; height: 36px; background: #4720bdff; color: #ffffff; border-radius: 50%; display: flex; align-items: center; justify-content: center; font-weight: bold; font-size: 18px; }
        .big-left span { font-weight: bold; font-size: 20px; color: #0f0e0eff; }
        .big-right { display: flex; align-items: center; gap: 10px; }
        .icon-alert, .icon-purple { width: 36px; height: 36px; border-radius: 50%; display: flex; align-items: center; justify-content: center; font-weight: bold; font-size: 18px; }
        .icon-alert { background: #8461b9ff; color: #040404ff; }
        .icon-purple { background: #4720bdff; color: #ffffff; }
        .doctor-name { font-weight: bold; color: #0f0e0eff; font-size: 15px; }

        .topbar { display: flex; justify-content: space-between; align-items: center; margin-bottom: 25px; }
        .topbar-left { display: flex; align-items: center; gap: 10px; background: #292399ff; padding: 1px 15px; border-radius: 12px; color: white; width: 150px; height: 50px; justify-content: center; }
        .topbar-left .icon { width: 28px; height: 28px; background: white; color: #6c63ff; border-radius: 50%; display: flex; align-items: center; justify-content: center; font-weight: bold; }
        .topbar-right { display: flex; align-items: center; gap: 8px; font-weight: bold; }
        .topbar-right .icon { width: 28px; height: 28px; background: #333; color: white; border-radius: 50%; display: flex; align-items: center; justify-content: center; }

        .stats { display: flex; flex-direction: column; gap: 20px; margin-bottom: 30px; }
        .stat { background: #e0e0e0; border-radius: 14px; padding: 20px; display: flex; justify-content: space-between; align-items: center; width: 80%; margin: 0 auto; }
        .stat-left { display: flex; align-items: center; gap: 16px; }
        .icon { width: 40px; height: 40px; border-radius: 50%; display: flex; align-items: center; justify-content: center; color: white; font-size: 18px; }
        .blue-bg { background: #2196f3; }
        .green-bg { background: #4caf50; }
        .red-bg { background: #f61000ff; }
        .stat-text { display: flex; flex-direction: column; align-items: center; }
        .stat-title { font-weight: bold; text-align: center; }
        .stat-sub { font-size: 13px; color: #555; text-align: center; }
        .stat-number { font-size: 26px; font-weight: bold; }
        .blue { color: #2196f3; }
        .green { color: #4caf50; }
        .red { color: #ff1100ff; }

        .section { background: #e0e0e0; border-radius: 12px; padding: 18px; margin-bottom: 25px; }
        .section h3 { font-size: 20px; margin-bottom: 15px; }
        .section h3 span { font-size: 28px; }

        .exam { border-radius: 10px; padding: 15px; display: flex; flex-direction: column; gap: 10px; background: #f6f6f6; }
        .exam + .exam { margin-top: 20px; } 
        .exam-orange { background: #ffffffff; }
        .badge-blue { background: #2196f3; color: black; }
        .badge-orange { background: #fe8742ff; color: black; }

        .exam-top { display: flex; justify-content: space-between; align-items: center; }
        .exam-left { text-align: left; flex: 1;font-size:px; }
        .exam-center { text-align: center; flex: 1; }
        .exam-right { text-align: right; flex: 1; }
        .badge { font-size: 20px; padding: 4px 10px; border-radius: 20px; display: inline-block; }
        .actions { display: flex; gap: 10px; justify-content: flex-end; }
        .ok, .no { width: 28px; height: 28px; border-radius: 50%; color: white; display: flex; align-items: center; justify-content: center; }
        .ok { background: #4caf50; }
        .no { background: #f44336; }

        .exam-details { display: flex; flex-direction: column; gap: 10px; font-size: 16px; }
        .exam-details-row { display: flex; justify-content: space-between; width: 100%; }
        .exam-details div { display: flex; align-items: center; gap: 8px; font-size: 20px; }

        /* CHART CARD */
        .chart-card { background:white; padding:15px; border-radius:10px; margin-top:20px; }

        .status-item { display:flex; flex-direction:column; margin-bottom:20px; }
        .status-label { font-weight:bold; margin-bottom:8px; font-size:18px; display:flex; align-items:center; gap:10px; }
        .status-bar { width:100%; height:12px; border-radius:6px; }
        
      `}</style>

      <div className="wrapper">
        {/* HEADER */}
        <div className="big-header">
          <div className="big-left">
            <div className="icon-white">🏫</div>
            <span>Head of Department</span>
          </div>
          <div className="big-right">
            <div className="icon-alert">🔔</div>
            <span className="doctor-name">DR. BENMAHAMED</span>
            <div className="icon-purple">B</div>
          </div>
        </div>

        {/* TOPBAR */}
        <div className="topbar">
          <div className="topbar-left">
            <div className="icon">🏠</div>
            <h2>Dashboard</h2>
          </div>
          <div className="topbar-right">
            <div className="icon">✔</div>
            <span>Validation</span>
          </div>
        </div>

        {/* STATS */}
        <div className="stats">
          <div className="stat">
            <div className="stat-left">
              <div className="icon blue-bg">⏳</div>
              <div className="stat-text">
                <div className="stat-title">Exam pending</div>
                <div className="stat-sub">Require validation</div>
              </div>
            </div>
            <div className="stat-number blue">2</div>
          </div>
          <div className="stat">
            <div className="stat-left">
              <div className="icon green-bg">✔</div>
              <div className="stat-text">
                <div className="stat-title">Exam passed</div>
                <div className="stat-sub">This month</div>
              </div>
            </div>
            <div className="stat-number green">1</div>
          </div>
          <div className="stat">
            <div className="stat-left">
              <div className="icon red-bg">✖</div>
              <div className="stat-text">
                <div className="stat-title">Exam passed</div>
                <div className="stat-sub">To be reviewed</div>
              </div>
            </div>
            <div className="stat-number red">3</div>
          </div>
        </div>

        {/* SECTION EXAMS */}
        <div className="section">
          <h3><span>📘</span> Final exams to be completed</h3>

          <div className="exam">
            <div className="exam-top">
              <div className="exam-left"><p><strong>Algorithmique</strong></p></div>
              <div className="exam-center"><div className="badge badge-orange">Final exam</div></div>
              <div className="exam-right">
                <div className="actions">
                  <div className="ok">✔</div>
                  <div className="no">✖</div>
                </div>
              </div>
            </div>
            <div className="exam-details">
              <div className="exam-details-row">
                <div><span>📅</span> Date : 2025-12-15</div>
                <div><span>👤</span> Resp : BENALI Ahmed</div>
              </div>
              <div className="exam-details-row">
                <div><span>🎓</span>Level : L1</div>
                <div><span>🏫</span>Room : Amphi 2</div>
              </div>
            </div>
          </div>

          <div className="exam exam-orange">
            <div className="exam-top">
              <div className="exam-left"><p><strong>Base de donnees</strong></p></div>
              <div className="exam-center"><div className="badge badge-blue">Assessment</div></div>
              <div className="exam-right">
                <div className="actions">
                  <div className="ok">✔</div>
                  <div className="no">✖</div>
                </div>
              </div>
            </div>
            <div className="exam-details">
              <div className="exam-details-row">
                <div><span>📅</span> Date : 2025-12-01</div>
                <div><span>👤</span> Resp : KADDOUR Fatima</div>
              </div>
              <div className="exam-details-row">
                <div><span>🎓</span>Level : M2</div>
                <div><span>🏫</span>Room : Room N002</div>
              </div>
            </div>
          </div>

          {/* Breakdown by Status */}
          <h3><span>📘</span> Breakdown by status</h3>
          <div className="chart-card">
            <div className="status-item">
              <div className="status-label">
                
                On Hold
              </div>
              <div className="status-bar" style={{width:'50%', background:'#2196f3'}}></div>
            </div>

            <div className="status-item">
              <div className="status-label">
                
                Valid
              </div>
              <div className="status-bar" style={{width:'100%', background:'#4caf50'}}></div>
            </div>

            <div className="status-item">
              <div className="status-label">

                Rejected
              </div>
              <div className="status-bar" style={{width:'45%', background:'#f44336'}}></div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
