"use client";
import React, { useState, useEffect } from 'react';

import { FaTwitter } from "react-icons/fa";
import { FaD, FaInstagram } from "react-icons/fa6";
import { FaDiscord } from "react-icons/fa";


const styles = {
  container: {
    // maxWidth: '1400px',
    margin: '0 auto',
    padding: '20px',
    fontFamily: 'Arial, sans-serif',
    backgroundColor: '#f5f5f5',
    minHeight: '100vh'
  },
  header: {
    textAlign: 'center',
    color: '#1a5490',
    marginBottom: '30px',
    fontSize: '32px',
    fontWeight: 'bold'
  },
  phaseTitle: {
    textAlign: 'center',
    color: '#2c5aa0',
    marginBottom: '50px',
    fontSize: '24px',
  },
  playoffSection: {
    display: 'grid',
    gridTemplateColumns: 'repeat(auto-fit, minmax(300px, 1fr))',
    gap: '20px',
    marginBottom: '30px'
  },
  playoffCard: {
    backgroundColor: 'white',
    padding: '20px',
    borderRadius: '8px',
    boxShadow: '0 2px 4px rgba(0,0,0,0.1)'
  },
  playoffTitle: {
    fontSize: '18px',
    fontWeight: 'bold',
    marginBottom: '15px',
    color: '#333'
  },
  teamOption: {
    display: 'flex',
    alignItems: 'center',
    marginBottom: '10px',
    cursor: 'pointer',
    padding: '8px',
    borderRadius: '4px',
    transition: 'background-color 0.2s'
  },
  radio: {
    marginRight: '10px',
    cursor: 'pointer'
  },
  flag: {
    marginRight: '8px',
    fontSize: '20px'
  },
  button: {
    display: 'block',
    margin: '30px auto',
    padding: '15px 40px',
    fontSize: '18px',
    backgroundColor: '#1a5490',
    color: 'white',
    border: 'none',
    borderRadius: '8px',
    cursor: 'pointer',
    fontWeight: 'bold'
  },
  buttonDisabled: {
    backgroundColor: '#ccc',
    cursor: 'not-allowed'
  },
  groupsGrid: {
    display: 'grid',
    gridTemplateColumns: 'repeat(auto-fit, minmax(280px, 1fr))',
    gap: '20px',
    marginBottom: '30px'
  },
  groupCard: {
    backgroundColor: 'white',
    padding: '15px',
    borderRadius: '8px',
    boxShadow: '0 2px 4px rgba(0,0,0,0.1)'
  },
  groupTitle: {
    fontSize: '20px',
    fontWeight: 'bold',
    marginBottom: '15px',
    color: '#1a5490',
    textAlign: 'center'
  },
  teamItem: {
    padding: '8px',
    marginBottom: '5px',
    borderRadius: '4px',
    cursor: 'pointer',
    display: 'flex',
    alignItems: 'center'
  },
  teamSelected: {
    backgroundColor: '#d4edda',
    fontWeight: 'bold'
  },
  teamThird: {
    backgroundColor: '#fff3cd'
  },
  modeSelector: {
    textAlign: 'center',
    marginBottom: '30px'
  },
  modeButton: {
    padding: '10px 20px',
    margin: '0 10px',
    fontSize: '16px',
    backgroundColor: 'white',
    border: '2px solid #1a5490',
    borderRadius: '6px',
    cursor: 'pointer',
    color: '#1a5490',
    fontWeight: 'bold'
  },
  modeButtonActive: {
    backgroundColor: '#1a5490',
    color: 'white'
  },
  bestThirds: {
    backgroundColor: '#fff3cd',
    padding: '20px',
    borderRadius: '8px',
    marginTop: '20px',
    display: "flex",
    flexDirection: "column"
  },
  thirdGroupSection: {
    marginBottom: '20px',
    backgroundColor: 'white',
    padding: '15px',
    borderRadius: '8px'
  },
  thirdGroupTitle: {
    fontSize: '16px',
    fontWeight: 'bold',
    marginBottom: '10px',
    color: '#1a5490'
  },
  // Estilos do Mata-Mata
  knockoutContainer: {
    background: 'linear-gradient(135deg, #4b87d6ff 0%, #16e2d8ff 100%)',
    minHeight: '100vh',
    padding: '40px 20px',
    overflowX: 'auto'
  },
  bracketWrapper: {
    display: 'flex',
    justifyContent: 'center',
    minWidth: '1600px',
    gap: '60px',
    position: 'relative'
  },
  roundColumn: {
    display: 'flex',
    flexDirection: 'column',
    justifyContent: 'space-around',
    position: 'relative'
  },
  roundLabel: {
    position: 'absolute',
    top: '-30px',
    left: '50%',
    transform: 'translateX(-50%)',
    color: '#ffffffff',
    fontSize: '16px',
    fontWeight: 'bold',
    textTransform: 'uppercase',
    letterSpacing: '2px',
    whiteSpace: 'nowrap'
  },
  matchBox: {
    display: 'flex',
    flexDirection: 'column',
    gap: '3px',
    marginBottom: '40px',
    position: 'relative'
  },
  teamBox: {
    background: 'white',
    padding: '12px 20px',
    borderRadius: '8px',
    cursor: 'pointer',
    transition: 'all 0.3s',
    minWidth: '180px',
    fontSize: '14px',
    fontWeight: '600',
    boxShadow: '0 2px 8px rgba(0,0,0,0.3)',
    position: 'relative',
    border: '3px solid transparent',
    display: 'flex',
    alignItems: 'center'
  },
  teamBoxSelected: {
    background: '#ffd700',
    border: '3px solid #ffed4e',
    transform: 'scale(1.05)',
    boxShadow: '0 4px 12px rgba(255,215,0,0.5)',
    fontWeight: 'bold'
  },
  teamBoxHover: {
    transform: 'translateY(-2px)',
    boxShadow: '0 4px 12px rgba(0,0,0,0.4)'
  },
  connector: {
    position: 'absolute',
    border: '2px solid rgba(255, 215, 0, 0.5)',
    pointerEvents: 'none'
  },
  finalStage: {
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'center',
    gap: '40px'
  },
  championBox: {
    background: 'linear-gradient(135deg, #ffd700 0%, #ffed4e 100%)',
    padding: '40px 60px',
    borderRadius: '20px',
    textAlign: 'center',
    fontSize: '36px',
    fontWeight: 'bold',
    color: '#8B0000',
    boxShadow: '0 8px 24px rgba(255,215,0,0.6)',
    border: '4px solid #fff',
    minWidth: '300px'
  },
  trophyIcon: {
    fontSize: '64px',
    marginBottom: '10px'
  }
};

