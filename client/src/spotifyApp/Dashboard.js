import { useState, useEffect } from "react"
import useAuth from "./useAuth"

import Player from "./Player"
import TrackSearchResult from "./TrackSearchResult"


import { Container, Form } from "react-bootstrap"
import SpotifyWebApi from "spotify-web-api-node"


import { spotifyService } from './SpotifyService';

// http://127.0.0.1:5000

let buttonS = {
    marginTop: '5px',
    outline: 'none',
    border: '1px solid transparent',
    padding: '0.5rem 1.5rem',
    backgroundColor: '#f22a2a',
    color: '#fff',
    fontWeight: '500',
    fontSize: '20px',
    borderRadius: '20px',
    cursor: 'pointer'
}

let inputS = {
  outline: 'none',
    border: 'none',
    borderBottom: '1px solid #333',
    width: '50%',
    paddingLeft: '0.25rem',
    paddingBottom: '0.25rem',
    transition: '150ms all ease-in-out',
}

let flexS = {
  display: 'flex', 
  alignItems: 'center', 
  justifyContent: 'spaceEvenly', 
  gap: '36px', flexWrap: 'wrap', 
  flexDirection: 'row'}


const spotifyApi = new SpotifyWebApi({
  // clientId: "8b945ef10ea24755b83ac50cede405a0",
  // clientId: '48d88eedb5cc4667b1b08a7b9eb933df',
  clientId: "e257dc917f8640b5a9afe2f6e6ac1ef9",

})

export default function Dashboard({ code }) {

  console.log('Dashboard code ', code);

  const accessToken = useAuth(code);




  const [user, setUser] = useState(null);
  const [playlists, setPlaylists] = useState([]);
  const [topTracks, setTopTracks] = useState([]);

  // const [search, setSearch] = useState('');

  const [search, setSearch] = useState("")
  const [searchResults, setSearchResults] = useState([])
  const [playingTrack, setPlayingTrack] = useState()
  // const [lyrics, setLyrics] = useState("")



  console.log('Dashboard Token ', accessToken);
  console.log('localStorage ', localStorage.getItem('spotify_access_token'))
  console.log('searchResults ', searchResults)
  // console.log('search ',search)


  function chooseTrack(track) {
    setPlayingTrack(track)
    setSearch("")
    // setLyrics("")
  }

  function handlePlay(track) {
    chooseTrack(track)
  }


  // setting access token
  useEffect(() => {
    if (!accessToken) return
    spotifyApi.setAccessToken(accessToken)
  }, [accessToken])






  ////////////////////////////////////////////////////////////////////////////////////////////
  console.log('Dashboard code ', code);
  console.log('Dashboard Token ', accessToken);

  // console.log(`playlists ${JSON.stringify(playlists)}`)
  console.log('playlists ', playlists);
  console.log('topTracks ', topTracks);
  console.log('user ', user);



  // call loadUserData function 
  useEffect(() => {
    loadUserData();
  }, []);


  const loadUserData = async () => {
    try {
      const [userData, playlistsData, topTracksData] = await Promise.all([
        spotifyService.getCurrentUser(),
        spotifyService.getUserPlaylists(),
        spotifyService.getTopTracks(10)
      ]);

      setUser(userData);
      setPlaylists(playlistsData.items);
      setTopTracks(topTracksData.items);
    } catch (error) {
      console.error('Error loading user data:', error);
    }
  };






  const handleSearch = async (e) => {
    e.preventDefault();
    if (!search.trim()) return;

    try {
      const results = await spotifyService.search(search, ['track', 'artist']);
      setSearchResults(results.tracks.items);
    } catch (error) {
      console.error('Search error:', error);
    }
  };






  if (!user) {
    return <div>Loading...</div>;
  }





  /////////////////////////////////////////////////////////////////////////////////////////////




  return (
    <div style={{ marginTop: '80px' }}>
      <Container className="d-flex flex-column py-2" style={{ height: "100vh" }}>

        


        <div className="dashboard">
          <header>
            <h1>Welcome, {user.display_name}</h1>
            <img src={user.images?.[0]?.url} alt="Profile" className="profile-img" />
            {/* <button onClick={()=>spotifyService.logout()}>Logout</button> */}
          </header>
        </div>



        <div className="sections">
          {/* <div className="flex-grow-1 my-2"> */}
          <section>
            <h2>Your Top Tracks</h2>
            <div style={flexS}>
              {topTracks.map(track => (
                <div key={track.id} className="playlist-card">
                  <img height="200px" src={track.album.images[1]?.url} alt={track.name} />
                  <h5>{track.name.slice(0, 25)}</h5>
                  <p>{track.artists[0].name}</p>
                  <button onClick={()=>handlePlay(track)} style={buttonS}>Play</button>
                  {/* <button onClick={handlePlayPause}>Play</button> */}
                </div>
              ))}
            </div>
          </section>

          <hr /><hr /><hr /><hr />

          <section>
            <h2>Your Playlists</h2>
            <div style={flexS} >
              {playlists.map(playlist => (
                <div key={playlist.id} className="playlist-card" >
                  {/* <img src={playlist.images[0]?.url} alt={playlist.name} /> */}
                  <img height="200px" src={playlist.images?.[0]?.url} alt={playlist.name} />
                  <h4>{playlist.name}</h4>
                  <p>{playlist.tracks.total} tracks</p>
                  
                </div>
              ))}
            </div>
          </section>

        </div>




        <div>
          <form onSubmit={handleSearch} style={{marginTop:'50px'}}>
            <input
              type="text"
              value={search}
              onChange={(e) => setSearch(e.target.value)}
              placeholder="Search for tracks, artists..."
              style={inputS}
            />
            &nbsp;&nbsp;
            <button type="submit" style={buttonS}>Search</button>
          </form>


          {searchResults.length > 0 && (
            <section>
              <h2>Search Results</h2>
              <div className="search-results">
                {searchResults.map(track => (
                  
                  <div key={track.id} className="d-flex m-2 align-items-center" style={{ cursor: "pointer" }} onClick={()=>handlePlay(track)}>
                    <img src={track.album.images?.[2]?.url} alt={track.name} style={{ height: "64px", width: "64px" }} />
                    <div>
                      <h4>{track.name}</h4>
                      <div className="text-muted">{track.artists[0].name}</div>
                    </div>
                    
                    {/* <button onClick={()=>handlePlay(track)}>Play</button> */}

                  </div>
                ))}
              </div>
            </section>
          )}

        </div>

        <br/><br/>



        <div>
          <Player accessToken={accessToken} trackUri={playingTrack?.uri} />
        </div>


      </Container>

    </div>
  )
}














  // useEffect(() => {
  //   if (!search) return setSearchResults([])
  //   if (!accessToken) return

  //   let cancel = false
  //   spotifyApi.searchTracks(search).then(res => {
  //     if (cancel) return
  //     setSearchResults(
  //       res.body.tracks.items.map(track => {
  //         const smallestAlbumImage = track.album.images?.reduce(
  //           (smallest, image) => {
  //             if (image.height < smallest.height) return image
  //             return smallest
  //           },
  //           track.album.images[0]
  //         )

  //         return {
  //           artist: track.artists[0].name,
  //           title: track.name,
  //           uri: track.uri,
  //           albumUrl: smallestAlbumImage.url,
  //         }
  //       })
  //     )
  //   })

  //   return () => (cancel = true)
  // }, [search, accessToken])


  {/* <div>
          <Player accessToken={accessToken} trackUri={playingTrack?.uri} />
        </div> */}

        {/* <Form.Control
          type="search"
          placeholder="Search Songs/Artists"
          value={search}
          onChange={e => setSearch(e.target.value)}
        />
        <div className="flex-grow-1 my-2" style={{ overflowY: "auto" }}>
          {searchResults.map(track => (
            <TrackSearchResult
              track={track}
              key={track.uri}
              chooseTrack={chooseTrack}
            />
          ))}
          

          {searchResults.length === 0 && (
            <div className="text-center" style={{ whiteSpace: "pre" }}>
              {lyrics}
            </div>
          )}
        </div> */}



  // const handlePlayPause = async (track) => {
  //   try {
  //     const playbackState = await spotifyService.getPlaybackState();

  //     if (playbackState.is_playing) {
  //       await spotifyService.pause();
  //     } else {
  //       await spotifyService.play();
  //     }
  //   } catch (error) {
  //     console.error('Playback error:', error);
  //   }
  // };






