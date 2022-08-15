let accessToken = '';

const Spotify = {
  getAccessToken: () => {
    if (accessToken) {
      return accessToken;
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
    }
  },
};

export default Spotify;
