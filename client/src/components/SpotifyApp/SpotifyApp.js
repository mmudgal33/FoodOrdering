import React from 'react'
import classes from './SpotifyApp.module.css'

const SpotifyApp = () => {
    return (
        <>
            <section className={classes.container}>
                <div className={classes.wrapper}>
                    {/* <h4 className={classes.subtitle}>Backend App Connected</h4> */}

                    <h2 className={classes.title}> <span className={classes.subtitle}>Backend App Connected</span> &nbsp;  Spotify App!</h2><br /><br />
                    <div className={classes.spotifyapp}>
                        <iframe src='https://foodordering-r5ix.onrender.com' width="800px" height="520px" frameborder="0" ></iframe>
                    </div>
                </div>
            </section>
        </>
    )
}

export default SpotifyApp
