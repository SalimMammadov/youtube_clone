import "./App.css";
import Header from "./Header";
import Sidebar from "./Sidebar";
import SearchPage from "./SearchPage";
import RecommendedVideos from "./RecommendedVideos";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";

function App() {
  return (
    <Router>
      <div className="app">
        <Header />
        <Switch>
          <Route exact path="/">
            <div className="app__page">
              <Sidebar />
              <RecommendedVideos />
            </div>
          </Route>
          <Route path="/search/:inputSearch">
            <div className="app__page">
              <Sidebar />
              <SearchPage />
            </div>
          </Route>
        </Switch>
      </div>
    </Router>
  );
}

export default App;
