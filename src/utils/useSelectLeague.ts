import { useState } from 'react';
import Country from '../interfaces/Country';

export default function useSelectLeague(initialTeams: Country[]) {
  const [teams] = useState(initialTeams);
  const [indexTeam, setIndexTeam ] = useState(0);
  const [indexCountry, setIndexCountry] = useState(0);
  const [indexLeague, setIndexLeague] = useState(1);

  const nextCountry = (): void => {
    if (indexCountry === teams.length - 1) {
      setIndexCountry(0);
      setIndexTeam(0);
    } else {
      setIndexCountry(indexCountry + 1);
      setIndexTeam(0);
    }
    setIndexLeague(1);
  };

  const previousCountry = (): void => {
    if (indexCountry === 0) {
      setIndexCountry(teams.length - 1);
      setIndexTeam(0);
    } else {
      setIndexCountry(indexCountry - 1);
      setIndexTeam(0);
    }
    setIndexLeague(1);
  };

  const nextLeague = (): void => {
    if (indexLeague === teams[indexCountry].leagues) {
      setIndexLeague(1);
      setIndexTeam(0);
    } else {
      setIndexLeague(indexLeague + 1);
      setIndexTeam(0);
    }
  };

  const previousLeague = (): void => {
    if (indexLeague === 1) {
      setIndexLeague(teams[indexCountry].leagues);
      setIndexTeam(0);
    } else {
      setIndexLeague(indexLeague - 1);
      setIndexTeam(0);
    }
  };

  const country = teams[indexCountry];
  const leagueCurrent = indexLeague;

  return {
    country,
    leagueCurrent,
    indexTeam,
    setIndexTeam,
    nextCountry,
    previousCountry,
    nextLeague,
    previousLeague,
  };
}