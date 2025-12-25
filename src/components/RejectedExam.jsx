import React from "react";

export default function RejectedExam() {
  const exams = [
    { type: "Final Exam", module: "Anglais", level: "L1", date: "2025-09-11", room: "Amphi 1", responsible: "BENALIA", status: "On hold" },
    { type: "Assessment", module: "BDD", level: "M2", date: "2025-10-13", room: "Room N001", responsible: "SABRID", status: "Valid" },
    { type: "TP Note", module: "Réseau", level: "L3", date: "2025-12-12", room: "Lab info 1", responsible: "KADDOUR.F", status: "Rejected" },
  ];

  return (
    <>
      <style>{`
        body { font-family: Arial, sans-serif; background: #f3f4f6; margin: 0; }
        .wrapper { max-width: 1000px; margin: auto; padding: 20px; }

        /* HEADER */
        .big-header { display: flex; justify-content: space-between; align-items: center; background: #c1befdff; padding: 20px 25px; border-radius: 12px; margin-bottom: 15px; }
        .big-left { display: flex; align-items: center; gap: 12px; }
        .icon-white { width: 36px; height: 36px; background: #4720bdff; color: #fff; border-radius: 50%; display: flex; align-items: center; justify-content: center; font-weight: bold; font-size: 18px; }
        .big-left span { font-weight: bold; font-size: 20px; color: #0f0e0eff; }
        .big-right { display: flex; align-items: center; gap: 10px; }
        .icon-alert, .icon-purple { width: 36px; height: 36px; border-radius: 50%; display: flex; align-items: center; justify-content: center; font-weight: bold; font-size: 18px; }
        .icon-alert { background: #8461b9ff; color: #040404ff; }
        .icon-purple { background: #4720bdff; color: #fff; }
        .doctor-name { font-weight: bold; color: #0f0e0eff; font-size: 15px; }

        /* TOPBAR */
        .topbar { display: flex; justify-content: space-between; align-items: center; margin-bottom: 10px; }
        .topbar-left, .topbar-right { display: flex; align-items: center; gap: 10px; padding: 8px 15px; border-radius: 12px; cursor: pointer; font-weight: bold; font-size: 16px; }
        .topbar-left { background: white; color: #000; }
        .topbar-left .icon { background: #fef8f8ff; color: white; width: 28px; height: 28px; border-radius: 50%; display: flex; align-items: center; justify-content: center; font-size: 20px; }
        .topbar-right { background: #150f86ff; color: white; }
        .topbar-right .icon { background: white; color: #05006bff; width: 28px; height: 28px; border-radius: 50%; display: flex; align-items: center; justify-content: center; font-size: 20px; }

        /* MENU rectangles under topbar */
        .menu-rectangles { display: flex; gap: 50px; background: #e0e0e0; padding: 8px; border-radius: 12px; margin-bottom: 30px; }
        .menu-item { display: flex; align-items: center; gap: 10px; padding: 7px 15px; background: white; border-radius: 12px; cursor: pointer; font-weight: bold; font-size: 16px; color: black; transition: all 0.2s ease; }
        .menu-item .icon { font-size: 22px; }
        .menu-item.active { background: #150f86ff; color: white; }
        .menu-item:hover { transform: scale(1.05); }

        /* Filters as big rectangle */
        .filters { display: flex; justify-content: space-between; margin-bottom: 15px; background: #e0e0e0; padding: 12px; border-radius: 12px; }
        .filter-group { display: flex;align-items: center; gap: 20px; }
        .filter-main-icon {width: 45px;height: 45px;border-radius: 50%;background: #ffffffff;color: white; display: flex; align-items: center;justify-content: center;font-size: 22px;}
        .filter { border: none; background: #b0b0b0; color: black; padding: 8px 18px; border-radius: 12px; cursor: pointer; font-weight: bold; font-size: 14px; transition: all 0.2s ease; }
        .filter.active { background: #00a2ffff; color: black; }
        .export { background: #333; color: #fff; border: none; padding: 6px 15px; border-radius: 5px; cursor: pointer; font-size:16px; }
        .search-box {display: flex;align-items: center;gap: 8px;background: white;padding: 6px 12px; border-radius: 12px;}
        .search-input {border: none;outline: none;font-size: 14px;background: transparent;}

        table { width: 100%; border-collapse: collapse; background: #fff; border-radius: 10px; overflow: hidden; margin-top: 20px; }
        th, td { padding: 12px; text-align: center; }
        thead { background: #f0f0f0; }
        .status { padding: 5px 12px; border-radius: 15px; font-size: 12px; color: #fff; }
        .on-hold { background: #f39c55ff;color:#924303ff; }
        .valid { background: #25b3a2ff; color:#024d44ff;}
        .rejected { background: #f45865ff;color:#980511ff; }
        .actions { display: flex; justify-content: center; gap: 10px; }
        .icon { cursor: pointer; font-size: 18px; }
        .accept { color: green; }
        .reject { color: red; }
        .view { color: #0077b6; }
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
            Dashboard
          </div>
          <div className="topbar-right">
            <div className="icon">✔️</div>
            Validation
          </div>
        </div>

        {/* MENU rectangles with emoji/icons */}
        <div className="menu-rectangles">
          <div className="menu-item active"><span className="icon">📘</span> Exam</div>
          <div className="menu-item"><span className="icon">👨‍🏫</span> Teachers</div>
          <div className="menu-item"><span className="icon">👨‍🎓</span> Students</div>
          <div className="menu-item"><span className="icon">📋</span> Modules</div>
          <div className="menu-item"><span className="icon">🚪</span> Rooms</div>
        </div>

        {/* Filters in big gray rectangle */}
        <div className="filters">
          <div className="filter-group">
            {/* Big filter icon */}
            <div className="filter-main-icon">🎚️</div>
            {/* Search with icon */}
            <div className="search-box">
              <span className="search-icon">🔍</span>
              <input type="text" placeholder="Search..." className="search-input" />
            </div>

            <button className="filter">All</button>
            <button className="filter">On hold</button>
            <button className="filter">Valid</button>
            <button className="filter  active">Rejected</button>
          </div>

          <button className="export">⬇️ Export</button>
        </div>

        {/* Table - Only "Rejected" */}
        <table>
          <thead>
            <tr>
              <th>TYPE</th>
              <th>MODULE</th>
              <th>LEVEL</th>
              <th>DATE</th>
              <th>ROOM</th>
              <th>RESPONSABLE</th>
              <th>STATUT</th>
              <th>ACTION</th>
            </tr>
          </thead>
          <tbody>
            {exams
              .filter(exam => exam.status === "Rejected")
              .map((exam, index) => (
                <tr key={index}>
                  <td>{exam.type}</td>
                  <td>{exam.module}</td>
                  <td>{exam.level}</td>
                  <td>{exam.date}</td>
                  <td>{exam.room}</td>
                  <td>{exam.responsible}</td>
                  <td>
                    <span className="status rejected">{exam.status}</span>
                  </td>
                  <td className="actions">
                    <span className="icon view">👁️</span>
                  </td>
                </tr>
              ))}
          </tbody>
        </table>
      </div>
    </>
  );
}