// const handlePrevious = async () => {
  //   try {
  //     const playbackState = await spotifyService.getPlaybackState();

  //     if (playbackState.is_playing) {
  //       await spotifyService.pause();
  //     } else {
  //       await spotifyService.prev();
  //     }
  //   } catch (error) {
  //     console.error('Playback error:', error);
  //   }
  // };

  // const handleNext = async () => {
  //   try {
  //     const playbackState = await spotifyService.getPlaybackState();

  //     if (playbackState.is_playing) {
  //       await spotifyService.pause();
  //     } else {
  //       await spotifyService.next();
  //     }
  //   } catch (error) {
  //     console.error('Playback error:', error);
  //   }
  // };







//   useEffect(() => {
//     if (!playingTrack) return

//     axios
//       .get("http://127.0.0.1:5000/dmain", {
//         params: {
//           name: 'mohit',
//           email: 'mmudgal33@gmail.com',
//         },
//       })
//       .then(res => {
//         setData(res);
//         console.log('response', res);

//       })
//   }, [playingTrack])

//  console.log('data', data)




  // useEffect(() => {
  //   console.log('useAuth ', code)
  //   axios
  //     .get("http://127.0.0.1:5000/login",
  //       {code,}
  //     )
  //     .then(res => {
  //       setAccessToken(res.data.accessToken)
  //       setRefreshToken(res.data.refreshToken)
  //       setExpiresIn(res.data.expiresIn)
  //       window.history.pushState({}, null, "/")
  //     })
  //     .catch(() => {
  //       window.location = "/"
  //     })
  // }, [code])