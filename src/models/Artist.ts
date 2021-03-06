interface ArtistModel {
  wrapperType: string;
  artistType: string;
  artistName: string;
  artistLinkUrl: string;
  artistId: number;
  amgArtistId?: number;
  primaryGenreName: string;
  primaryGenreId: number;
}

export default ArtistModel;
