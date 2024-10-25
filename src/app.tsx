import { Router, Routes, Route, Link } from 'solid-app-router';
import Home from './components/Home';
import About from './components/About';

const App = () => {
  return (
    // <Router>
    //   <div>
    //     <nav>
    //       <Link href="/">Home</Link>
    //       <Link href="/about">About</Link>
    //     </nav>
    //     {/* <Routes> */}
    //       <Route path="/" component={Home} />
    //       <Route path="/about" component={About} />
    //     {/* </Routes> */}
    //   </div>
    // </Router>
    <>
    <Home />
    </>
  );
};

export default App;
