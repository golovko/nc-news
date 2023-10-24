import Header from './components/Header';
import NavBar from './components/NavBar';
import Main from './components/Main';
import Footer from './components/Footer';
import './App.css';

//TODO: hardcoded username, need to be changed after implementation of a user authentication
export const username = 'happyamy2016';

function App() {
  return (
    <>
      <Header />
      <NavBar />
      <Main />
      <Footer />
    </>
  );
}

export default App;
