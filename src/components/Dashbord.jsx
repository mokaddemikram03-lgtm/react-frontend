import React from "react";
import styled from "styled-components";
import { Calendar } from "lucide-react";
import { Users, UserCheck, BookOpen, Home } from "lucide-react";

export default function Dashbord() {
  return (
    <Container>

      {/* ---------------- Header ---------------- */}
      <Header>
        <HeaderLeft>
          <HeaderIcon />
          <div>
            <TitleButton>Dashboard Administrateur</TitleButton>
            <Subtitle>Vue d’ensemble du système</Subtitle>
          </div>
        </HeaderLeft>

        <Select>
          <option>Ce mois</option>
          <option>Cette semaine</option>
          <option>Cette année</option>
        </Select>

        <HeaderRight>
          <div>
            <AdminName>Admin</AdminName>
            <AdminMail>admin@univ.dz</AdminMail>
          </div>
          <Avatar>A</Avatar>
        </HeaderRight>
      </Header>

      {/* ---------------- Année Universitaire ---------------- */}
      <YearBox>
        <YearInfo>
          <YearTitle>
            <CalendarIcon /> {/* Icône devant le texte */}
            Année Universitaire 2025-2026
          </YearTitle>
          <p>Semestre 1 du 21/09/2025 au 31/01/2026</p>
        </YearInfo>

        <DaysLeft>
          <h1>142</h1>
          <p>jours restants</p>
        </DaysLeft>
      </YearBox>

      {/* ---------------- Statistiques ---------------- */}
      <StatsRow>
        <StatCard bg="#E9D8FD">
          <StatTop>
            <StatIcon><Users size={32} /></StatIcon>
            <StatPercent>+12%</StatPercent>
          </StatTop>
          <StatLabel>Étudiants Inscrits</StatLabel>
          <StatNumber>1.248</StatNumber>
        </StatCard>

        <StatCard bg="#F6EEC1">
          <StatTop>
            <StatIcon><UserCheck size={32} /></StatIcon>
            <StatPercent>+5%</StatPercent>
          </StatTop>
          <StatLabel>Enseignants Actifs</StatLabel>
          <StatNumber>87</StatNumber>
        </StatCard>

        <StatCard bg="#D0F5C8">
          <StatTop>
            <StatIcon><BookOpen size={32} /></StatIcon>
            <StatPercent>+8%</StatPercent>
          </StatTop>
          <StatLabel>Modules Actifs</StatLabel>
          <StatNumber>156</StatNumber>
        </StatCard>

        <StatCard bg="#F7C5C5">
          <StatTop>
            <StatIcon><Home size={32} /></StatIcon>
            <StatPercent>0%</StatPercent>
          </StatTop>
          <StatLabel>Salles Disponibles</StatLabel>
          <StatNumber>42</StatNumber>
        </StatCard>
      </StatsRow>

      {/* ---------------- Répartition ---------------- */}
      <ChartCard>
        <ChartTitle>Répartition des étudiants par niveau</ChartTitle>
        {renderRow("Licence 1", 420, "#022784ff")}
        {renderRow("Licence 2", 380, "#0467caff")}
        {renderRow("Licence 3", 320, "#66ccf7ff")}
        {renderRow("Master 1", 98, "#3e034aff")}
        {renderRow("Master 2", 30, "#580270ff")}

        <TotalBox>
          <p>Total des étudiants</p>
          <h3>1248</h3>
        </TotalBox>
      </ChartCard>

      {/* ---------------- Section Alertes ---------------- */}
      <Card>
        <CardTitle>Alertes</CardTitle>
        <Alert color="red" text="12 étudiants sans groupe assigné" priority="Priorité haute" />
        <Alert color="blue" text="Inscription Semestre 2 ouvre dans 15 jours" priority="Priorité moyenne" />
        <Alert color="red" text="3 modules sans enseignant responsable" priority="Priorité haute" />
      </Card>

      {/* ---------------- Section Activités récentes ---------------- */}
      <Card>
        <CardTitle>Activités récentes</CardTitle>
        <ActivityItem icon="🧑‍🎓" title="Ajout • Étudiant" subtitle="MAHMOUD Yacine" time="2 min" color="green" />
        <ActivityItem icon="✏️" title="Modification • Module" subtitle="Algorithmique avancée" time="15 min" color="blue" />
        <ActivityItem icon="❌" title="Suppression • Salle" subtitle="Amphi 5" time="1 h" color="red" />
        <ActivityItem icon="👨‍🏫" title="Ajout • Enseignant" subtitle="Dr. BENALI Ahmed" time="2 h" color="green" />
        <ActivityItem icon="✏️" title="Modification • Groupe" subtitle="Groupe A - L1" time="3 h" color="blue" />
      </Card>

      {/* ---------------- Section Actions rapides ---------------- */}
      <Card>
        <CardTitle>Actions rapides</CardTitle>
        <ActionsColumn>
          <ActionCard color="#0c46a5ff">
            <ActionIcon>🧑‍🎓</ActionIcon>
            Ajouter un étudiant
          </ActionCard>
          <ActionCard color="#8224e0ff">
            <ActionIcon>👨‍🏫</ActionIcon>
            Ajouter un enseignant
          </ActionCard>
          <ActionCard color="#04431bff">
            <ActionIcon>📚</ActionIcon>
            Ajouter un module
          </ActionCard>
          <ActionCard color="#a50d0dff">
            <ActionIcon>🏫</ActionIcon>
            Ajouter une salle
          </ActionCard>
        </ActionsColumn>
      </Card>

    </Container>
  );
}

