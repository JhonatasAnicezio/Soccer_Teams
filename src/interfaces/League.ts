interface League {
  name: string,
  shortName: string,
  slug: string,
  logos?: Logo[],
  teams: Teams,
}

export type Teams = Team[];

export interface Team {
  team: {
    shortDisplayName: string,
    logos: Logo[],
  },
}

export interface Logo {
  alt: string,
  height: number,
  width: number,
  href: string,
}

export default League;
