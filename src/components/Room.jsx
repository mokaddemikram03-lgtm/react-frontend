import React, { useState } from "react";
import { Calendar, Users, UserCheck, BookOpen, Home, Search, Plus, Edit2, Trash2 } from "lucide-react";

export default function Room() {
  const [activeTab, setActiveTab] = useState("Rooms");

  const [rooms] = useState([
    { id: 1, room: "Amphi 6", ability: "300", type: "Amphitheater", equipment: "Projector", status: "Available" },
    { id: 2, room: "Room N 108", ability: "50", type: "TP informatique", equipment: "30 PC", status: "Occupied" },
  ]);

  const tabs = [
    { name: "Years", icon: Calendar },
    { name: "Semester", icon: () => <div className="circle-icon"></div> },
    { name: "Levels", icon: () => <div className="level-bars"><div className="bar h1"></div><div className="bar h2"></div><div className="bar h3"></div></div> },
    { name: "Groups", icon: Users },
    { name: "Teachers", icon: UserCheck },
    { name: "Students", icon: Users },
    { name: "Modules", icon: BookOpen },
    { name: "Rooms", icon: Home },
  ];

  return (
    <div className="page">
      <style>{`
        .page { background: #d9d9d9; padding: 40px; min-height: 100vh; font-family:sans-serif; }
        .admin-box { background: white; border-radius: 12px; padding-bottom: 30px; box-shadow: 0 4px 10px rgba(0,0,0,0.1); }
        .header { display: flex; justify-content: space-between; padding: 25px 40px; border-bottom: 2px solid #ddd; align-items: center; }
        .left { display: flex; gap: 15px; align-items: center; }
        .logo-box { width:48px;height:48px;background:#0f056b;border-radius:8px;color:white;display:flex;align-items:center;justify-content:center;font-size:22px; }
        .title-text h1 { margin:0;font-size:20px;font-weight:bold; }
        .title-text p { margin:0;color:gray;font-size:13px; }
        .center { display:flex; align-items:center; gap:12px; }
        .year-logo { width:35px;height:35px; object-fit:contain; }
        .center h2 { font-size:20px;font-weight:bold; }
        .right { display:flex; align-items:center; gap:12px; }
        .admin-info .name { margin:0;font-weight:bold; }
        .admin-info .email { margin:0;color:gray;font-size:13px; }
        .admin-avatar { width:48px;height:48px;background:#0f056b;color:white;border-radius:50%;display:flex;justify-content:center;align-items:center;font-weight:bold; }
        .tabs { display:flex;gap:12px;padding:20px 40px;border-bottom:2px solid #eee; }
        .tab { display:flex;align-items:center;gap:6px;padding:10px 18px;border-radius:8px;background:transparent;border:none;cursor:pointer;font-weight:500;color:#444; }
        .tab:hover { background:#f0f0f0; }
        .tab.active { background:#0f056b;color:white; }
        .icon { width:18px;height:18px; }
        .search-add { display:flex;gap:60px;padding:25px 40px; }
        .search-box { flex:1; position:relative; left:-10px; }
        .search-box input { width:100%;padding:12px 14px 12px 40px;background:#aaaaaa;border-radius:8px;border:none; }
        .search-icon { position:absolute; top:50%; left:12px; transform:translateY(-50%); color:gray; }
        .btn-add { background:#0f056b;color:white;padding:12px 20px;border-radius:8px;border:none;display:flex;gap:8px;align-items:center;cursor:pointer; }
        .table-container { padding:0 40px 40px 40px; }
        table { width:100%; border-collapse:collapse; }
        th { text-align:left;padding:12px;font-weight:bold; background:white; }
        td { padding:14px 12px;color:#555; }
        
        tbody tr { background: #f0f0f0; border-bottom: 1px solid #e5e5e5; }
        tbody tr:nth-child(even) { background:#e0e0e0; }
        .status { padding:6px 12px; border-radius:12px; font-weight:bold; text-align:center; display:inline-block; }
        .status.Available { background:#6ef188ff; color:#000; }
        .status.Occupied { background:#f85353ff; color:#000; }
        .btn-edit { color:#0055cc;border:none;cursor:pointer;background:transparent; }
        .btn-delete { color:#d60000;border:none;cursor:pointer;background:transparent; }
      `}</style>

      <div className="admin-box">
        <header className="header">
          <div className="left">
            <div className="logo-box">📊</div>
            <div className="title-text">
              <h1>Administration</h1>
              <p>Gestion Universitaire</p>
            </div>
          </div>
          <div className="center">
            <img src="/logo tlm.png" alt="logo" className="year-logo" />
            <h2>UNIVERSITY OF TLEMCEN</h2>
          </div>
          <div className="right">
            <div className="admin-info">
              <p className="name">Admin</p>
              <p className="email">admin@univ.dz</p>
            </div>
            <div className="admin-avatar">A</div>
          </div>
        </header>

        <nav className="tabs">
          {tabs.map((tab) => {
            const Icon = tab.icon;
            const active = activeTab === tab.name;
            return (
              <button key={tab.name} onClick={() => setActiveTab(tab.name)} className={active ? "tab active" : "tab"}>
                <Icon className="icon" />
                <span>{tab.name}</span>
              </button>
            );
          })}
        </nav>

        <div className="search-add">
          <div className="search-box">
            <Search className="search-icon" />
            <input type="text" placeholder="To research..." />
          </div>
          <button className="btn-add">
            <Plus />
            Add
          </button>
        </div>

        <div className="table-container">
          <table>
            <thead>
              <tr>
                <th>ROOM</th>
                <th>ABILITY</th>
                <th>TYPE</th>
                <th>EQUIPMENT</th>
                <th>STATUS</th>
                <th>ACTIONS</th>
              </tr>
            </thead>
            <tbody>
              {rooms.map((item) => (
                <tr key={item.id}>
                  <td>{item.room}</td>
                  <td>{item.ability}</td>
                  <td>{item.type}</td>
                  <td>{item.equipment}</td>
                  <td>
                    <span className={`status ${item.status}`}>{item.status}</span>
                  </td>
                  <td>
                    <button className="btn-edit"><Edit2 /></button>
                    <button className="btn-delete"><Trash2 /></button>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </div>
    </div>
  );
}
