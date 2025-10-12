
// const spotifyController = require('express').Router()

// const SpotifyWebApi = require('spotify-web-api-node');
// // Initialize Spotify API
// const spotifyApi = new SpotifyWebApi({
//     //   clientId: process.env.SPOTIFY_CLIENT_ID,
//     //   clientSecret: process.env.SPOTIFY_CLIENT_SECRET,
//     //   redirectUri: process.env.SPOTIFY_REDIRECT_URI
//     clientId: 'e257dc917f8640b5a9afe2f6e6ac1ef9',
//     clientSecret: 'b7265469b062446b973c4ad5a4e24c53',
//     redirectUri: 'http://127.0.0.1:5000/spotify/callback'
// });

// class SpotifyService {
//     constructor() {
//         this.spotifyApi = spotifyApi;
//     }

//     // Generate authentication URL
//     getAuthURL() {
//         const scopes = [
//             'user-read-private',
//             'user-read-email',
//             'user-library-read',
//             'user-read-playback-state',
//             'user-modify-playback-state',
//             'playlist-read-private'
//         ];

//         return this.spotifyApi.createAuthorizeURL(scopes, 'your-state-string');
//     }

//     // Handle callback and get tokens
//     async handleCallback(code) {
//         try {
//             console.log('Received authorization code:', code);

//             const data = await this.spotifyApi.authorizationCodeGrant(code);
//             const { access_token, refresh_token, expires_in } = data.body;

//             this.spotifyApi.setAccessToken(access_token);
//             this.spotifyApi.setRefreshToken(refresh_token);

//             console.log('Access token obtained successfully');

//             return {
//                 accessToken: access_token,
//                 refreshToken: refresh_token,
//                 expiresIn: expires_in,
//                 timestamp: Date.now()
//             };
//         } catch (error) {
//             console.error('Error getting access token:', error);
//             throw new Error(`Error getting access token: ${error.message}`);
//         }
//     }

//     // Refresh access token
//     async refreshAccessToken(refreshToken) {
//         try {
//             this.spotifyApi.setRefreshToken(refreshToken);
//             const data = await this.spotifyApi.refreshAccessToken();
//             const newAccessToken = data.body['access_token'];
//             this.spotifyApi.setAccessToken(newAccessToken);
//             return newAccessToken;
//         } catch (error) {
//             throw new Error(`Error refreshing token: ${error.message}`);
//         }
//     }

//     // Get user profile
//     async getUserProfile() {
//         try {
//             const user = await this.spotifyApi.getMe();
//             return user.body;
//         } catch (error) {
//             throw new Error(`Error getting user profile: ${error.message}`);
//         }
//     }
// }

// const spotifyService = new SpotifyService();


// // Routes
// spotifyController.get('/', (req, res) => {
//     res.send(`
//         <html>
//           <body>
//             <h1>Spotify API Example</h1>
//             <a href="/spotify/login">Login with Spotify</a>
//           </body>
//         </html>
//       `);
// });

// // Step 1: Redirect to Spotify authorization
// spotifyController.get('/login', (req, res) => {
//     const authURL = spotifyService.getAuthURL();
//     console.log('Redirecting to:', authURL);
//     res.redirect(authURL);
// });

// // Step 2: Handle Spotify callback (this is where you get the code)
// spotifyController.get('/callback', async (req, res) => {
//     try {
//         const { code, error, state } = req.query;

//         if (error) {
//             console.error('Spotify auth error:', error);
//             return res.status(400).json({ error: `Authentication failed: ${error}` });
//         }

//         if (!code) {
//             return res.status(400).json({ error: 'No authorization code received' });
//         }

//         console.log('Received code from Spotify:', code);

//         // Exchange code for access token
//         const tokens = await spotifyService.handleCallback(code);

//         // Get user profile to verify authentication
//         const userProfile = await spotifyService.getUserProfile();

//         // Send success response with tokens (in production, store securely)
//         res.send(`
//           <html>
//             <body>
//               <h1>Authentication Successful!</h1>
//               <p>Welcome, ${userProfile.display_name || userProfile.id}!</p>
//               <p>Email: ${userProfile.email || 'Not provided'}</p>
//               <div>
//                 <h3>Access Token (for testing):</h3>
//                 <textarea readonly style="width: 100%; height: 100px;">${tokens.accessToken}</textarea>
//               </div>
//               <a href="/spotify/api/user-profile">Get User Profile via API</a>
              
//             </body>
//           </html>
//         `);

//     } catch (error) {
//         console.error('Callback error:', error);
//         res.status(500).json({ error: error.message });
//     }
// });

// // API Routes (protected)
// spotifyController.get('/api/user-profile', async (req, res) => {
//     try {
//         // const newToken = await refreshAccessToken(refreshToken);
//         const userProfile = await spotifyService.getUserProfile();
//         // res.json(userProfile);
//         res.send(`
//           <html>
//             <body>
//             <p>Welcome, ${userProfile.display_name || userProfile.id}!</p>
//               <a href="/spotify/api/search?q=6pLHooDrmmXR5eJTDdKyKD&type=track&limit=10">Get search via API</a>
              
//             </body>
//           </html>
//         `);
        
//     } catch (error) {
//         res.status(401).json({ error: 'Not authenticated' });
//     }
// });

// // Search endpoint
// spotifyController.get('/api/search', async (req, res) => {
//     try {
//         const { q, type = 'track', limit = 10 } = req.query;

//         if (!q) {
//             return res.status(400).json({ error: 'Query parameter "q" is required' });
//         }

//         const results = await spotifyService.spotifyApi.search(q, [type], { limit });
//         res.json(results.body);
//     } catch (error) {
//         res.status(500).json({ error: error.message });
//     }
// });

// // spotifyController.listen(port, () => {
// //   console.log(`Server running at http://localhost:${port}`);
// //   console.log(`Login URL: http://localhost:${port}/login`);
// // });


// spotifyController.post('/info', async (req, res) => {
//     // try {
//     //   const display_name = userProfile.display_name || null;
//     //   const display_email = userProfile.email || null;
//     //   const res_token = tokens.accessToken || null;

//     //   if(res_token===null){
//     //     throw new Error("token doesn't exist!!!")
//     //   }

//     //   return res.status(201).json({display_name, display_email, res_token})
//     // } catch (error) {
//     //     return res.status(500).json(error.message)
//     // }

//     res.send("About this wiki");
// })



// // const display_name = userProfile.display_name || null;
// // const display_email = userProfile.email || null;
// // const res_token = tokens.accessToken || null;

// // console.log(tokens, userProfile)




// module.exports = spotifyController
































// // const spotifyController = require('express').Router()


// // var client_id = 'e257dc917f8640b5a9afe2f6e6ac1ef9';
// // var client_secret = 'b7265469b062446b973c4ad5a4e24c53';

// // var authOptions = {
// //   url: 'https://accounts.spotify.com/api/token',
// //   headers: {
// //     'Authorization': 'Basic ' + (new Buffer.from(client_id + ':' + client_secret).toString('base64'))
// //   },
// //   form: {
// //     grant_type: 'client_credentials'
// //   },
// //   json: true
// // };

// // spotifyController.post(authOptions, function(error, response, body) {
// //   if (!error && response.statusCode === 200) {
// //     var token = body.access_token;
// //     console.log(token)
// //   }
// // });






