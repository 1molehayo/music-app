/* eslint-disable @typescript-eslint/no-explicit-any */
import * as actions from 'store/actions/types';
import { updateObject } from 'utility';

interface IState {
  error: any;
  loading: boolean;
  artists: Array<any>;
}

const initialState = {
  artists: [],
  error: null,
  loading: false
};

const fetchingArtists = (state: IState) =>
  updateObject(state, {
    error: null,
    loading: true
  });

const fetchArtistsSuccess = (state: IState, action: any) =>
  updateObject(state, {
    error: null,
    loading: false,
    artists: action.artists
  });

const fetchArtistsFail = (state: IState, action: any) =>
  updateObject(state, {
    error: action.error,
    loading: false
  });

const artistReducer = (state = initialState, action: { type: any }) => {
  switch (action.type) {
    case actions.FETCHING_ARTISTS:
      return fetchingArtists(state);

    case actions.FETCH_ARTISTS_SUCCESS:
      return fetchArtistsSuccess(state, action);

    case actions.FETCH_ARTISTS_FAIL:
      return fetchArtistsFail(state, action);

    default:
      return state;
  }
};

export default artistReducer;
