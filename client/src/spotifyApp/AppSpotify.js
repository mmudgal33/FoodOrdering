import "bootstrap/dist/css/bootstrap.min.css"
import Login from "./Login"
import Dashboard from "./Dashboard"
// import DebugAuth from "./DebugAuth"

function AppSpotify() {
  // Get code from URL parameters
  const urlParams = new URLSearchParams(window.location.search);
  const code = urlParams.get("code");
  // console.log('App.js - Code:', code);
  // console.log('App.js - Full URL:', window.location.href);
  // const code = new URLSearchParams(window.location.search).get("code");
  
  // Temporary debug
  if (code) {
    console.log('🎯 CODE FOUND:', code);
  }
  
  
  
  // Debug: log all URL parameters
  for (let [key, value] of urlParams.entries()) {
    console.log(`URL Param: ${key}=${value}`);
  }

  // return code ? <Dashboard code={code} /> : <Login />
  return (
    <>
      {/* <DebugAuth /> */}
      {code ? <Dashboard code={code} /> : <Login />}
    </>
  );
}

export default AppSpotify






























// import "bootstrap/dist/css/bootstrap.min.css"
// // import './bootstrap/dist/css/bootstrap.min.css';
// import Login from "./Login"
// import Dashboard from "./Dashboard"
// // npm audit fix --force

// const code = new URLSearchParams(window.location.search).get("code")
// const urlParams = new URLSearchParams(window.location.search);




// function AppSpotify() {
//   console.log('App.js ', code);
//   console.log('urlParams ', urlParams);
//   return  code ? <Dashboard code={code} /> : <Login />
// }

// export default AppSpotify
























// import { useEffect } from 'react';
// import { useLocation } from 'react-router-dom';


// const location = useLocation();

//   useEffect(() => {
//     const urlParams = new URLSearchParams(location.search);
//     code = urlParams.get('code');
//     console.log('Code from URL:', code); // This will work now
//   }, [location]);




// const urlParams = new URLSearchParams(window.location.search);
// const code = urlParams.get('code');
// console.log('Authorization Code:', code);