/* ---------------- Render functions ---------------- */
function renderRow(label, value, color) {
  return (
    <BarRow key={label}>
      <div style={{ display: "flex", justifyContent: "space-between" }}>
        <span>{label}</span>
        <span>{value} étudiants</span>
      </div>
      <BarBG>
        <BarFill style={{ width: `${(value / 420) * 100}%`, background: color }} />
      </BarBG>
    </BarRow>
  );
}

function ActivityItem({ icon, title, subtitle, time, color }) {
  return (
    <Item>
      <Left>
        <Icon color={color}>{icon}</Icon>
        <div>
          <ItemTitle>{title}</ItemTitle>
          <ItemSub>{subtitle}</ItemSub>
        </div>
      </Left>
      <Time>{time}</Time>
    </Item>
  );
}

function Alert({ color, text, priority }) {
  return (
    <AlertCard color={color}>
      <AlertText>{text}</AlertText>
      <AlertPriority>{priority}</AlertPriority>
    </AlertCard>
  );
}

/* ---------------- Styled Components ---------------- */

const Container = styled.div`
  max-width: 1100px;
  margin: auto;
  padding: 20px;
  font-family: sans-serif;
`;

/* Header */
const Header = styled.div`
  display:flex; justify-content:space-between; align-items:center;
  background:white; padding:15px; border-radius:15px; margin-bottom:20px;
  box-shadow:0 3px 6px rgba(0,0,0,0.1);
`;
const HeaderLeft = styled.div`display:flex; align-items:center; gap:12px;`;
const HeaderIcon = styled.div`width:45px; height:45px; border-radius:10px; background:#0F056B;`;
const TitleButton = styled.button`
  background: #0F056B;
  color: white;
  border: none;
  padding: 8px 16px;
  border-radius: 8px;
  font-size: 16px;
  font-weight: bold;
  cursor: pointer;

  &:hover {
    background: #0c0455;
    transition: 0.3s;
  }
`;
const Subtitle = styled.p`margin:0; font-size:12px; color:gray;`;
const Select = styled.select`padding:8px; border-radius:8px; border:1px solid #ccc;`;
const HeaderRight = styled.div`display:flex; align-items:center; gap:12px;`;
const AdminName = styled.p`margin:0; font-weight:bold;`;
const AdminMail = styled.p`margin:0; font-size:12px; color:gray;`;
const Avatar = styled.div`
  width:40px; height:40px; border-radius:50%; background:#0F056B;
  color:white; display:flex; align-items:center; justify-content:center; font-weight:bold;
`;

