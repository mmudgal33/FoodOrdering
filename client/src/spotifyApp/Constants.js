const production = {
    url: 'https://foodordering-1-mpp9.onrender.com',
    api: 'https://spotifybackendtofrontendapp.onrender.com'
  };
  const development = {
    url: 'http://127.0.0.1:3000',
    // url: 'https://spotifybackendtofrontendappf.onrender.com',
    api: 'http://127.0.0.1:5000'
    // api: 'https://spotifybackendtofrontendapp.onrender.com'
  };
  export const config = process.env.NODE_ENV === 'development' ? development : production;
  // export const config = production;

 