// The res.render("login") function in Express.js renders a specified view template (e.g., login.ejs, login.hbs) 
// and sends the resulting HTML string to the client as the HTTP response.

// https://www.npmjs.com/package/spotify-web-api-node
// https://www.npmjs.com/package/spotify-web-api-js

// https://thelinmichael.github.io/spotify-web-api-node/
// https://github.com/thelinmichael/spotify-web-api-node

// https://codesandbox.io/examples/package/spotify-web-api-node

// Music Playing Site http://localhost:8888

// https://webpack.js.org/configuration/

playlistsData:  {
  body: {
    href: 'https://api.spotify.com/v1/users/31zn4mjuucradixokfzlw5myytru/playlists?offset=0&limit=50',
    limit: 50,
    next: null,
    offset: 0,
    previous: null,
    total: 4,
    items: [ [Object], [Object], [Object], [Object] ]
  },
  headers: {
    'content-type': 'application/json; charset=utf-8',
    'cache-control': 'public, max-age=0',
    etag: '"MC-ImMwNTRhZWZhMTBkODMyM2QxN2QyMWNmMDU2NjcwODJmIg=="',
    vary: 'Authorization',
    'x-robots-tag': 'noindex, nofollow',
    'access-control-allow-origin': '*',
    'access-control-allow-headers': 'Accept, App-Platform, Authorization, Content-Type, Origin, Retry-After, Spotify-App-Version, X-Cloud-Trace-Context, client-token, content-access-token',
    'access-control-allow-methods': 'GET, POST, OPTIONS, PUT, DELETE, PATCH',
    'access-control-allow-credentials': 'true',
    'access-control-max-age': '604800',
    'content-encoding': 'gzip',
    'strict-transport-security': 'max-age=31536000',
    'x-content-type-options': 'nosniff',
    'alt-svc': 'h3=":443"; ma=2592000,h3-29=":443"; ma=2592000, h3=":443"; ma=2592000,h3-29=":443"; ma=2592000',
    date: 'Sun, 05 Oct 2025 07:40:23 GMT',
    server: 'envoy',
    via: 'HTTP/2 edgeproxy, 1.1 google',
    connection: 'close',
    'transfer-encoding': 'chunked'
  },
  statusCode: 200
}



playlistsData.body.items[0]:  {
  collaborative: false,
  description: 'Playlist created by the tutorial on developer.spotify.com',
  external_urls: {
    spotify: 'https://open.spotify.com/playlist/1iOjrbxDDJjhddCRBvqP5T'
  },
  href: 'https://api.spotify.com/v1/playlists/1iOjrbxDDJjhddCRBvqP5T',
  id: '1iOjrbxDDJjhddCRBvqP5T',
  images: [
    {
      height: null,
      url: 'https://i.scdn.co/image/ab67616d00001e02b5a26cb2c2ef2fa440baffb0',
      width: null
    }
  ],
  name: 'My top tracks playlist',
  owner: {
    display_name: 'Mohit Mudgal',
    external_urls: {
      spotify: 'https://open.spotify.com/user/31zn4mjuucradixokfzlw5myytru'
    },
    href: 'https://api.spotify.com/v1/users/31zn4mjuucradixokfzlw5myytru',
    id: '31zn4mjuucradixokfzlw5myytru',
    type: 'user',
    uri: 'spotify:user:31zn4mjuucradixokfzlw5myytru'
  },
  primary_color: null,
  public: true,
  snapshot_id: 'AAAAApX4t1qCfKEssOvbQiOhF1xgEzm0',
  tracks: {
    href: 'https://api.spotify.com/v1/playlists/1iOjrbxDDJjhddCRBvqP5T/tracks',
    total: 3
  },
  type: 'playlist',
  uri: 'spotify:playlist:1iOjrbxDDJjhddCRBvqP5T'
}






