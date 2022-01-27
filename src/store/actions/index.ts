/* eslint-disable @typescript-eslint/no-explicit-any */
import * as actionTypes from './types';
import axios from 'services/axios';
import { getSearchEntity } from 'utility';
import AlbumModel from 'models/Album';
import ArtistModel from 'models/Artist';
import SongModel from 'models/Song';

interface IResultProps {
  albums: Array<AlbumModel>;
  artists: Array<ArtistModel>;
  songs: Array<SongModel>;
}

export const generateData = (data: any, type?: string) => {
  const result: IResultProps = {
    albums: [],
    artists: [],
    songs: []
  };

  switch (type) {
    case 'album':
      result.albums = [...data];
      break;

    case 'artist':
      result.artists = [...data];
      break;

    case 'song':
      result.songs = [...data];
      break;

    default:
      data.forEach((item: any) => {
        if (item.wrapperType === 'collection') {
          result.albums.push(item);
        }

        if (item.wrapperType === 'artist') {
          result.artists.push(item);
        }

        if (item.wrapperType === 'track') {
          result.songs.push(item);
        }
      });
      break;
  }

  return result;
};

export const onSearchStart = () => {
  return {
    type: actionTypes.FETCHING_SEARCH_RESULTS
  };
};

export const onFetchSearchSuccess = (data: any) => {
  return {
    type: actionTypes.SEARCH_RESULTS_SUCCESS,
    ...data
  };
};

export const onFetchSearchFail = (error: string) => {
  return {
    type: actionTypes.SEARCH_RESULTS_FAIL,
    error
  };
};

export const fetchSearchResults = async (
  term: string,
  type?: string,
  limit?: number,
  offset?: number
) => {
  try {
    const entity = getSearchEntity(type);

    const { data } = await axios.get('/search', {
      params: {
        term,
        entity,
        limit,
        offset
      }
    });

    const refinedData = generateData(data.results, type);

    return refinedData;
  } catch (error) {
    let errorMessage = 'There was an problem with your search';

    if (error instanceof Error && error.message) {
      errorMessage = error.message;
    }

    throw new Error(errorMessage);
  }
};
