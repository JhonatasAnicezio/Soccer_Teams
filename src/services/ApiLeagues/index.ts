import { QueryClient } from 'react-query';
import api from '../api';
import League, { Logo } from '../../interfaces/League';

export const queryCliente = new QueryClient();

const findTeams = async (country: string, serie: number): Promise<League> => {
  const { leagues } = await api.get(`/${country}.${serie}/teams`)
    .then((response) => response.data.sports[0]);

  return leagues[0];
};

const findLogo = async (country: string, serie: number): Promise<Logo[]> => {
  const { logos } = await api.get(`/${country}.${serie}/scoreboard`)
    .then((response) => response.data.leagues[0]);

  return logos;
};

const consumerApiLeagues = async (country: string, serie: number): Promise<League> => {
  const teams = await findTeams(country, serie);
  const logos = await findLogo(country, serie);

  return { ...teams, logos };
};

export default consumerApiLeagues;