playingData:  {
  body: {
    is_playing: true,
    timestamp: 1759662626625,
    context: {
      external_urls: [Object],
      href: 'https://api.spotify.com/v1/playlists/1iOjrbxDDJjhddCRBvqP5T',
      type: 'playlist',
      uri: 'spotify:playlist:1iOjrbxDDJjhddCRBvqP5T'
    },
    progress_ms: 0,
    item: {
      album: [Object],
      artists: [Array],
      available_markets: [Array],
      disc_number: 1,
      duration_ms: 231739,
      explicit: false,
      external_ids: [Object],
      external_urls: [Object],
      href: 'https://api.spotify.com/v1/tracks/0q84FggW57NXGtLHoetS0Y',
      id: '0q84FggW57NXGtLHoetS0Y',
      is_local: false,
      name: 'Pardesiya - From "Param Sundari"',
      popularity: 82,
      preview_url: null,
      track_number: 1,
      type: 'track',
      uri: 'spotify:track:0q84FggW57NXGtLHoetS0Y'
    },
    currently_playing_type: 'track',
    actions: { disallows: [Object] }
  },
  headers: {
    'content-type': 'application/json; charset=utf-8',
    'cache-control': 'private, max-age=0',
    'x-robots-tag': 'noindex, nofollow',
    'access-control-allow-origin': '*',
    'access-control-allow-headers': 'Accept, App-Platform, Authorization, Content-Type, Origin, Retry-After, Spotify-App-Version, X-Cloud-Trace-Context, client-token, content-access-token',
    'access-control-allow-methods': 'GET, POST, OPTIONS, PUT, DELETE, PATCH',
    'access-control-allow-credentials': 'true',
    'access-control-max-age': '604800',
    'content-encoding': 'gzip',
    'strict-transport-security': 'max-age=31536000',
    'x-content-type-options': 'nosniff',
    'alt-svc': 'h3=":443"; ma=2592000,h3-29=":443"; ma=2592000, h3=":443"; ma=2592000,h3-29=":443"; ma=2592000',
    date: 'Sun, 05 Oct 2025 12:03:20 GMT',
    server: 'envoy',
    via: 'HTTP/2 edgeproxy, 1.1 google',
    connection: 'close',
    'transfer-encoding': 'chunked'
  },
  statusCode: 200
}




playingData.body.item.album:  {
  album_type: 'single',
  artists: [
    {
      external_urls: [Object],
      href: 'https://api.spotify.com/v1/artists/1mBydYMVBECdDmMfE2sEUO',
      id: '1mBydYMVBECdDmMfE2sEUO',
      name: 'Sachin-Jigar',
      type: 'artist',
      uri: 'spotify:artist:1mBydYMVBECdDmMfE2sEUO'
    },
    {
      external_urls: [Object],
      href: 'https://api.spotify.com/v1/artists/1dVygo6tRFXC8CSWURQJq2',
      id: '1dVygo6tRFXC8CSWURQJq2',
      name: 'Sonu Nigam',
      type: 'artist',
      uri: 'spotify:artist:1dVygo6tRFXC8CSWURQJq2'
    },
    {
      external_urls: [Object],
      href: 'https://api.spotify.com/v1/artists/2L4PimBfxoTMZRp2SfVP5g',
      id: '2L4PimBfxoTMZRp2SfVP5g',
      name: 'Krishnakali Saha',
      type: 'artist',
      uri: 'spotify:artist:2L4PimBfxoTMZRp2SfVP5g'
    },
    {
      external_urls: [Object],
      href: 'https://api.spotify.com/v1/artists/2fMqTqiTxUDlmcOEPaQSsx',
      id: '2fMqTqiTxUDlmcOEPaQSsx',
      name: 'Amitabh Bhattacharya',
      type: 'artist',
      uri: 'spotify:artist:2fMqTqiTxUDlmcOEPaQSsx'
    }
  ],
  available_markets: [
    'AR', 'AU', 'AT', 'BE', 'BO', 'BR', 'BG', 'CA', 'CL', 'CO',
    'CR', 'CY', 'CZ', 'DK', 'DO', 'DE', 'EC', 'EE', 'SV', 'FI',
    'FR', 'GR', 'GT', 'HN', 'HK', 'HU', 'IS', 'IE', 'IT', 'LV',
    'LT', 'LU', 'MY', 'MT', 'MX', 'NL', 'NZ', 'NI', 'NO', 'PA',
    'PY', 'PE', 'PH', 'PL', 'PT', 'SG', 'SK', 'ES', 'SE', 'CH',
    'TW', 'TR', 'UY', 'US', 'GB', 'AD', 'LI', 'MC', 'ID', 'JP',
    'TH', 'VN', 'RO', 'IL', 'ZA', 'SA', 'AE', 'BH', 'QA', 'OM',
    'KW', 'EG', 'MA', 'DZ', 'TN', 'LB', 'JO', 'PS', 'IN', 'KZ',
    'MD', 'UA', 'AL', 'BA', 'HR', 'ME', 'MK', 'RS', 'SI', 'KR',
    'BD', 'PK', 'LK', 'GH', 'KE', 'NG', 'TZ', 'UG', 'AG', 'AM',
    ... 83 more items
  ],
  external_urls: { spotify: 'https://open.spotify.com/album/4hHAxLq4VGuyb6HsyUIPGd' },
  href: 'https://api.spotify.com/v1/albums/4hHAxLq4VGuyb6HsyUIPGd',
  id: '4hHAxLq4VGuyb6HsyUIPGd',
  images: [
    {
      height: 640,
      url: 'https://i.scdn.co/image/ab67616d0000b273d5754cde395f5c46792186c7',
      width: 640
    },
    {
      height: 300,
      url: 'https://i.scdn.co/image/ab67616d00001e02d5754cde395f5c46792186c7',
      width: 300
    },
    {
      height: 64,
      url: 'https://i.scdn.co/image/ab67616d00004851d5754cde395f5c46792186c7',
      width: 64
    }
  ],
  name: 'Pardesiya (From "Param Sundari")',
  release_date: '2025-07-30',
  release_date_precision: 'day',
  total_tracks: 1,
  type: 'album',
  uri: 'spotify:album:4hHAxLq4VGuyb6HsyUIPGd'
}






