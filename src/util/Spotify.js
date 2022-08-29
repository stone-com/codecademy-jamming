let accessToken = '';
const redirectUrl = 'http://localhost:3000/';
const clientID = 'b61f20b3b7c846a19de955db9aec41e7';

const Spotify = {
  getAccessToken: () => {
    if (accessToken) {
      return;
    }

    // If the access token is not already set, check the URL to see if it has just been obtained. (use regex)
    const accessTokenMatch = window.location.href.match(/access_token=([^&]*)/);
    const expiresInMatch = window.location.href.match(/expires_in=([^&]*)/);
    // if access token and expire time are a match in the URL, set token value and variable for expiration time
    if (accessTokenMatch && expiresInMatch) {
      accessToken = accessTokenMatch[1];
      // save expire time to variable and convert to number
      const expiresIn = Number(expiresInMatch[1]);
      //   reset access token to empty string after expiration time is done
      window.setTimeout(() => (accessToken = ''), expiresIn * 1000);
      // clears the parameters, so we can grab a new access token when it expires.
      window.history.pushState('Access Token', null, '/');

      return accessToken;
    } else {
      const accessUrl = `https://accounts.spotify.com/authorize?client_id=${clientID}&response_type=token&scope=playlist-modify-public&redirect_uri=${redirectUrl}`;
      //   redirect if no access token
      window.location = accessUrl;
    }
  },
  search: async (term) => {
    //   search with a user inputted term
    try {
      let results = await fetch(
        `https://api.spotify.com/v1/search?type=track&q=${term}`,
        {
          headers: { Authorization: `Bearer ${accessToken}` },
        }
      );
      let jsonTracks = results.json();
      if (!jsonTracks) {
        return [{}];
      }
      // map json tracks to a array of objects
      let tracks = jsonTracks.tracks.items.map((track) => ({
        id: track.id,
        name: track.name,
        artist: track.artists[0].name,
        album: track.album.name,
        uri: track.uri,
      }));
      return tracks;
    } catch (err) {
      console.error(err);
    }
  },
  savePlaylist: async (playlistName, tracksUri) => {
    if (!playlistName && !tracksUri) return;

    // get spotify user ID using access token in header
    let userId = await fetch('https://api.spotify.com/v1/me', {
      headers: {
        Authorization: `Bearer ${accessToken}`,
      },
    })
      .then((response) => response.json())
      .then((jsonResponse) => jsonResponse.id)
      .catch((err) => {
        console.log(`User id Fetch error: ${err}`);
      });

    // Use the returned user ID to make a POST request that creates a new playlist in the user’s account and returns a playlist ID.
    let playlistId = await fetch(
      `https://api.spotify.com/v1/users/${userId}/playlists`,
      {
        method: 'POST',
        headers: {
          Authorization: `Bearer ${accessToken}`,
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({
          name: playlistName,
        }),
        json: true,
      }
    )
      .then((response) => response.json())
      .then((jsonResponse) => jsonResponse.id)
      .catch((err) => {
        console.log(`Create Playlist error: ${err}`);
      });

    // Use playlist ID to make a post request to add array of tracks URI's to the playlist
    await fetch(`https://api.spotify.com/v1/playlists/${playlistId}/tracks`, {
      method: 'POST',
      headers: {
        Authorization: `Bearer ${accessToken}`,
        'Content-Type': 'application/json',
      },
      // pass array of track URI's as the request body
      body: JSON.stringify({
        uris: tracksUri,
      }),
    })
      .then((response) => {
        console.log('Songs added to playlist');
      })
      .catch((error) => {
        console.log('Fetch error while adding songs to the playlist');
      });
  },
};

export default Spotify;
