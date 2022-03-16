import logo from "./logo.svg";
import "./App.css";
import { Grid } from "@material-ui/core";
import youtube from "./api/youtube";

function App() {
  return (
    <div className="App">
      <Grid style={{ justifyContent: "center" }} container spacing={10}>
        <Grid item-xs={11}>
          <Grid container spacing={10}>
            <Grid item xs={12}>
              {/* {SearchBar} */}
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
}

export default App;
