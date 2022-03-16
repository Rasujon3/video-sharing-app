import logo from "./logo.svg";
import "./App.css";
import { Grid } from "@material-ui/core";
import youtube from "./api/youtube";
import SearchBar from "./components/SearchBar";

function App() {
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
            </Grid>
            <Grid item xs={4}>
              {/* {VideoList} */}
            </Grid>
          </Grid>
        </Grid>
      </Grid>
    </div>
  );
  async function handleSubmit(searchItem) {
    const response = await youtube.get("search", {
      params: {
        part: "snippet",
        maxResults: 5,
        key: "AIzaSyDItzxlKK-NfduS4zlUQzCT2Vc0P2jJhzE",
        q: searchItem,
      },
    });
    console.log(response.data.items);
  }
}

export default App;
