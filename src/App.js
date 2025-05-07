import './App.css';
import NavBar from './components/navbar';
import Body from './components/body';
import Contact from './components/contact';
import Footer from './components/footer';

function App() {
  return (
    <div className="App">
      {/* <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <p>
          Edit <code>src/App.js</code> and save to reload.
        </p>
        <a
          className="App-link"
          href="https://reactjs.org"
          target="_blank"
          rel="noopener noreferrer"
        >
          Learn React
        </a>
      </header> */}
      <NavBar />
      <Body />
      <Contact />
      <Footer />
    </div>
  );
}

export default App;
