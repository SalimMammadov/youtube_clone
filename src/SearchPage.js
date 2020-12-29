import React from "react";
import "./SearchPage.css";
import ChannelRow from "./ChannelRow";
import VideoRow from "./VideoRow";
import TuneOutlinedIcon from "@material-ui/icons/TuneOutlined";
function SearchPage() {
  return (
    <div className="searchPage">
      <div className="searchPage__filter">
        <TuneOutlinedIcon />
        <h2>Filter</h2>
      </div>
      <hr />

      <ChannelRow
        image=""
        channel="Salim Mammadov"
        verified="true"
        subs="100K"
        noOfVideos={543}
        description="Animi pariatur Nos"
      />
      <hr></hr>
      <VideoRow
        title="Dolores voluptas dol"
        views="2.3M views"
        timestamp="3 days ago"
        channelImage=""
        channel="Salim Mammadov"
        description="Animi pariatur Nos..It is a description"
        image="https://c4.wallpaperflare.com/wallpaper/500/442/354/outrun-vaporwave-hd-wallpaper-thumb.jpg"
      />
    </div>
  );
}

export default SearchPage;
