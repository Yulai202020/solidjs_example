import { Router, Routes, Route, Link } from 'solid-app-router';
import Home from './components/Home';
import style from "./Navigation.module.scss";
import Catalog from './components/Catalog';
import "./std.scss";
import config from "./components/catalog.json";

const App = () => {
  return (
    <Router>
      <nav class={style.navList}>
        <ul>
          {Object.keys(config).map((key) => (
            <li key={key}>
              <Link href={`/catalogs?catalog=${key}`}>{key}</Link>
            </li>
          ))}
        </ul>
      </nav>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/catalogs" element={<Catalog />} />
      </Routes>
    </Router>
  );
};

export default App;
