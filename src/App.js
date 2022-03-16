import "./App.css";
import { Grid } from "@material-ui/core";
import youtube from "./api/youtube";
import SearchBar from "./components/SearchBar";
import { useState } from "react";
import VideoDetail from "./components/VideodDetail";

function App() {
  const [videos, setVideos] = useState([]);
  const [selectedVideo, setSelectedVideo] = useState({ id: {}, snippet: {} });

  return (
    <div className="App">
      <Grid style={{ justifyContent: "center" }} container spacing={10}>
        <Grid item-xs={11}>
          <Grid container spacing={10}>
            <Grid item xs={12}>
              <SearchBar onSubmit={handleSubmit} />
            </Grid>
            <Grid item xs={8}>
              {/* {VideodDetail} */}
              <VideoDetail video={selectedVideo} />
            </Grid>
            <Grid item xs={4}>
              {/* {VideoList} */}
            </Grid>
          </Grid>
        </Grid>
      </Grid>
    </div>
  );
  async function handleSubmit(searchTerm) {
    const {
      data: { items: videos },
    } = await youtube.get("search", {
      params: {
        part: "snippet",
        maxResults: 5,
        key: "AIzaSyDItzxlKK-NfduS4zlUQzCT2Vc0P2jJhzE",
        q: searchTerm,
      },
    });
    setVideos(videos);
    setSelectedVideo(videos[0]);
  }
}

export default App;
