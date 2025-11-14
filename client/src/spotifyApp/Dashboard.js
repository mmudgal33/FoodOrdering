import { useState, useEffect } from "react"
import { useNavigate } from 'react-router-dom'
import useAuth from "./useAuth"

import Player from "./Player"
import PlaylistSongs from "./PlaylistSongs"

import { Container } from "react-bootstrap"
import SpotifyWebApi from "spotify-web-api-node"
import { spotifyService } from './SpotifyService';

import user_profile from './assets/user_profile.jpg';

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



const flexS = {
  display: 'flex',
  alignItems: 'center',
  gap: '36px',
  flexWrap: 'nowrap', // Change to nowrap for horizontal scroll
  flexDirection: 'row',
  overflowX: 'auto', // Enable horizontal scrolling
  overflowY: 'hidden', // Hide vertical scroll
  padding: '10px 0',
  // Optional: Hide scrollbar for cleaner look (webkit browsers)
  scrollbarWidth: 'none', // Firefox
  msOverflowStyle: 'none', // IE/Edge
};


const spotifyApi = new SpotifyWebApi({
  // clientId: "8b945ef10ea24755b83ac50cede405a0",
  // clientId: '48d88eedb5cc4667b1b08a7b9eb933df',
  clientId: "e257dc917f8640b5a9afe2f6e6ac1ef9",

})

