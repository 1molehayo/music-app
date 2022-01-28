import React from 'react';
import axios from 'axios';
import { render } from '@testing-library/react';
import { Song } from 'components';

jest.mock('axios');

const mockedAxios = axios as jest.Mocked<typeof axios>;

describe('When the user search for an song', () => {
  test('should show the song details', () => {
    const songs = [
      {
        artistId: 1445550248,
        artistName: 'Kayode Omilabu',
        artistViewUrl:
          'https://music.apple.com/us/artist/kayode-omilabu/1445550248?uo=4',
        artworkUrl30:
          'https://is4-ssl.mzstatic.com/image/thumb/Music128/v4/37/3a/35/373a358d-eab4-1ae6-ed35-f67e566981fd/source/30x30bb.jpg',
        artworkUrl60:
          'https://is4-ssl.mzstatic.com/image/thumb/Music128/v4/37/3a/35/373a358d-eab4-1ae6-ed35-f67e566981fd/source/60x60bb.jpg',
        artworkUrl100:
          'https://is4-ssl.mzstatic.com/image/thumb/Music128/v4/37/3a/35/373a358d-eab4-1ae6-ed35-f67e566981fd/source/100x100bb.jpg',
        collectionCensoredName: 'Imisi Alara - Single',
        collectionExplicitness: 'notExplicit',
        collectionId: 1445550247,
        collectionName: 'Imisi Alara - Single',
        collectionPrice: 9.99,
        collectionViewUrl:
          'https://music.apple.com/us/album/damilohun/1445550247?i=1445550250&uo=4',
        country: 'USA',
        currency: 'USD',
        discCount: 1,
        discNumber: 1,
        isStreamable: true,
        kind: 'song',
        previewUrl:
          'https://audio-ssl.itunes.apple.com/itunes-assets/AudioPreview115/v4/d2/4b/29/d24b29be-e5a5-d2f2-f1d7-dc62b5885975/mzaf_9972013180772818924.plus.aac.p.m4a',
        primaryGenreName: 'Worldwide',
        releaseDate: '2018-12-03T12:00:00Z',
        trackCensoredName: 'Damilohun',
        trackCount: 2,
        trackExplicitness: 'notExplicit',
        trackId: 1445550250,
        trackName: 'Damilohun',
        trackNumber: 1,
        trackPrice: -1,
        trackTimeMillis: 681273,
        trackViewUrl:
          'https://music.apple.com/us/album/damilohun/1445550247?i=1445550250&uo=4',
        wrapperType: 'track'
      }
    ];

    mockedAxios.get.mockResolvedValueOnce(songs);

    const { getByRole } = render(<Song song={songs[0]} />);

    expect(getByRole('link')).toHaveAttribute(
      'href',
      'https://music.apple.com/us/album/damilohun/1445550247?i=1445550250&uo=4'
    );
  });
});
