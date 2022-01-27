/* eslint-disable @typescript-eslint/no-explicit-any */
import AlbumModel from 'models/Album';
import ArtistModel from 'models/Artist';
import SongModel from 'models/Song';
import * as actions from 'store/actions/types';
import { updateObject } from 'utility';

interface IState {
  albums: Array<AlbumModel>;
  artists: Array<ArtistModel>;
  error: any;
  loading: boolean;
  songs: Array<SongModel>;
}

const initialState = {
  error: null,
  loading: false,
  albums: [],
  artists: [],
  songs: []
};

const fetchingResults = (state: IState) =>
  updateObject(state, {
    error: null,
    loading: true
  });

export const fetchResultsSuccess = (state: IState, action: any) =>
  updateObject(state, {
    error: null,
    loading: false,
    ...action
  });

const fetchResultFail = (state: IState, action: any) =>
  updateObject(state, {
    error: action.error,
    loading: false
  });

const searchReducer = (state = initialState, action: { type: any }) => {
  switch (action.type) {
    case actions.FETCHING_SEARCH_RESULTS:
      return fetchingResults(state);

    case actions.SEARCH_RESULTS_SUCCESS:
      return fetchResultsSuccess(state, action);

    case actions.SEARCH_RESULTS_FAIL:
      return fetchResultFail(state, action);

    default:
      return state;
  }
};

export default searchReducer;
