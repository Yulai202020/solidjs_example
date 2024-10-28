import { Router, Routes, Route, Link } from 'solid-app-router';
import Home from './components/Home';
import style from "./Navigation.module.scss";
import Catalog from './components/Catalog';
import "./std.scss";
import config from "./components/catalog.json";

const App = () => {
  return (
    // <Router>
    //   <div>
    //     <nav class={style.navList}>
    //       {Object.keys(config).map((key) => (
    //         <li><a href={`/catalogs?catalog=${key}`}>{key}</a></li>
    //       ))}
    //     </nav>
    //     {/* <Routes> */}
    //       <Route path="/" element={<Home />} />
    //       <Route path="/catalogs" element={<Catalog />} />
    //     {/* </Routes> */}
    //   </div>
    // </Router>
    <>
    <nav class={style.navList}>
      {Object.keys(config).map((key) => (
        <li><a href={`/catalogs?catalog=${key}`}>{key}</a></li>
      ))}
    </nav>
    <Home />
    </>
  );
};

export default App;
