import React from 'react';
import { useEffect } from 'react';
import { useState } from 'react';
import { Container, Row, Col } from 'react-bootstrap';
import HeroCard from '../card/Card';
import './heroTeam.css';
const HeroTeam = ({ team, removeFromTeam }) => {
  const [teamStats, setTeamStats] = useState({
    intelligence: 0,
    strength: 0,
    speed: 0,
    durability: 0,
    power: 0,
    combat: 0,
    teamType: '',
  });

  useEffect(() => {
    updateTeamStats(teamStats, team);
  }, [team]);

  const updateTeamStats = (teamStats, team) => {
    let aux = {
      intelligence: 0,
      strength: 0,
      speed: 0,
      durability: 0,
      power: 0,
      combat: 0,
      teamType: '',
    };
    team.map((sup) => {
      aux.intelligence += Number(sup.powerstats.intelligence);
      aux.strength += Number(sup.powerstats.strength);
      aux.speed += Number(sup.powerstats.speed);
      aux.durability += Number(sup.powerstats.durability);
      aux.power += Number(sup.powerstats.power);
      aux.combat += Number(sup.powerstats.combat);
    });

    let name = '';
    let max = -1;
    for (let prop in aux) {
      if (aux[prop] > max) {
        max = aux[prop];
        name = prop;
      }
    }
    if (max === 0) {
      name = 'Add a team member to see your team type!';
    }
    aux.teamType = name;
    setTeamStats({
      intelligence: aux.intelligence,
      strength: aux.strength,
      speed: aux.speed,
      durability: aux.durability,
      power: aux.power,
      combat: aux.combat,
      teamType: aux.teamType,
    });
  };

  const removeTeamMember = (team, idToRemove) => {
    let aux = [...team];
    const index = aux.findIndex((e) => e.id === idToRemove);
    aux.splice(index, 1);
    removeFromTeam(aux);
  };

  return (
    <Container className='team-container'>
      <h1 className='title'>This is your team</h1>
      <Row className='team-powerstats'>
        <Col>Intelligence: {teamStats.intelligence}</Col>
        <Col>Strength: {teamStats.strength}</Col>
        <Col>Speed: {teamStats.speed}</Col>
        <Col>Durability: {teamStats.durability}</Col>
        <Col>Power: {teamStats.power}</Col>
        <Col>Combat: {teamStats.combat}</Col>
      </Row>
      <Row>
        <Col className='team-type'>Team Type: {teamStats.teamType}</Col>
      </Row>
      <div className='team-cards' style={{ display: 'flex', flexWrap: 'wrap' }}>
        {team.map((sup) => {
          return (
            <HeroCard
              key={sup.id}
              data={sup}
              team={team}
              buttonType={'danger'}
              remove={(team, idToRemove) => removeTeamMember(team, idToRemove)}
            />
          );
        })}
      </div>
    </Container>
  );
};

export default HeroTeam;
