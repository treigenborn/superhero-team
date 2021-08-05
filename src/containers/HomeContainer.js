import React, { useState } from 'react';
import { SearchBar, HeroTeam } from '../components';
import { withRouter } from 'react-router-dom';

const HomeContainer = () => {
  const [team, setTeam] = useState([]);

  return (
    <div>
      <HeroTeam team={team} removeFromTeam={(newTeam) => setTeam(newTeam)} />
      <SearchBar
        updateTeam={(team, newMember) => setTeam([...team, newMember])}
        team={team}
      />
    </div>
  );
};

export default withRouter(HomeContainer);
