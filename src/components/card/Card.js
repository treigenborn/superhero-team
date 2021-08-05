import React, { useState } from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import { Card, Button } from 'react-bootstrap';
import './card.css';

const HeroCard = ({
  data,
  canUpdateTeam,
  updateTeam,
  team,
  buttonType,
  remove,
}) => {
  const [moreInfo, setMoreInfo] = useState(false);

  const addToTeam = (data, canUpdateTeam, updateTeam, team) => {
    if (canUpdateTeam(data, team) === true) {
      updateTeam(team, data);
    } else {
      return alert(
        'This superhero has already been added to your team or you already have 3 superheroes of the same type (Good / Bad)'
      );
    }
  };

  return (
    <Card style={{ width: '12rem', margin: 15 }}>
      <Card.Img
        variant='top'
        src={data.image.url}
        style={{ width: 190, height: 276 }}
        alt='superhero illustration'
      />
      <Card.Body>
        <Card.Title>{data.name}</Card.Title>
        <Card.Text style={{ textTransform: 'capitalize' }}>
          Alignment: {data.biography.alignment}
        </Card.Text>
        <Button
          variant='primary'
          style={{ marginBottom: 10 }}
          onClick={() => setMoreInfo(true)}
        >
          More info
        </Button>
        <Button
          variant={buttonType}
          onClick={() => {
            buttonType === 'warning'
              ? addToTeam(data, canUpdateTeam, updateTeam, team)
              : remove(team, data.id);
          }}
        >
          {buttonType === 'warning' ? 'Add to my team' : 'Remove from my team'}
        </Button>
      </Card.Body>
      {moreInfo && (
        <div className='more-info'>
          <img src={data.image.url} alt='superhero illustration' />
          <div className='superhero-info'>
            <div className='powerstats'>
              <p>Intelligence: {data.powerstats.intelligence}</p>
              <p>Strength: {data.powerstats.strength}</p>
              <p>Speed: {data.powerstats.speed}</p>
              <p>Durabiliy: {data.powerstats.durability}</p>
              <p>Power: {data.powerstats.power}</p>
              <p>Combat: {data.powerstats.combat}</p>
            </div>
            <div className='personal-info'>
              <p>Name: {data.name}</p>
              <p>Alias: {data.biography['aliases']} </p>
              <p>Place of birth: {data.biography['place-of-birth']}</p>
              <p>Alignment: {data.biography.alignment}</p>
              <p>Eye color: {data.appearance['eye-color']}</p>
              <p>Hair color: {data.appearance['hair-color']}</p>
              <p>Race: {data.appearance.race}</p>
              <p>
                Height: {data.appearance.height[0]}/{data.appearance.height[1]}
              </p>
              <p>
                Weight: {data.appearance.weight[0]}/{data.appearance.weight[1]}
              </p>
              <p>Work: {data.work.occupation}</p>
            </div>
          </div>
          <button onClick={() => setMoreInfo(false)}>X</button>
        </div>
      )}
    </Card>
  );
};

export default HeroCard;
