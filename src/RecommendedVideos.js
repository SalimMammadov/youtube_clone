import React from "react";
import Video from "./Video";
import "./RecommendedVideos.css";
function RecommendedVideos() {
  return (
    <div className="recommendedVideos">
      <h2>Recommended Videos</h2>
      <div className="recommendedVideos__videos">
        <Video
          title="Dolores voluptas dol"
          views="2.3M views"
          timestamp="3 days ago"
          channelImage=""
          channel="Salim Mammadov"
          image="https://c4.wallpaperflare.com/wallpaper/500/442/354/outrun-vaporwave-hd-wallpaper-thumb.jpg"
        />
        <Video
          title="Dolores voluptas dolr"
          views="2.3M views"
          timestamp="3 days ago"
          channelImage=""
          channel="Salim Mammadov"
          image="https://c4.wallpaperflare.com/wallpaper/500/442/354/outrun-vaporwave-hd-wallpaper-thumb.jpg"
        />
      </div>
    </div>
  );
}

export default RecommendedVideos;
