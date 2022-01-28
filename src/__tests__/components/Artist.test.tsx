import React from 'react';
import axios from 'axios';
import { render } from '@testing-library/react';
import { Artist } from 'components';

jest.mock('axios');

const mockedAxios = axios as jest.Mocked<typeof axios>;

describe('When the user search for an artist', () => {
  test('should show the artist details', () => {
    const artists = [
      {
        artistId: 1445550248,
        artistLinkUrl:
          'https://music.apple.com/us/artist/kayode-omilabu/1445550248?uo=4',
        artistName: 'Kayode Omilabu',
        artistType: 'Artist',
        primaryGenreId: 19,
        primaryGenreName: 'Worldwide',
        wrapperType: 'artist'
      }
    ];

    mockedAxios.get.mockResolvedValueOnce(artists);

    const { getByRole } = render(<Artist artist={artists[0]} />);

    expect(getByRole('link')).toHaveAttribute(
      'href',
      'https://music.apple.com/us/artist/kayode-omilabu/1445550248?uo=4'
    );
  });
});
