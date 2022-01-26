/* eslint-disable @typescript-eslint/no-explicit-any */
import * as actions from 'store/actions/types';
import { updateObject } from 'utility';

interface IState {
  error: any;
  loading: boolean;
  songs: Array<any>;
}

const initialState = {
  songs: [],
  error: null,
  loading: false
};

const fetchingSongs = (state: IState) =>
  updateObject(state, {
    error: null,
    loading: true
  });

const fetchSongsSuccess = (state: IState, action: any) =>
  updateObject(state, {
    error: null,
    loading: false,
    songs: action.songs
  });

const fetchSongsFail = (state: IState, action: any) =>
  updateObject(state, {
    error: action.error,
    loading: false
  });

const songReducer = (state = initialState, action: { type: any }) => {
  switch (action.type) {
    case actions.FETCHING_SONGS:
      return fetchingSongs(state);

    case actions.FETCH_SONGS_SUCCESS:
      return fetchSongsSuccess(state, action);

    case actions.FETCH_SONGS_FAIL:
      return fetchSongsFail(state, action);

    default:
      return state;
  }
};

export default songReducer;
