import { useState, useEffect } from "react"
import axios from "axios"
import { config } from './Constants';

const API = config.api;




  export default function useAuth(code) {
  const [accessToken, setAccessToken] = useState()
  const [refreshToken, setRefreshToken] = useState()
  const [expiresIn, setExpiresIn] = useState()
  const [error, setError] = useState(null)

  useEffect(() => {
    if (!code) {
      console.log('No code provided to useAuth');
      return;
    }

  

    console.log('useAuth - Code:', code);
    console.log('useAuth - API URL:', API);
    // .post("http://127.0.0.1:5000/login", 
    // .post("https://spotifybackendtofrontendapp.onrender.com/login",
    
    axios
      .post(`${API}/login`, { code })
      .then(res => {
        console.log('Login response:', res.data);
        setAccessToken(res.data.accessToken)
        setRefreshToken(res.data.refreshToken)
        setExpiresIn(res.data.expiresIn)
        // Clear the URL without reloading
        window.history.replaceState({}, null, "/")
      })
      .catch((error) => {
        console.error('Login error:', error);
        setError(error);
        window.location = "/"
      })
  }, [code])

  

  
  console.log(`accessToken ${accessToken}`);
  console.log(`refreshToken ${refreshToken}`);
  console.log(`expiresIn ${expiresIn}`);

  useEffect(() => {
    if (!refreshToken || !expiresIn) return
    const interval = setInterval(() => {
      axios
        // .post("http://127.0.0.1:5000/refresh", {
        .post(`${API}/refresh`, {
          // .post("https://spotifybackendtofrontendapp.onrender.com/refresh", {
          refreshToken,
        })
        .then(res => {
          setAccessToken(res.data.accessToken)
          setExpiresIn(res.data.expiresIn)
        })
        .catch(() => {
          window.location = "/"
        })
    }, (expiresIn - 60) * 1000)

    return () => clearInterval(interval)
  }, [refreshToken, expiresIn])


  localStorage.setItem('accessToken', accessToken);
  localStorage.setItem('refreshToken', refreshToken);

  return accessToken

}





































