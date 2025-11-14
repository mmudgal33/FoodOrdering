import { useState, useEffect } from "react"
// import getPlaylistSongsDetails from './Dashboard'
// import Player from "./Player"

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


const PlaylistSongs = ({ accessToken, playlistId }) => {
  // console.log('tracks ',tracks)
  const [tracks, setTracks] = useState([]);
  const [loading, setLoading] = useState(false);

  const [search, setSearch] = useState("")
  const [playingTrack, setPlayingTrack] = useState()

  const [playlistTracks, setPlaylistTracks] = useState("");



  function chooseTrack(track) {
    setPlayingTrack(track)
    setSearch("")
    // setLyrics("")
  }

  function handlePlay(track) {
    chooseTrack(track)
  }


  useEffect(() => {
    const fetchTracks = async () => {
      if (!accessToken || !playlistId) return;

      setLoading(true);
      try {
        const songs = await getPlaylistSongsDetails(playlistId);
        console.log('PlaylistSongs tracks ', songs)
        setTracks(songs);
      } catch (error) {
        console.error('Error:', error);
      } finally {
        setLoading(false);
      }
    };

    fetchTracks();
  }, [accessToken, playlistId]);




  const getPlaylistTracks = async (playlistId) => {
    try {
      const response = await fetch(`https://api.spotify.com/v1/playlists/${playlistId}/tracks`, {
        headers: {
          'Authorization': `Bearer ${accessToken}`
        }
      });

      const data = await response.json();
      console.log('getPlaylistTracks ', data)
      return data;
    } catch (error) {
      console.error('Error fetching playlist tracks:', error);
    }
  };



  const getPlaylistSongsDetails = async (playlistId) => {
    // setplaylistId(playlistId)
    try {
      const playlistData = await getPlaylistTracks(playlistId);

      if (!playlistData || !playlistData.items) {
        console.log('No tracks found in playlist');
        return [];
      }

      const tracks = playlistData.items.map(item => {
        const track = item.track;
        return {
          id: track.id,
          name: track.name,
          uri: track.uri, // Track URI
          images: {
            large: getImageBySize(track.album.images, 'large'),
            medium: getImageBySize(track.album.images, 'medium'),
            small: getImageBySize(track.album.images, 'small')
          },
          duration_ms: track.duration_ms,
          artists: track.artists.map(artist => ({
            id: artist.id,
            name: artist.name,
            uri: artist.uri
          })),
          album: {
            id: track.album.id,
            name: track.album.name,
            uri: track.album.uri,
            images: track.album.images, // Array of images (different sizes)
            release_date: track.album.release_date
          },
          preview_url: track.preview_url,
          external_urls: track.external_urls
        };
      });

      return tracks;
    } catch (error) {
      console.error('Error processing playlist tracks:', error);
      return [];
    }
  };


  // Helper function to get specific image size
  const getImageBySize = (images, size) => {
    const sizeMap = {
      'large': 0,    // 640px
      'medium': 1,   // 300px
      'small': 2     // 64px
    };

    return images[sizeMap[size]] || images[0];
  };


  ////////////////////////////////////////////////////////////////////////////////////////////
  // Example usage in a component
  useEffect(() => {
    const fetchPlaylistSongs = async () => {
      if (!accessToken || !playlistId) return;

      const songs = await getPlaylistSongsDetails(playlistId);
      console.log('songs ', songs)
      setTracks(songs)

      songs.forEach(song => {
        console.log('Track Name:', song.name);
        console.log('Track URI:', song.uri);
        console.log('Album Images:', song.album.images);
        console.log('Artists:', song.artists.map(artist => artist.name).join(', '));
        console.log('---');
      });

      setPlaylistTracks(songs);
    };

    fetchPlaylistSongs();
  }, [accessToken, playlistId]);
  ////////////////////////////////////////////////////////////////////////////////////////////




  if (loading) return <div>Loading tracks...</div>;

  return (
    <div>
      <section>
        <h2>Playlist Tracks</h2>
        <div style={flexS}>
          {tracks.map(track => (
            <div key={track.id} className="playlist-card">
              <img height="200px" src={track.album.images[1]?.url} alt={track.album.name} />
              <h5>{track.album.name.slice(0, 25)}</h5>
              <p>{track.artists[0].name}</p>
              <button onClick={() => handlePlay(track)} style={buttonS}>Play</button>
            </div>
          ))}
        </div>
      </section>
    </div>
  );
};

export default PlaylistSongs;



























{/* {tracks.map(track => (
          <div key={track.id} className="track-item">
            <img 
              src={track.album.images[0]?.url} 
              alt={track.album.name}
              width="64"
              height="64"
            />
            <div>
              <h4>{track.name}</h4>
              <p>{track.artists.map(artist => artist.name).join(', ')}</p>
              <p>URI: {track.uri}</p>
              <p>Album: {track.album.name}</p>
            </div>
          </div>
        ))} */}