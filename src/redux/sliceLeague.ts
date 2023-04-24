import { PayloadAction, createSlice } from '@reduxjs/toolkit';
import League from '../interfaces/League';

const INITIAL_STATE: League = {
  name: '',
  shortName: '',
  slug: '',
  teams: [],
};

const sliceLeague = createSlice({
  name: 'league',
  initialState: INITIAL_STATE,
  reducers: {
    actualLeague(_state, { payload }: PayloadAction<League>){
      return { ...payload };
    }
  }
});

export default sliceLeague.reducer;
export const { actualLeague } = sliceLeague.actions;

export const useLeague = (state: any) => {
  return state.league as League;
};
