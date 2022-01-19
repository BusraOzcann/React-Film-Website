import { BrowserRouter as Router, Routes, Route,  } from "react-router-dom";
import Populars from "./components/Films/Populars";
import Upcoming from "./components/Films/Upcoming";
import TopRated from "./components/Films/TopRated";
import NowPlaying from "./components/Films/NowPlaying";
import Similars from "./components/Films/Similars";
import HomePage from "./Homepage";
import Head from "./components/Head";
import FooterMenu from "./components/FooterMenu";
import FilmDetail from "./components/FilmDetail";
import "./components/style.css";

function App() {

  return (
    <Router>
      <Head/>
      <Routes>
        <Route exact path="/" element={<HomePage />} />
        <Route exact path="/populars" element={<Populars />} />
        <Route exact path="/now-playing" element={<NowPlaying />} />
        <Route exact path="/top_rated" element={<TopRated />} />
        <Route exact path="/detail/:id" element={<FilmDetail />} />
        <Route exact path="/upcoming" element={<Upcoming />} />
        <Route exact path="/similars/:id" element={<Similars />} />
      </Routes>
      <FooterMenu/>
    </Router>
  );
}

export default App;
