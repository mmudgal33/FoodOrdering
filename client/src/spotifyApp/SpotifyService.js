// SpotifyService.js - Service layer

import { config } from './Constants';
const API = config.api;




class SpotifyService {
  constructor() {
    // this.baseURL = 'http://127.0.0.1:5000';
    // this.baseURL = 'https://spotifybackendtofrontendapp.onrender.com';
    this.baseURL = `${API}`;
    this.accessToken = localStorage.getItem('accessToken');
    this.refreshToken = localStorage.getItem('refreshToken');
  }

  async request(endpoint, options = {}) {
    const config = {
      headers: {
        'Authorization': `Bearer ${this.accessToken}`,
        'Content-Type': 'application/json',
        ...options.headers,
      },
      ...options,
    };

    const response = await fetch(`${this.baseURL}${endpoint}`, config);

    if (response.status === 401) {
      await this.refreshAccessToken();
      return this.request(endpoint, options);
    }

    if (!response.ok) {
      throw new Error(`HTTP error! status: ${response.status}`);
    }

    return response.json();
  }

  async refreshAccessToken() {
    try {
      const response = await fetch(`${this.baseURL}/refresh`, {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({ refreshToken: this.refreshToken }),
      });

      const data = await response.json();

      if (data.accessToken) {
        this.setAccessToken(data.accessToken);
        return data.accessToken;
      }
    } catch (error) {
      this.logout();
      throw error;
    }
  }

  setAccessToken(token) {
    this.accessToken = token;
    localStorage.setItem('spotify_access_token', token);
  }

  setRefreshToken(token) {
    this.refreshToken = token;
    localStorage.setItem('spotify_refresh_token', token);
  }

  logout() {
    this.accessToken = null;
    this.refreshToken = null;
    localStorage.removeItem('spotify_access_token');
    localStorage.removeItem('spotify_refresh_token');
  }

  // User methods
  async getCurrentUser() {
    return this.request('/me');
  }

  // Search methods
  async search(query, types = ['track']) {
    return this.request(`/search?q=${encodeURIComponent(query)}&type=${types.join(',')}`);
  }

  // Playlist methods
  async getUserPlaylists() {
    return this.request('/playlists');
  }

  async createPlaylist(name, description = '', isPublic = false) {
    return this.request('/playlists', {
      method: 'POST',
      body: JSON.stringify({ name, description, public: isPublic }),
    });
  }

  // Player methods
  // async getPlaybackState() {
  //   return this.request('/player');
  // }

  // async play() {
  //   return this.request('/player/play', { method: 'PUT' });
  // }

  // async pause() {
  //   return this.request('/player/pause', { method: 'PUT' });
  // }


  //////////////////////////////////// ETC /////////////////////////////////

  // async prev() {
  //   return this.request('/player/prev', { method: 'PUT' });
  // }

  // async next() {
  //   return this.request('/player/next', { method: 'PUT' });
  // }

  // async mute() {
  //   return this.request('/player/mute', { method: 'PUT' });
  // }

  // Track methods
  async getTrack(id) {
    return this.request(`/tracks/${id}`);
  }

  // Top items
  async getTopTracks(limit = 20, timeRange = 'medium_term') {
    return this.request(`/top/tracks?limit=${limit}&time_range=${timeRange}`);
  }

  async getTopArtists(limit = 20, timeRange = 'medium_term') {
    return this.request(`/top/artists?limit=${limit}&time_range=${timeRange}`);
  }






  async getPlaybackState() {
    return this.request('/player');
  }

  async getDevices() {
    return this.request('/player/devices');
  }

  async play(deviceId = null, contextUri = null, uris = null) {
    const body = {};
    if (deviceId) body.deviceId = deviceId;
    if (contextUri) body.contextUri = contextUri;
    if (uris) body.uris = uris;

    return this.request('/player/play', {
      method: 'PUT',
      body: JSON.stringify(body),
      headers: {
        'Content-Type': 'application/json'
      }
    });
  }

  async pause(deviceId = null) {
    const body = {};
    if (deviceId) body.deviceId = deviceId;

    return this.request('/player/pause', {
      method: 'PUT',
      body: JSON.stringify(body),
      headers: {
        'Content-Type': 'application/json'
      }
    });
  }

  async transferPlayback(deviceId) {
    return this.request('/player/transfer', {
      method: 'PUT',
      body: JSON.stringify({ deviceId }),
      headers: {
        'Content-Type': 'application/json'
      }
    });
  }

  async ensureActiveDevice() {
    try {
      const devices = await this.getDevices();
      const activeDevices = devices.devices.filter(device => device.is_active);

      if (activeDevices.length > 0) {
        return activeDevices[0].id;
      }

      // If no active device, use the first available device
      const availableDevices = devices.devices.filter(device => device.is_restricted === false);
      if (availableDevices.length > 0) {
        await this.transferPlayback(availableDevices[0].id);
        return availableDevices[0].id;
      }

      throw new Error('No available devices found. Please open Spotify on any device.');
    } catch (error) {
      throw new Error('No active device found. Please open Spotify on any device.');
    }
  }
}


export const spotifyService = new SpotifyService();