{
  body: {
    access_token: 'BQD1Zfpn1j_BrT3ktnU0HqAN8jwDC4c1qr60lm-sxiZqe7oXSbAjz0dgiAXklFueVrvx7qd9cZFjFuUNpz85JlT6yn4lz6k2cOCXPzIuQZQISlwPFl3W5E1GjyaYhCjujsSV0JdrgK32CjL8owKupmF9_2f9wGokVDhNUW1ooIBbXvVAarqvrQZOxZ5Z_wF0bErUY7xkiEnJCpDunQs8kgfrocmZmdVz4O8mcreuFhd_xGb3-FXp8oD4cnY_6MS5i9-orN7SJicNrtj8sSLmK9DmRVRz3yREDeHBljHCeuzqUvjpQdQu1W170C7FQZazl9i3jv1LlxYNAeYRAZLQJi-evKeeovcXGJHmj9OwBBrdW8rGuOLD871MLcq0',
    token_type: 'Bearer',
    expires_in: 3600,
    refresh_token: 'AQCrt2g2loV0XFyzyJXfJzL5_N2gz13jOXtf-KYXq0ZzprVd535RO1R5_HcD0tFtFqzdk9GhhYqfSxXG81rQOqABV--3sPP9aiGISPCuk0SLT4b_yoQuKDZ8E-G46BRIb3E',
    scope: 'playlist-read-private playlist-read-collaborative ugc-image-upload user-follow-read playlist-modify-private user-read-email user-read-private streaming app-remote-control user-modify-playback-state user-follow-modify user-library-read user-library-modify playlist-modify-public user-read-playback-state user-read-currently-playing user-read-recently-played user-read-playback-position user-top-read'
  },
  headers: {
    date: 'Sun, 05 Oct 2025 18:42:23 GMT',
    'content-type': 'application/json',
    vary: 'Accept-Encoding',
    'request-id': '88d19776-5028-46d2-8184-bfe477a8a2bc',
    'set-cookie': [
      '__Host-device_id=AQADzRJ_p7S6KgzD0iZSSDJ3jLBUZk7EpMN93RWznXHlM4gZIl60zaY58AgToa8V-_fYg93LoJfUVuLd8o4LWoYk5XKY6SUqQZQ;Version=1;Path=/;Max-Age=2147483647;Secure;HttpOnly;SameSite=Lax',
      'sp_tr=false;Version=1;Domain=accounts.spotify.com;Path=/;Secure;SameSite=Lax'
    ],
    'content-encoding': 'gzip',
    'x-envoy-upstream-service-time': '24',
    server: 'envoy',
    'strict-transport-security': 'max-age=31536000',
    'x-content-type-options': 'nosniff',
    'alt-svc': 'h3=":443"; ma=2592000,h3-29=":443"; ma=2592000, h3=":443"; ma=2592000,h3-29=":443"; ma=2592000',
    via: 'HTTP/2 edgeproxy, 1.1 google',
    connection: 'close',
    'transfer-encoding': 'chunked'
  },
  statusCode: 200
}
artistData:  {
  body: {
    items: [],
    total: 0,
    limit: 0,
    offset: 0,
    href: 'https://api.spotify.com/v1/me/top/artists?limit=20&time_range=long_term',
    next: null,
    previous: null
  },
  headers: {
    'content-type': 'application/json; charset=utf-8',
    'cache-control': 'private, max-age=0',
    etag: '"MC-ImIyNTI3ZWQ5MDI5NmViZTQxZGUxMWMwZjhlN2RlY2E3Ig=="',
    'x-robots-tag': 'noindex, nofollow',
    'access-control-allow-origin': '*',
    'access-control-allow-headers': 'Accept, App-Platform, Authorization, Content-Type, Origin, Retry-After, Spotify-App-Version, X-Cloud-Trace-Context, client-token, content-access-token',
    'access-control-allow-methods': 'GET, POST, OPTIONS, PUT, DELETE, PATCH',
    'access-control-allow-credentials': 'true',
    'access-control-max-age': '604800',
    'content-encoding': 'gzip',
    'strict-transport-security': 'max-age=31536000',
    'x-content-type-options': 'nosniff',
    'alt-svc': 'h3=":443"; ma=2592000,h3-29=":443"; ma=2592000, h3=":443"; ma=2592000,h3-29=":443"; ma=2592000',
    date: 'Sun, 05 Oct 2025 18:42:24 GMT',
    server: 'envoy',
    via: 'HTTP/2 edgeproxy, 1.1 google',
    connection: 'close',
    'transfer-encoding': 'chunked'
  },
  statusCode: 200
}
############################################################################
trackData:  {
  body: {
    items: [ [Object], [Object], [Object] ],
    total: 3,
    limit: 20,
    offset: 0,
    href: 'https://api.spotify.com/v1/me/top/tracks?limit=20&time_range=long_term',
    next: null,
    previous: null
  },
  headers: {
    'content-type': 'application/json; charset=utf-8',
    'cache-control': 'private, max-age=0',
    etag: '"MC-ImE4OTg2OTJjYjQ1MWU2NzYxYWQyYjJiZjdiMjRmMTliIg=="',
    'x-robots-tag': 'noindex, nofollow',
    'access-control-allow-origin': '*',
    'access-control-allow-headers': 'Accept, App-Platform, Authorization, Content-Type, Origin, Retry-After, Spotify-App-Version, X-Cloud-Trace-Context, client-token, content-access-token',
    'access-control-allow-methods': 'GET, POST, OPTIONS, PUT, DELETE, PATCH',
    'access-control-allow-credentials': 'true',
    'access-control-max-age': '604800',
    'content-encoding': 'gzip',
    'strict-transport-security': 'max-age=31536000',
    'x-content-type-options': 'nosniff',
    'alt-svc': 'h3=":443"; ma=2592000,h3-29=":443"; ma=2592000, h3=":443"; ma=2592000,h3-29=":443"; ma=2592000',
    date: 'Sun, 05 Oct 2025 18:42:23 GMT',
    server: 'envoy',
    via: 'HTTP/2 edgeproxy, 1.1 google',
    connection: 'close',
    'transfer-encoding': 'chunked'
  },
  statusCode: 200
}
recentlyPlayedData:  {
  body: {
    items: [
      [Object], [Object],
      [Object], [Object],
      [Object], [Object],
      [Object], [Object],
      [Object], [Object],
      [Object], [Object],
      [Object], [Object],
      [Object], [Object],
      [Object]
    ],
    next: 'https://api.spotify.com/v1/me/player/recently-played?before=1757018837160&limit=20',
    cursors: { after: '1759665683814', before: '1757018837160' },
    limit: 20,
    href: 'https://api.spotify.com/v1/me/player/recently-played?limit=20'
  },
  headers: {
    'content-type': 'application/json; charset=UTF-8',
    'cache-control': 'private, max-age=0',
    'x-robots-tag': 'noindex, nofollow',
    'access-control-allow-origin': '*',
    'access-control-allow-headers': 'Accept, App-Platform, Authorization, Content-Type, Origin, Retry-After, Spotify-App-Version, X-Cloud-Trace-Context, client-token, content-access-token',
    'access-control-allow-methods': 'GET, POST, OPTIONS, PUT, DELETE, PATCH',
    'access-control-allow-credentials': 'true',
    'access-control-max-age': '604800',
    'content-encoding': 'gzip',
    'strict-transport-security': 'max-age=31536000',
    'x-content-type-options': 'nosniff',
    'alt-svc': 'h3=":443"; ma=2592000,h3-29=":443"; ma=2592000, h3=":443"; ma=2592000,h3-29=":443"; ma=2592000',
    date: 'Sun, 05 Oct 2025 18:42:24 GMT',
    server: 'envoy',
    via: 'HTTP/2 edgeproxy, 1.1 google',
    connection: 'close',
    'transfer-encoding': 'chunked'
  },
  statusCode: 200
}
playbackStateData:  {
  body: {},
  headers: {
    'cache-control': 'private, max-age=0',
    'x-robots-tag': 'noindex, nofollow',
    'access-control-allow-origin': '*',
    'access-control-allow-headers': 'Accept, App-Platform, Authorization, Content-Type, Origin, Retry-After, Spotify-App-Version, X-Cloud-Trace-Context, client-token, content-access-token',
    'access-control-allow-methods': 'GET, POST, OPTIONS, PUT, DELETE, PATCH',
    'access-control-allow-credentials': 'true',
    'access-control-max-age': '604800',
    'strict-transport-security': 'max-age=31536000',
    'x-content-type-options': 'nosniff',
    'alt-svc': 'h3=":443"; ma=2592000,h3-29=":443"; ma=2592000, h3=":443"; ma=2592000,h3-29=":443"; ma=2592000',
    vary: 'Accept-Encoding',
    date: 'Sun, 05 Oct 2025 18:42:23 GMT',
    server: 'envoy',
    via: 'HTTP/2 edgeproxy, 1.1 google',
    connection: 'close'
  },
  statusCode: 204
}
playingData:  {
  body: {},
  headers: {
    'cache-control': 'private, max-age=0',
    'x-robots-tag': 'noindex, nofollow',
    'access-control-allow-origin': '*',
    'access-control-allow-headers': 'Accept, App-Platform, Authorization, Content-Type, Origin, Retry-After, Spotify-App-Version, X-Cloud-Trace-Context, client-token, content-access-token',
    'access-control-allow-methods': 'GET, POST, OPTIONS, PUT, DELETE, PATCH',
    'access-control-allow-credentials': 'true',
    'access-control-max-age': '604800',
    'strict-transport-security': 'max-age=31536000',
    'x-content-type-options': 'nosniff',
    'alt-svc': 'h3=":443"; ma=2592000,h3-29=":443"; ma=2592000, h3=":443"; ma=2592000,h3-29=":443"; ma=2592000',
    vary: 'Accept-Encoding',
    date: 'Sun, 05 Oct 2025 18:42:23 GMT',
    server: 'envoy',
    via: 'HTTP/2 edgeproxy, 1.1 google',
    connection: 'close'
  },
  statusCode: 204
}
meData:  {
  body: {
    country: 'IN',
    display_name: 'Mohit Mudgal',
    email: 'mmudgal33@gmail.com',
    explicit_content: { filter_enabled: false, filter_locked: false },
    external_urls: {
      spotify: 'https://open.spotify.com/user/31zn4mjuucradixokfzlw5myytru'
    },
    followers: { href: null, total: 0 },
    href: 'https://api.spotify.com/v1/users/31zn4mjuucradixokfzlw5myytru',
    id: '31zn4mjuucradixokfzlw5myytru',
    images: [],
    product: 'free',
    type: 'user',
    uri: 'spotify:user:31zn4mjuucradixokfzlw5myytru'
  },
  headers: {
    'content-type': 'application/json; charset=utf-8',
    'cache-control': 'private, max-age=0',
    etag: '"MC-ImIyNzgyZDNkZjYzYWNlYTY5NjZhNjI2MDNmZGEyN2JjIg=="',
    vary: 'Authorization',
    'x-robots-tag': 'noindex, nofollow',
    'access-control-allow-origin': '*',
    'access-control-allow-headers': 'Accept, App-Platform, Authorization, Content-Type, Origin, Retry-After, Spotify-App-Version, X-Cloud-Trace-Context, client-token, content-access-token',
    'access-control-allow-methods': 'GET, POST, OPTIONS, PUT, DELETE, PATCH',
    'access-control-allow-credentials': 'true',
    'access-control-max-age': '604800',
    'content-encoding': 'gzip',
    'strict-transport-security': 'max-age=31536000',
    'x-content-type-options': 'nosniff',
    'alt-svc': 'h3=":443"; ma=2592000,h3-29=":443"; ma=2592000, h3=":443"; ma=2592000,h3-29=":443"; ma=2592000',
    date: 'Sun, 05 Oct 2025 18:42:23 GMT',
    server: 'envoy',
    via: 'HTTP/2 edgeproxy, 1.1 google',
    connection: 'close',
    'transfer-encoding': 'chunked'
  },
  statusCode: 200
}
music name: Clique
artist name: Play to continue what was playing
photo url: images/nada.jpeg
playlistsData.body.items[0].name:  My top tracks playlist
playlistsData.body.items[0].images:  https://i.scdn.co/image/ab67616d00001e020504fdf58bae8cd52dd13047
playlistsData.body.items[0].uri:  spotify:playlist:1iOjrbxDDJjhddCRBvqP5T
playlistsData.body.items[0].owner.display_name:  Mohit Mudgal
{
  ArrayPlaylist: [
    Playlist {
      name: 'My top tracks playlist',
      cover: 'https://i.scdn.co/image/ab67616d00001e020504fdf58bae8cd52dd13047',
      uri: 'spotify:playlist:1iOjrbxDDJjhddCRBvqP5T',
      owner: 'Mohit Mudgal'
    },
    Playlist {
      name: 'My top tracks playlist',
      cover: 'https://i.scdn.co/image/ab67616d00001e020504fdf58bae8cd52dd13047',
      uri: 'spotify:playlist:1z9HSN71vBSdBE99uB8eDc',
      owner: 'Mohit Mudgal'
    },
    Playlist {
      name: 'Mohit Mudgal',
      cover: 'https://i.scdn.co/image/ab67616d00001e020504fdf58bae8cd52dd13047',
      uri: 'spotify:playlist:6pLHooDrmmXR5eJTDdKyKD',
      owner: 'Mohit Mudgal'
    },
    Playlist {
      name: '',
      cover: 'https://i.scdn.co/image/ab67616d00001e020504fdf58bae8cd52dd13047',
      uri: 'spotify:playlist:2rqcbzaPpT1lQs8SFwIQ2N',
      owner: 'learnoutloud'
    }
  ],
  ArrayDevices: [
    Device {
      name: 'Web Player (Chrome)',
      type: 'Computer',
      id: '358a7fa32ac93529af5889751c5ab7b890e00537'
    }
  ]
}
playlist  spotify:playlist:1iOjrbxDDJjhddCRBvqP5T
device  358a7fa32ac93529af5889751c5ab7b890e00537
