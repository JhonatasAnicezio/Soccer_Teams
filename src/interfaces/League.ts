interface League {
  name: string,
  shortName: string,
  slug: string,
  logos: Logo[],
  teams: Team[],
};

export interface Team {
  shortDisplayName: string,
  logos: Logo[],
};

export interface Logo {
  alt: string,
  height: number,
  width: number,
  href: string,
};

export default League;
