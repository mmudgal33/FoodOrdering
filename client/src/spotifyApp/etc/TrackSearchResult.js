import React from "react"

export default function TrackSearchResult({ track, chooseTrack }) {
  console.log(`TrackSearchResult ${JSON.stringify(track)}`)
  function handlePlay() {
    chooseTrack(track)
  }

  return (
    
    <div
      className="d-flex m-2 align-items-center"
      style={{ cursor: "pointer" }}
      onClick={handlePlay}
    >
      <img src={track.albumUrl} style={{ height: "64px", width: "64px" }} />
      <div className="ml-3">
        <div>{track.title}</div>
        <div className="text-muted">{track.artist}</div>
      </div>
    </div>
  )
}


// TrackSearchResult
// { "artist": "Harrdy Sandhu", 
// "title": "Kya Baat Ay", 
// "uri": "spotify:track:1ZaeaGLhFSckG8sv1y7AWk", 
// "albumUrl": "https://i.scdn.co/image/ab67616d00004851e2a9524ac996a30aad51b07c" }