export default function WorldCupSimulator() {
  const [phase, setPhase] = useState('playoffs');
  const [selectedPlayoffs, setSelectedPlayoffs] = useState({});
  const [groupMode, setGroupMode] = useState('direct');
  const [groupResults, setGroupResults] = useState({});
  const [bestThirds, setBestThirds] = useState([]);
  const [knockoutResults, setKnockoutResults] = useState({});
  const [hoveredTeam, setHoveredTeam] = useState(null);

  // Mapeamento de bandeiras
  const flagMap = {
    'México': '🇲🇽', 'África do Sul': '🇿🇦', 'Coreia do Sul': '🇰🇷',
    'Canadá': '🇨🇦', 'Catar': '🇶🇦', 'Suíça': '🇨🇭',
    'Brasil': '🇧🇷', 'Marrocos': '🇲🇦', 'Haiti': '🇭🇹', 'Escócia': '🏴󠁧󠁢󠁳󠁣󠁴󠁿',
    'EUA': '🇺🇸', 'Paraguai': '🇵🇾', 'Austrália': '🇦🇺',
    'Alemanha': '🇩🇪', 'Curaçao': '🇨🇼', 'Costa do Marfim': '🇨🇮', 'Equador': '🇪🇨',
    'Holanda': '🇳🇱', 'Japão': '🇯🇵', 'Tunísia': '🇹🇳',
    'Bélgica': '🇧🇪', 'Egito': '🇪🇬', 'Irã': '🇮🇷', 'Nova Zelândia': '🇳🇿',
    'Espanha': '🇪🇸', 'Cabo Verde': '🇨🇻', 'Arábia Saudita': '🇸🇦', 'Uruguai': '🇺🇾',
    'França': '🇫🇷', 'Senegal': '🇸🇳', 'Noruega': '🇳🇴',
    'Argentina': '🇦🇷', 'Áustria': '🇦🇹', 'Argélia': '🇩🇿', 'Jordânia': '🇯🇴',
    'Portugal': '🇵🇹', 'Uzbequistão': '🇺🇿', 'Colômbia': '🇨🇴',
    'Inglaterra': '🏴󠁧󠁢󠁥󠁮󠁧󠁿', 'Croácia': '🇭🇷', 'Gana': '🇬🇭', 'Panamá': '🇵🇦',
    'Dinamarca': '🇩🇰', 'Macedônia do Norte': '🇲🇰', 'República Tcheca': '🇨🇿', 'Irlanda': '🇮🇪',
    'Itália': '🇮🇹', 'Irlanda do Norte': '🇬🇧', 'País de Gales': '🏴󠁧󠁢󠁷󠁬󠁳󠁿', 'Bósnia e Herzegovina': '🇧🇦',
    'Turquia': '🇹🇷', 'Romênia': '🇷🇴', 'Eslováquia': '🇸🇰', 'Kosovo': '🇽🇰',
    'Ucrânia': '🇺🇦', 'Suécia': '🇸🇪', 'Polônia': '🇵🇱', 'Albânia': '🇦🇱',
    'Iraque': '🇮🇶', 'Bolívia': '🇧🇴', 'Suriname': '🇸🇷',
    'RD Congo': '🇨🇩', 'Jamaica': '🇯🇲', 'Nova Caledônia': '🇳🇨'
  };

  const getFlag = (country) => {
    return flagMap[country] || '🏳️';
  };

  const playoffs = {
    'PLAY OFF D': ['Dinamarca', 'Macedônia do Norte', 'República Tcheca', 'Irlanda'],
    'PLAY OFF A': ['Itália', 'Irlanda do Norte', 'País de Gales', 'Bósnia e Herzegovina'],
    'PLAY OFF C': ['Turquia', 'Romênia', 'Eslováquia', 'Kosovo'],
    'PLAY OFF B': ['Ucrânia', 'Suécia', 'Polônia', 'Albânia'],
    'PLAY OFF 2': ['Iraque', 'Bolívia', 'Suriname'],
    'PLAY OFF 1': ['RD Congo', 'Jamaica', 'Nova Caledônia']
  };

  const initialGroups = {
    'A': ['México', 'África do Sul', 'Coreia do Sul', 'PLAY OFF D'],
    'B': ['Canadá', 'PLAY OFF A', 'Catar', 'Suíça'],
    'C': ['Brasil', 'Marrocos', 'Haiti', 'Escócia'],
    'D': ['EUA', 'Paraguai', 'Austrália', 'PLAY OFF C'],
    'E': ['Alemanha', 'Curaçao', 'Costa do Marfim', 'Equador'],
    'F': ['Holanda', 'Japão', 'PLAY OFF B', 'Tunísia'],
    'G': ['Bélgica', 'Egito', 'Irã', 'Nova Zelândia'],
    'H': ['Espanha', 'Cabo Verde', 'Arábia Saudita', 'Uruguai'],
    'I': ['França', 'Senegal', 'PLAY OFF 2', 'Noruega'],
    'J': ['Argentina', 'Áustria', 'Argélia', 'Jordânia'],
    'K': ['Portugal', 'PLAY OFF 1', 'Uzbequistão', 'Colômbia'],
    'L': ['Inglaterra', 'Croácia', 'Gana', 'Panamá']
  };

  const [groups, setGroups] = useState(initialGroups);

  const handlePlayoffSelect = (playoff, team) => {
    setSelectedPlayoffs({ ...selectedPlayoffs, [playoff]: team });
  };

  const allPlayoffsSelected = Object.keys(playoffs).length === Object.keys(selectedPlayoffs).length;

  const proceedToGroups = () => {
    const updatedGroups = { ...groups };
    Object.keys(updatedGroups).forEach(groupKey => {
      updatedGroups[groupKey] = updatedGroups[groupKey].map(team => {
        if (team.startsWith('PLAY OFF')) {
          return selectedPlayoffs[team] || team;
        }
        return team;
      });
    });
    setGroups(updatedGroups);
    setPhase('groups');
  };

  const handleDirectGroupSelection = (groupKey, team) => {
    const current = groupResults[groupKey] || [];
    if (current.includes(team)) {
      setGroupResults({
        ...groupResults,
        [groupKey]: current.filter(t => t !== team)
      });
    } else if (current.length < 2) {
      setGroupResults({
        ...groupResults,
        [groupKey]: [...current, team]
      });
    }
  };

  const handleThirdPlaceSelection = (team, groupKey) => {
    if (bestThirds.includes(team)) {
      setBestThirds(bestThirds.filter(t => t !== team));
    } else if (bestThirds.length < 8) {
      // Verifica se já existe um terceiro do mesmo grupo
      const existingThirdFromGroup = bestThirds.find(t => {
        const tGroup = Object.keys(groups).find(g => groups[g].includes(t));
        return tGroup === groupKey;
      });

      if (!existingThirdFromGroup) {
        setBestThirds([...bestThirds, team]);
      }
    }
  };

  const allFirstsSelected = () => {
    return Object.keys(groups).length === Object.keys(groupResults).length &&
      Object.values(groupResults).every(r => r.length === 2);
  };

  const allGroupsComplete = () => {
    return allFirstsSelected() && bestThirds.length === 8;
  };

  const proceedToKnockout = () => {
    setPhase('knockout');
  };

  const generate32Matches = () => {
    const qualified = [];
    Object.keys(groups).sort().forEach(groupKey => {
      const winners = groupResults[groupKey] || [];
      qualified.push({ team: winners[0] || 'A definir', group: groupKey, position: 1 });
      qualified.push({ team: winners[1] || 'A definir', group: groupKey, position: 2 });
    });

    bestThirds.forEach(team => {
      const groupKey = Object.keys(groups).find(g => groups[g].includes(team));
      qualified.push({ team, group: groupKey, position: 3 });
    });

    // Preenche com "A definir" se faltar terceiros
    while (qualified.length < 32) {
      qualified.push({ team: 'A definir', group: '?', position: 3 });
    }

    const matches = [];
    for (let i = 0; i < 16; i++) {
      matches.push({
        id: `r32-${i}`,
        team1: qualified[i]?.team || 'A definir',
        team2: qualified[31 - i]?.team || 'A definir'
      });
    }

    return matches;
  };

  const generateNextRound = (prevMatches, roundPrefix) => {
    const matches = [];
    for (let i = 0; i < prevMatches.length; i += 2) {
      const winner1 = knockoutResults[prevMatches[i].id];
      const winner2 = knockoutResults[prevMatches[i + 1]?.id];

      matches.push({
        id: `${roundPrefix}-${i / 2}`,
        team1: winner1 || 'A definir',
        team2: winner2 || 'A definir'
      });
    }

    return matches;
  };

  const handleKnockoutWinner = (matchId, winner) => {
    setKnockoutResults({ ...knockoutResults, [matchId]: winner });
  };

  const round32 = phase === 'knockout' ? generate32Matches() : [];
  const round16 = round32.length > 0 ? generateNextRound(round32, 'r16') : [];
  const quarters = round16.length > 0 ? generateNextRound(round16, 'qf') : [];
  const semis = quarters.length > 0 ? generateNextRound(quarters, 'sf') : [];
  const final = semis.length > 0 ? generateNextRound(semis, 'final') : [];
  const champion = final && final.length > 0 ? knockoutResults[final[0].id] : null;

  const renderMatch = (match, roundName) => {
    const winner = knockoutResults[match.id];
    const isTeam1Selectable = match.team1 !== 'A definir';
    const isTeam2Selectable = match.team2 !== 'A definir';

    return (
      <div key={match.id} style={styles.matchBox}>
        <div
          style={{
            ...styles.teamBox,
            ...(winner === match.team1 ? styles.teamBoxSelected : {}),
            ...(hoveredTeam === `${match.id}-1` && winner !== match.team1 && isTeam1Selectable ? styles.teamBoxHover : {}),
            cursor: isTeam1Selectable ? 'pointer' : 'not-allowed',
            opacity: isTeam1Selectable ? 1 : 0.5
          }}
          onClick={() => isTeam1Selectable && handleKnockoutWinner(match.id, match.team1)}
          onMouseEnter={() => isTeam1Selectable && setHoveredTeam(`${match.id}-1`)}
          onMouseLeave={() => setHoveredTeam(null)}
        >
          {isTeam1Selectable && <span style={styles.flag}>{getFlag(match.team1)}</span>}
          {match.team1}
        </div>
        <div
          style={{
            ...styles.teamBox,
            ...(winner === match.team2 ? styles.teamBoxSelected : {}),
            ...(hoveredTeam === `${match.id}-2` && winner !== match.team2 && isTeam2Selectable ? styles.teamBoxHover : {}),
            cursor: isTeam2Selectable ? 'pointer' : 'not-allowed',
            opacity: isTeam2Selectable ? 1 : 0.5
          }}
          onClick={() => isTeam2Selectable && handleKnockoutWinner(match.id, match.team2)}
          onMouseEnter={() => isTeam2Selectable && setHoveredTeam(`${match.id}-2`)}
          onMouseLeave={() => setHoveredTeam(null)}
        >
          {isTeam2Selectable && <span style={styles.flag}>{getFlag(match.team2)}</span>}
          {match.team2}
        </div>
      </div>
    );
  };

  return (
    <div style={styles.container}>
      <h1 style={styles.header}>⚽ Simulador Copa do Mundo 2026</h1>
      <div style={{
        display: 'flex',
        gap: '8px',
        padding: '20px',
        backgroundColor: '#f5f5f5',
        borderTop: '1px solid #ddd',
        textAlign: 'center',
        justifyContent: "center"
      }}>
        <span style={{ fontSize: '14px', color: '#333' }}>
          Criado por Nem Tudo
        </span>
        <span>
          <a
            href="https://x.com/NemTudo_"
            target='_blank'
            style={{
              display: 'inline-flex',
              alignItems: 'center',
              gap: '6px',
              color: '#1DA1F2',
              textDecoration: 'none',
              fontSize: '14px'
            }}
          >
            <FaTwitter /> @NemTudo_
          </a>
        </span>
        <span>
          <a
            href="https://instagram.com/_nemtudo_"
            target='_blank'
            style={{
              display: 'inline-flex',
              alignItems: 'center',
              gap: '6px',
              color: '#E4405F',
              textDecoration: 'none',
              fontSize: '14px'
            }}
          >
            <FaInstagram /> @_nemtudo_
          </a>
        </span>
        <span>
          <a
            href="https://discord.gg/nemtudo"
            target='_blank'
            style={{
              display: 'inline-flex',
              alignItems: 'center',
              gap: '6px',
              color: '#5865F2',
              textDecoration: 'none',
              fontSize: '14px'
            }}
          >
            <FaDiscord /> discord.gg/nemtudo
          </a>
        </span>
      </div>

      {phase === 'playoffs' && (
        <>
          <h2 style={styles.phaseTitle}>Fase: Play-offs - Selecione os Classificados</h2>
          <div style={styles.playoffSection}>
            {Object.entries(playoffs).map(([playoffName, teams]) => (
              <div key={playoffName} style={styles.playoffCard}>
                <div style={styles.playoffTitle}>{playoffName}</div>
                {teams.map(team => (
                  <label key={team} style={styles.teamOption}>
                    <input
                      type="radio"
                      style={styles.radio}
                      name={playoffName}
                      checked={selectedPlayoffs[playoffName] === team}
                      onChange={() => handlePlayoffSelect(playoffName, team)}
                    />
                    <span style={styles.flag}>{getFlag(team)}</span>
                    {team}
                  </label>
                ))}
              </div>
            ))}
          </div>
          <button
            style={{
              ...styles.button,
              ...(allPlayoffsSelected ? {} : styles.buttonDisabled)
            }}
            onClick={proceedToGroups}
            disabled={!allPlayoffsSelected}
          >
            Ir para Fase de Grupos
          </button>
        </>
      )}

      {phase === 'groups' && (
        <>
          <h2 style={styles.phaseTitle}>Fase de Grupos</h2>

          <div style={styles.groupsGrid}>
            {Object.entries(groups).map(([groupKey, teams]) => (
              <div key={groupKey} style={styles.groupCard}>
                <div style={styles.groupTitle}>GRUPO {groupKey}</div>
                {teams.map((team, idx) => (
                  <div
                    key={idx}
                    style={{
                      ...styles.teamItem,
                      ...(groupResults[groupKey]?.includes(team) ? styles.teamSelected : {})
                    }}
                    onClick={() => handleDirectGroupSelection(groupKey, team)}
                  >
                    <span style={styles.flag}>{getFlag(team)}</span>
                    {team}
                    {groupResults[groupKey]?.includes(team) && ' ✓'}
                  </div>
                ))}
              </div>
            ))}
          </div>

          {allFirstsSelected() && (
            <div style={styles.bestThirds}>
              <h3 style={{ textAlign: 'center', marginBottom: '15px' }}>
                Selecione os 8 Melhores Terceiros Colocados ({bestThirds.length}/8)
              </h3>
              <div style={{ display: "flex", flexWrap: "wrap", gap: "7px", margin: "0 auto" }}>
                {Object.entries(groups).sort().map(([groupKey, teams]) => {
                  const selectedTeams = groupResults[groupKey] || [];
                  const availableThirds = teams.filter(t => !selectedTeams.includes(t));
                  const hasThirdFromGroup = bestThirds.find(t => {
                    const tGroup = Object.keys(groups).find(g => groups[g].includes(t));
                    return tGroup === groupKey;
                  });

                  return (
                    <div key={groupKey} style={styles.thirdGroupSection}>
                      <div style={styles.thirdGroupTitle}>GRUPO {groupKey}</div>
                      {availableThirds.map(team => {
                        const isDisabled = hasThirdFromGroup && !bestThirds.includes(team);

                        return (
                          <div
                            key={`${groupKey}-${team}`}
                            style={{
                              ...styles.teamItem,
                              ...(bestThirds.includes(team) ? styles.teamThird : {}),
                              cursor: isDisabled ? 'not-allowed' : 'pointer',
                              opacity: isDisabled ? 0.5 : 1
                            }}
                            onClick={() => !isDisabled && handleThirdPlaceSelection(team, groupKey)}
                          >
                            <span style={styles.flag}>{getFlag(team)}</span>
                            {team}
                            {bestThirds.includes(team) && ' ✓'}
                            {isDisabled && ' ❌'}
                          </div>
                        );
                      })}
                    </div>
                  );
                })}
              </div>
            </div>
          )}

          <button
            style={{
              ...styles.button,
              ...(allGroupsComplete() ? {} : styles.buttonDisabled)
            }}
            onClick={proceedToKnockout}
            disabled={!allGroupsComplete()}
          >
            Ir para Mata-Mata
          </button>
        </>
      )}

      {phase === 'knockout' && (
        <div style={styles.knockoutContainer}>
          <h2 style={{ ...styles.phaseTitle, color: '#00ff15ff' }}>Fase de Mata-Mata</h2>

          <div style={styles.bracketWrapper}>
            {/* 16-avos de Final */}
            <div style={{ ...styles.roundColumn, minHeight: '1600px' }}>
              <div style={styles.roundLabel}>16-AVOS</div>
              {round32.slice(0, 8).map(match => renderMatch(match, '16-avos'))}
            </div>

            {/* Oitavas de Final */}
            <div style={{ ...styles.roundColumn, minHeight: '800px' }}>
              <div style={styles.roundLabel}>OITAVAS</div>
              {round16.slice(0, 4).map(match => renderMatch(match, 'oitavas'))}
            </div>

            {/* Quartas de Final */}
            <div style={{ ...styles.roundColumn, minHeight: '400px' }}>
              <div style={styles.roundLabel}>QUARTAS</div>
              {quarters.slice(0, 2).map(match => renderMatch(match, 'quartas'))}
            </div>

            {/* Semifinais e Final */}
            <div style={{ ...styles.finalStage, minHeight: '600px', justifyContent: 'space-around' }}>
              <div>
                <div style={styles.roundLabel}>SEMIFINAL</div>
                {semis.slice(0, 1).map(match => renderMatch(match, 'semi'))}
              </div>

              <div style={{ marginTop: '40px' }}>
                <div style={{ ...styles.roundLabel, position: 'relative', top: '0' }}>FINAL</div>
                {final.map(match => renderMatch(match, 'final'))}
              </div>

              {champion && (
                <div style={styles.championBox}>
                  <div style={styles.trophyIcon}>🏆</div>
                  CAMPEÃO
                  <div style={{ marginTop: '10px', display: 'flex', alignItems: 'center', justifyContent: 'center', gap: '10px' }}>
                    <span style={{ fontSize: '48px' }}>{getFlag(champion)}</span>
                    {champion}
                  </div>
                </div>
              )}

              <div>
                <div style={styles.roundLabel}>SEMIFINAL</div>
                {semis.slice(1, 2).map(match => renderMatch(match, 'semi'))}
              </div>
            </div>

            {/* Quartas de Final - lado direito */}
            <div style={{ ...styles.roundColumn, minHeight: '400px' }}>
              <div style={styles.roundLabel}>QUARTAS</div>
              {quarters.slice(2, 4).map(match => renderMatch(match, 'quartas'))}
            </div>

            {/* Oitavas de Final - lado direito */}
            <div style={{ ...styles.roundColumn, minHeight: '800px' }}>
              <div style={styles.roundLabel}>OITAVAS</div>
              {round16.slice(4, 8).map(match => renderMatch(match, 'oitavas'))}
            </div>

            {/* 16-avos de Final - lado direito */}
            <div style={{ ...styles.roundColumn, minHeight: '1600px' }}>
              <div style={styles.roundLabel}>16-AVOS</div>
              {round32.slice(8, 16).map(match => renderMatch(match, '16-avos'))}
            </div>
          </div>
        </div>
      )}
    </div>
  );
}