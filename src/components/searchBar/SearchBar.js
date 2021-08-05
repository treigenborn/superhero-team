import React, { useState, useEffect } from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import { Container } from 'react-bootstrap';
import { Formik, Field, Form } from 'formik';
import HeroCard from '../card/Card';
import { fetchAllData } from '../../api';

const SearchBar = ({ updateTeam, team }) => {
  const [searchTerm, setSearchTerm] = useState('');
  const [superHeroData, setSuperHeroData] = useState({ data: { results: [] } });

  const getData = async (search) => {
    const superHeroData = await fetchAllData(search);
    setSuperHeroData(superHeroData);
  };

  const canUpdateTeam = (newSup, team) => {
    if (team.length >= 6) {
      return false;
    }
    const stats = { good: 0, bad: 0, ids: [] };
    team.map((teamSup) => {
      teamSup.biography.alignment === 'good'
        ? (stats.good += 1)
        : (stats.bad += 1);
      stats.ids.push(teamSup.id);
    });

    if (stats.ids.includes(newSup.id)) {
      return false;
    } else if (newSup.biography.alignment === 'good' && stats.good < 3) {
      return true;
    } else if (newSup.biography.alignment === 'bad' && stats.bad < 3) {
      return true;
    }

    return false;
  };

  useEffect(() => {
    getData(searchTerm);
  }, [searchTerm]);

  return (
    <Container>
      <h1> Search for Superheroes</h1>
      <Formik
        initialValues={{ search: '' }}
        onSubmit={(value) => {
          setSearchTerm(value.search);
        }}
      >
        <Form>
          <Field name='search' type='text' />
          <button type='submit'>Search!</button>
        </Form>
      </Formik>
      <div style={{ display: 'flex', flexWrap: 'wrap' }}>
        {superHeroData.data.response === 'success'
          ? superHeroData.data.results.map((sup) => {
              return (
                <HeroCard
                  key={sup.id}
                  data={sup}
                  team={team}
                  buttonType={'warning'}
                  canUpdateTeam={canUpdateTeam}
                  updateTeam={(team, newSup) => updateTeam(team, newSup)}
                />
              );
            })
          : 'Type a name'}
      </div>
    </Container>
  );
};

export default SearchBar;
