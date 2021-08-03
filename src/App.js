import logo from './logo.svg';
import './App.css';
import Header from './components/header/Header'
import UMainPage from './components/caruosel/UMainPage'
import BannerBackground from './components/banner/BannerBackground'
import Carousel from './components/caruosel/Carousel';

function App() {
  return (
    <div className="App">
      <Header />
      <BannerBackground />
      <Carousel />
      
    </div>
  );
}

export default App;
