import React from "react";
 
export default function Alertes() {
  const alertes = [
    {
      message: "12 étudiants sans groupe assigné",
      priorite: "Priorité haute",
      color: "#E9C3B5",
      borderColor: "#C4512B",
    },
    {
      message: "Inscription Semestre 2 ouvre dans 15 jours",
      priorite: "Priorité moyenne",
      color: "#A8D2F0",
      borderColor: "#0073C6",
    },
    {
      message: "3 modules sans enseignant responsable",
      priorite: "Priorité haute",
      color: "#E9C3B5",
      borderColor: "#C4512B",
    },
  ];
 
  return (
<div style={styles.wrapper}>
<h3 style={styles.title}>Alertes</h3>
 
      <div style={styles.list}>
        {alertes.map((a, i) => (
<div key={i} style={{ ...styles.card, background: a.color }}>
<div
              style={{
                ...styles.leftAccent,
                background: a.borderColor,
              }}
></div>
 
            <div style={styles.content}>
<div style={styles.rowTop}>
<span style={styles.icon}>⚠️</span>
<span style={styles.message}>{a.message}</span>
</div>
<p style={styles.priorite}>{a.priorite}</p>
</div>
</div>
        ))}
</div>
</div>
  );
}
 
/* =============================
            STYLES
============================= */
const styles = {
  wrapper: {
    background: "#FFF",
    padding: "25px",
    borderRadius: "12px",
    marginTop: "20px",
    boxShadow: "0 2px 8px rgba(0,0,0,0.1)",
  },
 
  title: {
    fontSize: "18px",
    marginBottom: "20px",
  },
 
  list: {
    display: "flex",
    flexDirection: "column",
    gap: "15px",
  },
 
  card: {
    display: "flex",
    alignItems: "center",
    borderRadius: "12px",
    padding: "12px 18px",
    position: "relative",
  },
 
  leftAccent: {
    width: "10px",
    height: "100%",
    borderRadius: "10px",
    marginRight: "15px",
  },
 
  content: {
    display: "flex",
    flexDirection: "column",
  },
 
  rowTop: {
    display: "flex",
    alignItems: "center",
    gap: "10px",
  },
 
  icon: {
    fontSize: "20px",
  },
 
  message: {
    fontSize: "16px",
    fontWeight: "600",
  },
 
  priorite: {
    marginTop: "5px",
    fontSize: "13px",
    color: "#555",
  },
};