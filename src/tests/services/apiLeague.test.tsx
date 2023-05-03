import consumerApiLeagues from '../../services/ApiLeagues';

describe('ApiLeagues', () => {
  it('should return the correct league data', async () => {
    const country = 'bra';
    const serie = 1;

    const result = await consumerApiLeagues(country, serie);

    expect(result).toHaveProperty('name');
    expect(result).toHaveProperty('abbreviation');
    expect(result).toHaveProperty('logos');
    expect(result).toHaveProperty('teams');
  });
});
