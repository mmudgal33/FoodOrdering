// React component example
const PlayerControls = () => {
  const [playbackState, setPlaybackState] = useState(null);
  const [devices, setDevices] = useState([]);

  const refreshPlaybackState = async () => {
      try {
          const state = await spotifyService.getPlaybackState();
          setPlaybackState(state);
      } catch (error) {
          console.error('Error refreshing playback state:', error);
      }
  };

  const refreshDevices = async () => {
      try {
          const devicesData = await spotifyService.getDevices();
          setDevices(devicesData.devices || []);
      } catch (error) {
          console.error('Error refreshing devices:', error);
      }
  };

  const handlePlayPause = async () => {
      await handlePlayPauseEnhanced();
      setTimeout(refreshPlaybackState, 1000);
  };

  const handleDeviceChange = async (deviceId) => {
      try {
          await spotifyService.transferPlayback(deviceId);
          setTimeout(refreshPlaybackState, 1000);
      } catch (error) {
          console.error('Error transferring playback:', error);
      }
  };

  useEffect(() => {
      refreshPlaybackState();
      refreshDevices();
      const interval = setInterval(refreshPlaybackState, 5000);
      return () => clearInterval(interval);
  }, []);

  return (
      <div className="player-controls">
          <button onClick={handlePlayPause}>
              {playbackState?.is_playing ? '⏸️ Pause' : '▶️ Play'}
          </button>
          
          <div className="devices">
              <h4>Available Devices:</h4>
              {devices.map(device => (
                  <div key={device.id} className={`device ${device.is_active ? 'active' : ''}`}>
                      {device.name} ({device.type})
                      {!device.is_active && (
                          <button onClick={() => handleDeviceChange(device.id)}>
                              Switch to this device
                          </button>
                      )}
                  </div>
              ))}
          </div>
      </div>
  );
};



export default PlayerControls