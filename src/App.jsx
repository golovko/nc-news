import Header from './components/Header';
import NavBar from './components/NavBar';
import Main from './components/Main';
import Footer from './components/Footer';
import './App.css';
import User from './components/User';

//TODO: Hard-coded user name, must be changed after implementing user authentication
export const username = 'happyamy2016';

function App() {
  return (
    <>
      <User />
      <Header />
      <NavBar />
      <Main />
      <Footer />
    </>
  );
}

export default App;
