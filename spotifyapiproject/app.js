// node --watch ./app.js

const express = require('express');
const SpotifyWebApi = require('spotify-web-api-node');
require('dotenv').config();

const port = 8888;
const scopes = [
    'ugc-image-upload',
    'user-read-playback-state',
    'user-modify-playback-state',
    'user-read-currently-playing',
    'streaming',
    'app-remote-control',
    'user-read-email',
    'user-read-private',
    'playlist-read-collaborative',
    'playlist-modify-public',
    'playlist-read-private',
    'playlist-modify-private',
    'user-library-modify',
    'user-library-read',
    'user-top-read',
    'user-read-playback-position',
    'user-read-recently-played',
    'user-follow-read',
    'user-follow-modify'
];

var spotifyApi = new SpotifyWebApi({
    // clientId: process.env.SPOTIFY_CLIENT_ID,
    // clientSecret: process.env.SPOTIFY_CLIENT_SECRET,
    // redirectUri: "http://localhost:8888/callback",
    clientId: 'e257dc917f8640b5a9afe2f6e6ac1ef9',
    clientSecret: 'b7265469b062446b973c4ad5a4e24c53',
    redirectUri: 'http://127.0.0.1:8888/callback'
});

const app = express(); 
let idUser = "";
let access_token = "";
let MusicPlaying;

class Playlist {
  constructor(name, cover, uri, owner) {
    this.name = name;
    this.cover = cover;
    this.uri = uri;
    this.owner = owner;
  }
}

class Device {
  constructor(name, type, id) {
    this.name = name;
    this.type = type;
    this.id = id;
  }
}

app.use(express.static('public'));
app.use("/css", express.static(__dirname + '/public/css'));
app.use("/js", express.static(__dirname + '/public/js'));

app.set("views", "./views");
app.set("view engine", "ejs"); 

app.get('', (req, res) => {
    res.render("login");
});

app.get('/login', (req, res) => {
    res.redirect(spotifyApi.createAuthorizeURL(scopes));
});

app.get('/callback', (req, res) => {
    const error = req.query.error;
    const code = req.query.code;
    const state = req.query.state;
  
    if (error) {
      console.error('Callback Error:', error);
      res.send(`Callback Error: ${error}`);
      return;
    }
  
    spotifyApi
      .authorizationCodeGrant(code)
      .then(data => {
        console.log(data);
        access_token = data.body['access_token'];
        const refresh_token = data.body['refresh_token'];
        const expires_in = data.body['expires_in'];
  
        spotifyApi.setAccessToken(access_token);
        //console.log("access token: " + access_token);
        spotifyApi.setRefreshToken(refresh_token);
   
        setInterval(async () => {
          const data = await spotifyApi.refreshAccessToken();
          access_token = data.body['access_token'];
          spotifyApi.setAccessToken(access_token);
        }, expires_in / 2 * 1000);

        res.redirect('/main');
      })
      .catch(error => {
        console.error('Error getting Tokens:', error);
        res.send(`Error getting Tokens: ${error}`);
      });
});

app.get('/main', (req, res) => {

  Promise.all([
    spotifyApi.getMyTopArtists({limit: 20, time_range: 'long_term'}),
    spotifyApi.getMyTopTracks({limit: 20, time_range: 'long_term'}),
    spotifyApi.getMyRecentlyPlayedTracks({limit: 20}),
    spotifyApi.getMyCurrentPlaybackState(),
    spotifyApi.getMyCurrentPlayingTrack(),
    spotifyApi.getMe()
  ])
  .then(function([artistData, trackData, recentlyPlayedData, playbackStateData, playingData, meData]) {
    let artistas = artistData.body.items.map(artist => artist.name).join('# ');
    let musicas = trackData.body.items.map(track => `${track.name} - ${track.artists[0].name}`).join('# ');
    let musicasRecentes = recentlyPlayedData.body.items.map(item => `${item.track.name} - ${item.track.artists[0].name}`).join('# ');
    let playingMusica = "";
    let playingArtista = "";
    let playingFoto = "";
    if (playbackStateData.body && playbackStateData.body.is_playing){
      playingMusica = playingData.body.item.name; 
      playingArtista = playingData.body.item.artists[0].name;
      playingFoto = playingData.body.item.album.images[0].url;   
      MusicPlaying = true; 
    }
    else {
      playingMusica = "Clique";
      playingArtista = "Play para continuar o que estava tocando";  
      playingFoto = "images/nada.jpeg";
      MusicPlaying = false;  
    }
    idUser = meData.body.id;
    /* console.log("nome da musica: " + playingMusica);
    console.log("nome do artista: " + playingArtista);
    console.log("url da foto" + playingFoto) */
    res.render("main", {artistas: artistas, musicas: musicas, musicasRecentes: musicasRecentes, playingMusica: playingMusica, playingArtista: playingArtista, playingFoto: playingFoto});
  }, function(err) {
    res.redirect(`http://localhost:8888/erro?erro=${err.statusCode}`); 
  }); 
});

