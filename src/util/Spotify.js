let accessToken = '';

const Spotify = {
  getAccessToken: () => {
    if (accessToken) {
      return accessToken;
    }

    // If the access token is not already set, check the URL to see if it has just been obtained.
    const accessTokenMatch = window.location.href.match(/access_token=([^&]*)/);
    const urlExpiresInMatch = window.location.href.match(/expires_in=([^&]*)/);
    // if access token and expire time are a match in the URL, set token value and variable for expiration time
    if (accessTokenMatch && urlExpiresInMatch) {
      accessToken = accessTokenMatch[1];
    }
  },
};

export default Spotify;