export default function Dashboard({ code }) {

  console.log('Dashboard code ', code);

  let accessToken = useAuth(code);
  const navigate = useNavigate()




  const [user, setUser] = useState(null);
  const [playlists, setPlaylists] = useState([]);
  const [topTracks, setTopTracks] = useState([]);

  // const [search, setSearch] = useState('');

  const [search, setSearch] = useState("")
  const [playingTrack, setPlayingTrack] = useState()

  const [searchResults, setSearchResults] = useState([])
  // const [lyrics, setLyrics] = useState("")
  const [deviceId, setDeviceId] = useState("")
  const [playlistId, setplaylistId] = useState("");

  

  

  console.log('Dashboard Token ', accessToken);
  console.log('localStorage ', localStorage.getItem('spotify_access_token'))
  console.log('searchResults ', searchResults)
  // console.log('search ',search)
  console.log('deviceId ',deviceId);
  


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


  useEffect(()=>{
    if (!accessToken) return

    const setActiveDevice = async () => {
      const activeDeviceId = await ensureActiveDevice();
      setDeviceId(activeDeviceId);
    };

    setActiveDevice();

  }, [accessToken])

  const ensureActiveDevice = async () => {
    try {
      const response = await fetch('https://api.spotify.com/v1/me/player/devices', {
        headers: {
          Authorization: `Bearer ${accessToken}`,
        },
      });
      const { devices } = await response.json();
      // console.log('devices ',devices)

      if (!devices || devices.length === 0) {
        alert('No active devices found. Please start playing a song on a Spotify app.');
        return null;
      }

      const activeDeviceId = devices[0]?.id; 
      if (!activeDeviceId) {
        alert('No active device found. Please activate a Spotify player.');
        return null;
      }

      return activeDeviceId;
      
    } catch (error) {
      console.error('Error ensuring active device:', error.message);
      return null;
    }
  };



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

  
  const handleLogout = async () => {
    accessToken='';
    localStorage.removeItem('spotify_access_token');
    localStorage.removeItem('spotify_refresh_token');
    navigate("/")
  };



  /////////////////////////////////////////////////////////////////////////////////////////////




  return (
    <div style={{ marginTop: '80px' }}>
      <Container className="d-flex flex-column py-2" style={{ height: "100vh" }}>

        


        <div className="dashboard">
          <header>
          <img src={user.images?.[0]?.url || user_profile} alt="Profile" className="profile-img" />
          <button onClick={()=>handleLogout()} style={buttonS}>Logout</button>
            <h1>Welcome, {user.display_name} 
            
            </h1>
            
            {/* <button onClick={()=>spotifyService.logout()}>Logout</button> */}
            
          </header>
        </div>

        

        



        <div className="sections">
          {/* <div className="flex-grow-1 my-2"> */}
          <section>
          <hr /><h2>{user.display_name} Top Tracks</h2><hr />
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

          

          <section>
          <hr/><h2>{user.display_name} Playlists</h2><hr />
            <div style={flexS} >
              {playlists.map(playlist => (
                <div key={playlist.id} className="playlist-card" >
                  {/* <img src={playlist.images[0]?.url} alt={playlist.name} /> */}
                  <img height="200px" src={playlist.images?.[0]?.url} alt={playlist.name} />
                  <h4>{playlist.name}</h4>
                  <p>{playlist.tracks.total} tracks</p>
                  {/* <button onClick={()=>getPlaylistTracks(playlist.id)} style={buttonS}>playlist tracks</button> */}
                  {/* <button onClick={()=>getPlaylistSongsDetails(playlist.id)} style={buttonS}>playlist tracks</button> */}
                  <button onClick={()=>setplaylistId(playlist.id)} style={buttonS}>playlist tracks</button>
                </div>
              ))}
            </div>
          </section>

          <hr /><h2>Click <span style={{fontWeight:'25px', color:'red'}}>Playlist Tracks</span> Button For Its Tracks</h2><hr />

          {playlistId && (
        <PlaylistSongs 
          accessToken={accessToken} 
          playlistId={playlistId}
          handlePlay={handlePlay}
        />
      )}

        </div>





        <hr /><h2>Search Tracks For Listening</h2><hr />




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













//   const getPlaylistTracks = async (playlistId) => {
//     try {
//       const response = await fetch(`https://api.spotify.com/v1/playlists/${playlistId}/tracks`, {
//         headers: {
//           'Authorization': `Bearer ${accessToken}`
//         }
//       });
      
//       const data = await response.json();
//       console.log('getPlaylistTracks ',data)
//       return data;
//     } catch (error) {
//       console.error('Error fetching playlist tracks:', error);
//     }
//   };



//   const getPlaylistSongsDetails = async (playlistId) => {
//     setplaylistId(playlistId)
//     try {
//       const playlistData = await getPlaylistTracks(playlistId);
      
//       if (!playlistData || !playlistData.items) {
//         console.log('No tracks found in playlist');
//         return [];
//       }
  
//       const tracks = playlistData.items.map(item => {
//         const track = item.track;
//         return {
//           id: track.id,
//           name: track.name,
//           uri: track.uri, // Track URI
//           images: {
//             large: getImageBySize(track.album.images, 'large'),
//             medium: getImageBySize(track.album.images, 'medium'),
//             small: getImageBySize(track.album.images, 'small')
//           },
//           duration_ms: track.duration_ms,
//           artists: track.artists.map(artist => ({
//             id: artist.id,
//             name: artist.name,
//             uri: artist.uri
//           })),
//           album: {
//             id: track.album.id,
//             name: track.album.name,
//             uri: track.album.uri,
//             images: track.album.images, // Array of images (different sizes)
//             release_date: track.album.release_date
//           },
//           preview_url: track.preview_url,
//           external_urls: track.external_urls
//         };
//       });
  
//       return tracks;
//     } catch (error) {
//       console.error('Error processing playlist tracks:', error);
//       return [];
//     }
//   };


//   // Helper function to get specific image size
// const getImageBySize = (images, size) => {
//   const sizeMap = {
//     'large': 0,    // 640px
//     'medium': 1,   // 300px
//     'small': 2     // 64px
//   };
  
//   return images[sizeMap[size]] || images[0];
// };

























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


  // <div>
  //         <Player accessToken={accessToken} trackUri={playingTrack?.uri} />
  //       </div> 

  //       <Form.Control
  //         type="search"
  //         placeholder="Search Songs/Artists"
  //         value={search}
  //         onChange={e => setSearch(e.target.value)}
  //       />
  //       <div className="flex-grow-1 my-2" style={{ overflowY: "auto" }}>
  //         {searchResults.map(track => (
  //           <TrackSearchResult
  //             track={track}
  //             key={track.uri}
  //             chooseTrack={chooseTrack}
  //           />
  //         ))}
          

  //         {searchResults.length === 0 && (
  //           <div className="text-center" style={{ whiteSpace: "pre" }}>
  //             {lyrics}
  //           </div>
  //         )}
  //       </div>



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