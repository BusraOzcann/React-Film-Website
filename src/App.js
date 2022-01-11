import { BrowserRouter as Router, Routes, Route,  } from "react-router-dom";
import Populars from "./components/Films/Populars";
import Latest from "./components/Films/Latest";
import NowPlaying from "./components/Films/NowPlaying";
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
        <Route exact path="/latest" element={<Latest />} />
        <Route exact path="/detail/:id" element={<FilmDetail />} />
      </Routes>
      <FooterMenu/>
    </Router>
  );
}

export default App;
