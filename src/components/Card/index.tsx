import React from 'react';
import useSelectLeague from '../../utils/useSelectLeague';
import teamsSoccer from '../../db.fake/Teams';
import { useDispatch, useSelector } from 'react-redux';
import { actualLeague, useLeague } from '../../redux/sliceLeague';
import consumerApiLeagues from '../../services/ApiLeagues';
import { useQuery } from 'react-query';
import Main from './components/Main';
import Header from './components/Header';
import Footer from './components/Footer';
import classes from './style.module.css';

function Card() {
  const {
    country,
    leagueCurrent,
    nextCountry,
    previousCountry,
    nextLeague,
    previousLeague,
  } = useSelectLeague(teamsSoccer);
  const dispatch = useDispatch();
  const league = useSelector(useLeague);

  const { isFetching } = useQuery(['league', country, leagueCurrent], async () => {
    const response = await consumerApiLeagues(country.abbreviation, leagueCurrent);

    dispatch(actualLeague(response));
  });

  return (
    <div className={ classes.card }>
      <Header
        country={ country }
        nextCountry={ nextCountry }
        previousCountry={ previousCountry }
      />
      <Main teams={ league.teams } isFetching={ isFetching } />
      <Footer
        league={ league }
        nextLeague={ nextLeague }
        previousLeague={ previousLeague }
        isFetching={ isFetching }
      />
    </div>
  );
}

export default Card;