const production = {
    url: 'https://foodordering-1-mpp9.onrender.com',
    api: 'https://foodordering-r5ix.onrender.com'
  };
  const development = {
    url: 'http://127.0.0.1:3000',
    // url: 'https://spotifybackendtofrontendappf.onrender.com',
    api: 'http://127.0.0.1:5000'
    // api: 'https://spotifybackendtofrontendapp.onrender.com'
  };
  export const config = process.env.NODE_ENV === 'development' ? development : production;
  // export const config = production;


// // Constants.js
// export const config = {
//   api: process.env.REACT_APP_API_URL || "http://127.0.0.1:5000",
//   url: process.env.REACT_APP_REDIRECT_URI || "http://127.0.0.1:3000"
// };

 