import { useState } from 'react';
import Country from '../interfaces/Country';

export default function useSelectLeague(initialTeams: Country[]) {
  const [teams] = useState(initialTeams);
  const [indexCountry, setIndexCountry] = useState(0);
  const [indexLeague, setIndexLeague] = useState(1);

  const nextCountry = (): void => {
    if (indexCountry === teams.length - 1) {
      setIndexCountry(0);
    } else {
      setIndexCountry(indexCountry + 1);
    }
    setIndexLeague(1);
  };

  const previousCountry = (): void => {
    if (indexCountry === 0) {
      setIndexCountry(teams.length - 1);
    } else {
      setIndexCountry(indexCountry - 1);
    }
    setIndexLeague(1);
  };

  const nextLeague = (): void => {
    if (indexLeague === teams[indexCountry].leagues) {
      setIndexLeague(1);
    } else {
      setIndexLeague(indexLeague + 1);
    }
  };

  const previousLeague = (): void => {
    if (indexLeague === 1) {
      setIndexLeague(teams[indexCountry].leagues);
    } else {
      setIndexLeague(indexLeague - 1);
    }
  };

  const country = teams[indexCountry];
  const leagueCurrent = indexLeague;

  return {
    country,
    leagueCurrent,
    nextCountry,
    previousCountry,
    nextLeague,
    previousLeague,
  };
}