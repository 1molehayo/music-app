/* eslint-disable @typescript-eslint/no-explicit-any */
import { CombinedState, combineReducers } from 'redux';
import album from './album.reducer';
import artist from './artist.reducer';
import song from './song.reducer';

const allReducers = combineReducers({
  album,
  artist,
  song
});

const rootReducer = (
  state: CombinedState<{ album: any; artist: any; song: any }> | undefined,
  action: { type: any } | { type: any } | { type: any }
) => {
  if (action.type === 'RESET_APP') {
    state = undefined;
  }

  return allReducers(state, action);
};

export default rootReducer;