app.get('/config', (req, res) => {
  Promise.all([
    spotifyApi.getUserPlaylists(idUser),
    spotifyApi.getMyDevices()
  ])
  .then(function([playlistsData, devicesData]) {
    let ArrayPlaylist = [];
    let ArrayDevices = [];

    console.log('playlistsData: ',playlistsData.items)
    
    if(playlistsData.body.items.length < 1){
      p = new Playlist("Sem playlists", "images/nada.jpeg", "Adicione playlists na sua bibloteca para tocá-las por aqui.");  
      ArrayPlaylist.push(p); 
    }
    else{
      for(i = 0; i < playlistsData.body.items.length; i++){
        // p = new Playlist(playlistsData.body.items[i].name, playlistsData.body.items[i].images[0].url, playlistsData.body.items[i].uri, playlistsData.body.items[i].owner.display_name);
        // p = new Playlist(playlistsData.body.items[i].name, playlistsData.body.items[i].images.url, playlistsData.body.items[i].uri, playlistsData.body.items[i].owner.display_name);
        p = new Playlist(playlistsData.body.items[i].name, playlistsData.body.items[0].images[0].url, playlistsData.body.items[i].uri, playlistsData.body.items[i].owner.display_name);
        ArrayPlaylist.push(p);
      }
    }
    if(devicesData.body.devices.length < 1){
      d = new Device("Sem dispositivos ativos", "Inicie seu Spotify em algum dispositivo e recarregue para que ele apareça aqui.");
      ArrayDevices.push(d);
    }
    else{
      for(i = 0; i < devicesData.body.devices.length; i++){
        d = new Device(devicesData.body.devices[i].name, devicesData.body.devices[i].type, devicesData.body.devices[i].id);
        ArrayDevices.push(d);
      }
    }
    res.render('config', {ArrayPlaylist: ArrayPlaylist, ArrayDevices: ArrayDevices});
    console.log({ArrayPlaylist: ArrayPlaylist, ArrayDevices: ArrayDevices})
  }, function(err) {
    res.redirect(`http://localhost:8888/erro?erro=${err.statusCode}`);
  });  
});    

app.get('/pause', (req, res) => {
  if(MusicPlaying){
    spotifyApi.pause({
      "data": "",
    })
      .then(function() {
        res.redirect(307, 'http://localhost:8888/main');
      }, function(err) {
        res.redirect(`http://localhost:8888/erro?erro=${err.statusCode}`);
      });
  }

  else res.redirect(307, 'http://localhost:8888/main');
  
});

app.get('/player', (req, res) => {

  var playlist = req.query.playlist;
  var device = req.query.device;
  //console.log(playlist);
  //console.log(device); 

  spotifyApi.play({
    "context_uri": playlist,
    "device_id": device, 
  })
    .then(function() {
      res.redirect(307, 'http://localhost:8888/main');
    }, function(err) {
      res.redirect(`http://localhost:8888/erro?erro=${err.statusCode}`);
    });
});

app.get('/next', (req, res) => {
  if(MusicPlaying){
    spotifyApi.skipToNext()
      .then(function() {
        res.redirect(307, 'http://localhost:8888/main');
      }, function(err) {
        res.redirect(`http://localhost:8888/erro?erro=${err.statusCode}`);
      });
  }
  else res.redirect(307, 'http://localhost:8888/main');
});

app.get('/prev', (req, res) => {
  if(MusicPlaying){
    spotifyApi.skipToPrevious()
      .then(function() {
        res.redirect(307, 'http://localhost:8888/main');
      }, function(err) {
        res.redirect(`http://localhost:8888/erro?erro=${err.statusCode}`);
      });
  }
  else res.redirect(307, 'http://localhost:8888/main'); 
}); 

app.get('/mute', function(req, res) {
  spotifyApi.getMyCurrentPlaybackState()
    .then(function(data) {
      let currPorcVol = data.body.device.volume_percent;
      let newPorcVol;

      if (currPorcVol > 0) newPorcVol = 0;
      else newPorcVol = 100; 

    spotifyApi.setVolume(newPorcVol)
      .then(function () {
        res.redirect(307, 'http://localhost:8888/main');
        }, function(err) {
          res.redirect(`http://localhost:8888/erro?erro=${err.statusCode}`);
      });
    })
});

app.get('/play', function (req, res) {
  spotifyApi.play({
    "data": "",
  })
  .then(function() {
    res.redirect(307, 'http://localhost:8888/main');
  }, function(err) {
    res.redirect(307, 'http://localhost:8888/config');
  });
});

app.get('/erro', (req, res) => {
  var erro = req.query.erro
  res.render('erro', {erro: erro})
});
  
app.listen(port, () => console.info("Music Playing Site http://localhost:8888"));
