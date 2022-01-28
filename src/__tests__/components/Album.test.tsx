import React from 'react';
import axios from 'axios';
import { render } from '@testing-library/react';
import { Album } from 'components';

jest.mock('axios');

const mockedAxios = axios as jest.Mocked<typeof axios>;

describe('When the user search for an album', () => {
  test('should show the album details', () => {
    const albums = [
      {
        artistId: 1445550248,
        artistName: 'Kayode Omilabu',
        artistViewUrl:
          'https://music.apple.com/us/artist/kayode-omilabu/1445550248?uo=4',
        artworkUrl60:
          'https://is4-ssl.mzstatic.com/image/thumb/Music128/v4/37/3a/35/373a358d-eab4-1ae6-ed35-f67e566981fd/source/60x60bb.jpg',
        artworkUrl100:
          'https://is4-ssl.mzstatic.com/image/thumb/Music128/v4/37/3a/35/373a358d-eab4-1ae6-ed35-f67e566981fd/source/100x100bb.jpg',
        collectionCensoredName: 'Imisi Alara - Single',
        collectionExplicitness: 'notExplicit',
        collectionId: 1445550247,
        collectionName: 'Imisi Alara - Single',
        collectionPrice: 9.99,
        collectionType: 'Album',
        collectionViewUrl:
          'https://music.apple.com/us/album/imisi-alara-single/1445550247?uo=4',
        copyright: '℗ 2018 Kayode Omilabu',
        country: 'USA',
        currency: 'USD',
        primaryGenreName: 'Worldwide',
        releaseDate: '2018-12-03T08:00:00Z',
        trackCount: 2,
        wrapperType: 'collection'
      }
    ];

    mockedAxios.get.mockResolvedValueOnce(albums);

    const { getByRole } = render(<Album album={albums[0]} />);

    expect(getByRole('link')).toHaveAttribute(
      'href',
      'https://music.apple.com/us/album/imisi-alara-single/1445550247?uo=4'
    );
  });
});
