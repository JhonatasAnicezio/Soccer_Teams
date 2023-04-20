import api from '../api';

const getTeams = async (country: string, serie: number) => {
  const { leagues } = await api.get(`/${country}.${serie}/teams`)
    .then((response) => response.data.sports[0]);

  console.log(leagues);
};

export default getTeams;