/* Year Box */
const YearBox = styled.div`
  background:#0F7ADB; color:white; border-radius:15px;
  display:flex; justify-content:space-between; padding:10px 10px 0px 40px; margin-bottom:20px;
`;
const YearInfo = styled.div`display:flex; flex-direction:column; gap:10px;`;
const YearTitle = styled.h3`
  display:flex; align-items:center; margin:0; font-size:18px; gap:8px;
`;
const CalendarIcon = styled(Calendar)`width:24px; height:24px; color:white;`;
const DaysLeft = styled.div`text-align:right;`;

/* Stats */
const StatsRow = styled.div`
  display: flex;
  gap: 15px;
  margin-bottom: 20px;
`;

const StatCard = styled.div`
  flex:1;
  padding:15px;
  border-radius:12px;
  box-shadow:0 3px 6px rgba(0,0,0,0.1);
  background:${props => props.bg};
  display:flex;
  flex-direction:column;
  gap:10px;
`;

const StatTop = styled.div`
  display:flex;
  justify-content:space-between;
  align-items:center;
`;

const StatIcon = styled.div`
  display:flex;
  align-items:center;
  justify-content:center;
  width:50px;
  height:50px;
  border-radius:12px;
  background: rgba(255,255,255,0.3);
`;

const StatLabel = styled.p`
  font-size:13px;
  text-align:center;
  margin:0;
`;

const StatNumber = styled.h2`
  font-size:22px;
  font-weight:bold;
  text-align:center;
  margin:0;
`;

const StatPercent = styled.span`
  font-weight:600;
  font-size:14px;
  color:#0F056B;
`;

/* Chart */
const ChartCard = styled.div`background:white; padding:20px; border-radius:15px; box-shadow:0 3px 6px rgba(0,0,0,0.1);`;
const ChartTitle = styled.h3`margin-bottom:20px;`;
const BarRow = styled.div`margin-bottom:14px; display:flex; flex-direction:column; gap:5px;`;
const BarBG = styled.div`width:100%; height:8px; background:#ddd; border-radius:5px;`;
const BarFill = styled.div`height:8px; border-radius:5px;`;

/* Total Box */
const TotalBox = styled.div`
  margin-top:20px; padding:12px; background:#E8EDE7; border-radius:10px; display:flex; justify-content:space-between;
`;

/* Card */
const Card = styled.div`background:white; padding:20px; border-radius:20px; margin-bottom:20px; box-shadow:0 4px 10px rgba(0,0,0,0.1);`;
const CardTitle = styled.h2`font-size:20px; font-weight:bold; margin-bottom:15px;`;

/* Activity */
const Item = styled.div`
  display:flex; justify-content:space-between; align-items:center;
  padding:12px; background:#f8f8f8; border-radius:12px; margin-bottom:10px; border:1px solid #e2e2e2;
`;
const Left = styled.div`display:flex; align-items:center; gap:10px;`;
const Icon = styled.div`
  font-size:24px; padding:8px; border-radius:12px;
  background:${props => props.color==="green"?"#d1fae5":props.color==="blue"?"#dbeafe":"#fee2e2"};
  color:${props => props.color==="green"?"#065f46":props.color==="blue"?"#1e40af":"#b91c1c"};
`;
const ItemTitle = styled.p`font-weight:600;`;
const ItemSub = styled.p`font-size:14px; color:#666;`;
const Time = styled.span`font-size:14px; color:#777;`;

/* Alert */
const AlertCard = styled.div`
  padding:15px; border-radius:12px; margin-bottom:12px;
  border:1px solid #ccc;
  background:${props => props.color==="green"?"#d1fae5":props.color==="blue"?"#A8D2F0":"#E9C3B5"};
  color:${props => props.color==="green"?"#065f46":props.color==="blue"?"#0073C6":"#C4512B"};
`;
const AlertText = styled.p`font-weight:600;`;
const AlertPriority = styled.p`font-size:14px; color:#555;`;

/* Actions rapides */
const ActionsColumn = styled.div`display:flex; flex-direction:column; gap:15px;`;
const ActionCard = styled.div`
  padding:15px 12px; border-radius:12px; background:${props=>props.color};
 color: white; font-weight:600; cursor:pointer; display:flex; align-items:center; justify-content:center; gap:10px;
  &:hover {transform:translateY(-2px); transition:0.2s;}
`;
const ActionIcon = styled.div`font-size:24px;`;
