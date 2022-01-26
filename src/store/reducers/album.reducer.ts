/* eslint-disable @typescript-eslint/no-explicit-any */
import * as actions from 'store/actions/types';
import { updateObject } from 'utility';

interface IState {
  error: any;
  loading: boolean;
  albums: Array<any>;
}

const initialState = {
  albums: [],
  error: null,
  loading: false
};

const fetchingAlbums = (state: IState) =>
  updateObject(state, {
    error: null,
    loading: true
  });

const fetchAlbumsSuccess = (state: IState, action: any) =>
  updateObject(state, {
    error: null,
    loading: false,
    albums: action.albums
  });

const fetchAlbumsFail = (state: IState, action: any) =>
  updateObject(state, {
    error: action.error,
    loading: false
  });

const albumReducer = (state = initialState, action: { type: any }) => {
  switch (action.type) {
    case actions.FETCHING_ALBUMS:
      return fetchingAlbums(state);

    case actions.FETCH_ALBUMS_SUCCESS:
      return fetchAlbumsSuccess(state, action);

    case actions.FETCH_ALBUMS_FAIL:
      return fetchAlbumsFail(state, action);

    default:
      return state;
  }
};

export default albumReducer;
